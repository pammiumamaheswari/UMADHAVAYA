import { Response, NextFunction } from 'express';
import prisma from '../config/database';
import { sendSuccess, sendError } from '../utils/apiResponse';
import { AuthenticatedRequest } from '../middleware/auth';
import { OrderStatus, PaymentStatus, PaymentProvider } from '@prisma/client';
import { z } from 'zod';

const createOrderSchema = z.object({
  shippingAddress: z.object({
    fullName: z.string().min(1),
    phone: z.string().min(10),
    streetAddress: z.string().min(1),
    apartmentSuite: z.string().optional(),
    city: z.string().min(1),
    state: z.string().min(1),
    pincode: z.string().min(6),
    country: z.string().default('India'),
  }),
  couponCode: z.string().optional(),
  customerNotes: z.string().optional(),
  guestEmail: z.string().email().optional(),
  guestPhone: z.string().optional(),
  guestSessionId: z.string().optional(),
});

export async function createOrder(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const payload = createOrderSchema.parse(req.body);
    const userId = req.user?.userId;
    const guestSessionId = payload.guestSessionId;

    if (!userId && !guestSessionId) {
      return sendError(res, { code: 'AUTHENTICATION_REQUIRED', message: 'User or guest session is required' }, 400);
    }

    // 1. Fetch current cart
    const cart = await prisma.cart.findFirst({
      where: userId ? { userId } : { guestSessionId },
      include: {
        items: {
          include: {
            product: {
              include: {
                images: { where: { isPrimary: true } },
                inventory: true,
              },
            },
          },
        },
      },
    });

    if (!cart || cart.items.length === 0) {
      return sendError(res, { code: 'CART_EMPTY', message: 'Your cart is empty. Cannot checkout.' }, 400);
    }

    // 2. Recalculate price server-side & validate stock strictly
    let itemsSubtotal = 0;
    const orderItemsToCreate: any[] = [];

    for (const item of cart.items) {
      const product = item.product;
      const available = product.inventory?.availableQuantity || 0;

      if (available < item.quantity) {
        return sendError(
          res,
          {
            code: 'INSUFFICIENT_STOCK',
            message: `Insufficient stock for "${product.name}". Available: ${available}`,
          },
          400
        );
      }

      const price = Number(product.price);
      const total = price * item.quantity;
      const tax = Number((total * 0.05).toFixed(2));
      itemsSubtotal += total;

      orderItemsToCreate.push({
        productId: product.id,
        productName: product.name,
        productSku: product.sku,
        productImageUrl: product.images[0]?.url || null,
        sareeFabric: product.fabric,
        unitPrice: price,
        quantity: item.quantity,
        totalPrice: total,
        taxAmount: tax,
      });
    }

    // 3. Discount calculation if coupon provided
    let discountAmount = 0;
    if (payload.couponCode) {
      const coupon = await prisma.coupon.findUnique({
        where: { code: payload.couponCode.toUpperCase() },
      });
      if (coupon && coupon.isActive && new Date() <= coupon.endDate) {
        if (!coupon.minOrderAmount || itemsSubtotal >= Number(coupon.minOrderAmount)) {
          if (coupon.discountType === 'PERCENTAGE') {
            discountAmount = (itemsSubtotal * Number(coupon.discountValue)) / 100;
            if (coupon.maxDiscountAmount && discountAmount > Number(coupon.maxDiscountAmount)) {
              discountAmount = Number(coupon.maxDiscountAmount);
            }
          } else {
            discountAmount = Number(coupon.discountValue);
          }
        }
      }
    }

    const taxAmount = Number(((itemsSubtotal - discountAmount) * 0.05).toFixed(2));
    const shippingFee = itemsSubtotal > 5000 ? 0 : 250;
    const totalAmount = Number((itemsSubtotal - discountAmount + taxAmount + shippingFee).toFixed(2));

    // 4. Generate unique luxury order number: UMD-YYYY-RANDOM
    const orderNumber = `UMD-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

    // 5. Create Order in transaction
    const order = await prisma.$transaction(async (tx) => {
      const createdOrder = await tx.order.create({
        data: {
          orderNumber,
          userId: userId || null,
          guestEmail: payload.guestEmail,
          guestPhone: payload.guestPhone,
          status: OrderStatus.CONFIRMED, // In production, PENDING_PAYMENT until webhook
          itemsSubtotal,
          discountAmount,
          taxAmount,
          shippingFee,
          totalAmount,
          couponCode: payload.couponCode,
          shippingSnapshot: payload.shippingAddress,
          customerNotes: payload.customerNotes,
          items: {
            create: orderItemsToCreate,
          },
          statusHistory: {
            create: {
              status: OrderStatus.CONFIRMED,
              notes: 'Order placed successfully by customer.',
              performedBy: userId || 'GUEST',
            },
          },
          payments: {
            create: {
              paymentProvider: PaymentProvider.RAZORPAY,
              amount: totalAmount,
              status: PaymentStatus.CAPTURED,
              currency: 'INR',
              paidAt: new Date(),
            },
          },
        },
        include: {
          items: true,
          payments: true,
        },
      });

      // Reserve/Deduct Inventory
      for (const item of cart.items) {
        await tx.inventory.update({
          where: { productId: item.productId },
          data: {
            stockQuantity: { decrement: item.quantity },
            availableQuantity: { decrement: item.quantity },
          },
        });
      }

      // Clear the cart
      await tx.cartItem.deleteMany({
        where: { cartId: cart.id },
      });

      return createdOrder;
    });

    return sendSuccess(res, order, { statusCode: 201 });
  } catch (error) {
    next(error);
  }
}

export async function getUserOrders(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return sendError(res, { code: 'UNAUTHORIZED', message: 'Login required to view orders' }, 401);
    }

    const orders = await prisma.order.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        items: true,
        payments: true,
        shipments: true,
        statusHistory: { orderBy: { createdAt: 'asc' } },
      },
    });

    return sendSuccess(res, orders);
  } catch (error) {
    next(error);
  }
}

export async function getOrderById(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const userId = req.user?.userId;

    const order = await prisma.order.findFirst({
      where: {
        OR: [{ id }, { orderNumber: id }],
        ...(userId ? { userId } : {}),
      },
      include: {
        items: true,
        payments: true,
        shipments: true,
        statusHistory: { orderBy: { createdAt: 'asc' } },
      },
    });

    if (!order) {
      return sendError(res, { code: 'ORDER_NOT_FOUND', message: 'Order could not be found' }, 404);
    }

    return sendSuccess(res, order);
  } catch (error) {
    next(error);
  }
}
