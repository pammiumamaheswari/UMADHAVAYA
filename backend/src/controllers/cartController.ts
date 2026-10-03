import { Response, NextFunction } from 'express';
import prisma from '../config/database';
import { sendSuccess, sendError } from '../utils/apiResponse';
import { AuthenticatedRequest } from '../middleware/auth';
import { z } from 'zod';

const addItemSchema = z.object({
  productId: z.string().uuid(),
  quantity: z.number().int().min(1).default(1),
  blouseCustomization: z.string().optional(),
  guestSessionId: z.string().optional(),
});

export async function getCart(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId;
    const guestSessionId = req.query.guestSessionId as string;

    if (!userId && !guestSessionId) {
      return sendSuccess(res, {
        items: [],
        itemsSubtotal: 0,
        discountAmount: 0,
        taxAmount: 0,
        shippingFee: 0,
        totalAmount: 0,
      });
    }

    let cart = await prisma.cart.findFirst({
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

    if (!cart) {
      return sendSuccess(res, {
        items: [],
        itemsSubtotal: 0,
        discountAmount: 0,
        taxAmount: 0,
        shippingFee: 0,
        totalAmount: 0,
      });
    }

    let itemsSubtotal = 0;
    const formattedItems = cart.items.map((item) => {
      const price = Number(item.product.price);
      const total = price * item.quantity;
      itemsSubtotal += total;

      return {
        id: item.id,
        productId: item.productId,
        quantity: item.quantity,
        blouseCustomization: item.blouseCustomization,
        product: {
          id: item.product.id,
          name: item.product.name,
          slug: item.product.slug,
          sku: item.product.sku,
          price,
          mrp: Number(item.product.mrp),
          fabric: item.product.fabric,
          color: item.product.color,
          primaryImage: item.product.images[0]?.url,
          availableQuantity: item.product.inventory?.availableQuantity || 0,
        },
      };
    });

    const taxAmount = Number((itemsSubtotal * 0.05).toFixed(2)); // 5% GST on silk sarees
    const shippingFee = itemsSubtotal > 5000 ? 0 : 250; // Free shipping above ₹5,000
    const totalAmount = itemsSubtotal + taxAmount + shippingFee;

    return sendSuccess(res, {
      id: cart.id,
      items: formattedItems,
      itemsSubtotal,
      discountAmount: 0,
      taxAmount,
      shippingFee,
      totalAmount,
    });
  } catch (error) {
    next(error);
  }
}

export async function addToCart(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const payload = addItemSchema.parse(req.body);
    const userId = req.user?.userId;
    const guestSessionId = payload.guestSessionId;

    if (!userId && !guestSessionId) {
      return sendError(res, { code: 'SESSION_REQUIRED', message: 'User or guest session is required' }, 400);
    }

    // Check product inventory
    const product = await prisma.product.findUnique({
      where: { id: payload.productId },
      include: { inventory: true },
    });

    if (!product) {
      return sendError(res, { code: 'PRODUCT_NOT_FOUND', message: 'Product does not exist' }, 404);
    }

    const available = product.inventory?.availableQuantity || 0;
    if (available < payload.quantity) {
      return sendError(
        res,
        {
          code: 'INSUFFICIENT_STOCK',
          message: `Only ${available} sarees currently available in stock.`,
        },
        400
      );
    }

    // Find or create cart
    let cart = await prisma.cart.findFirst({
      where: userId ? { userId } : { guestSessionId },
    });

    if (!cart) {
      cart = await prisma.cart.create({
        data: {
          userId: userId || null,
          guestSessionId: !userId ? guestSessionId : null,
        },
      });
    }

    // Upsert cart item
    const cartItem = await prisma.cartItem.upsert({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId: payload.productId,
        },
      },
      update: {
        quantity: { increment: payload.quantity },
        blouseCustomization: payload.blouseCustomization,
      },
      create: {
        cartId: cart.id,
        productId: payload.productId,
        quantity: payload.quantity,
        blouseCustomization: payload.blouseCustomization,
      },
    });

    return sendSuccess(res, cartItem, { statusCode: 201 });
  } catch (error) {
    next(error);
  }
}

export async function updateCartItem(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    if (quantity <= 0) {
      await prisma.cartItem.delete({ where: { id } });
      return sendSuccess(res, { message: 'Item removed from cart' });
    }

    const updated = await prisma.cartItem.update({
      where: { id },
      data: { quantity },
    });

    return sendSuccess(res, updated);
  } catch (error) {
    next(error);
  }
}

export async function removeCartItem(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    await prisma.cartItem.delete({ where: { id } });
    return sendSuccess(res, { message: 'Item deleted from cart' });
  } catch (error) {
    next(error);
  }
}
