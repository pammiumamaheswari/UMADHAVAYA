import { Request, Response, NextFunction } from 'express';
import prisma from '../config/database';
import { sendSuccess, sendPaginated } from '../utils/apiResponse';
import { OrderStatus, ProductStatus } from '@prisma/client';

export async function getDashboardStats(_req: Request, res: Response, next: NextFunction) {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [
      totalOrders,
      ordersToday,
      totalCustomers,
      totalProducts,
      lowStockCount,
      recentOrders,
      revenueResult,
    ] = await Promise.all([
      prisma.order.count(),
      prisma.order.count({ where: { createdAt: { gte: today } } }),
      prisma.user.count({ where: { role: 'CUSTOMER' } }),
      prisma.product.count({ where: { status: { not: ProductStatus.ARCHIVED } } }),
      prisma.inventory.count({
        where: {
          stockQuantity: { lte: 3 },
        },
      }),
      prisma.order.findMany({
        take: 6,
        orderBy: { createdAt: 'desc' },
        include: {
          items: true,
          user: { select: { firstName: true, lastName: true, email: true } },
        },
      }),
      prisma.order.aggregate({
        _sum: { totalAmount: true },
        where: {
          status: {
            in: [OrderStatus.CONFIRMED, OrderStatus.PROCESSING, OrderStatus.PACKED, OrderStatus.SHIPPED, OrderStatus.DELIVERED],
          },
        },
      }),
    ]);

    const totalRevenue = Number(revenueResult._sum.totalAmount || 0);

    return sendSuccess(res, {
      totalRevenue,
      totalOrders,
      ordersToday,
      totalCustomers,
      totalProducts,
      lowStockCount,
      recentOrders,
    });
  } catch (error) {
    next(error);
  }
}

export async function getAdminOrders(req: Request, res: Response, next: NextFunction) {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 15;
    const status = req.query.status as OrderStatus;
    const skip = (page - 1) * pageSize;

    const where: any = {};
    if (status) where.status = status;

    const [orders, total] = await Promise.all([
      prisma.order.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { createdAt: 'desc' },
        include: {
          items: true,
          payments: true,
          user: { select: { firstName: true, lastName: true, email: true, phone: true } },
        },
      }),
      prisma.order.count({ where }),
    ]);

    return sendPaginated(res, orders, {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error) {
    next(error);
  }
}

export async function updateOrderStatus(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const { status, notes, courierPartner, trackingNumber } = req.body;

    const updatedOrder = await prisma.$transaction(async (tx) => {
      const order = await tx.order.update({
        where: { id },
        data: {
          status: status as OrderStatus,
          statusHistory: {
            create: {
              status: status as OrderStatus,
              notes: notes || `Status updated to ${status}`,
              performedBy: 'ADMIN',
            },
          },
        },
      });

      if (status === OrderStatus.SHIPPED && courierPartner && trackingNumber) {
        await tx.shipment.create({
          data: {
            orderId: id,
            courierPartner,
            trackingNumber,
            shippedAt: new Date(),
          },
        });
      }

      return order;
    });

    return sendSuccess(res, updatedOrder);
  } catch (error) {
    next(error);
  }
}

export async function getAdminInventory(_req: Request, res: Response, next: NextFunction) {
  try {
    const inventory = await prisma.inventory.findMany({
      include: {
        product: {
          select: {
            id: true,
            name: true,
            sku: true,
            fabric: true,
            price: true,
            images: { where: { isPrimary: true } },
          },
        },
      },
      orderBy: { stockQuantity: 'asc' },
    });

    return sendSuccess(res, inventory);
  } catch (error) {
    next(error);
  }
}

export async function adjustInventory(req: Request, res: Response, next: NextFunction) {
  try {
    const { productId, quantityChange, reason } = req.body;

    const inventory = await prisma.inventory.findUnique({
      where: { productId },
    });

    if (!inventory) {
      return res.status(404).json({ error: 'Inventory not found' });
    }

    const previousStock = inventory.stockQuantity;
    const newStock = Math.max(0, previousStock + Number(quantityChange));

    const currentAvailable = inventory.availableQuantity || 0;
    const newAvailable = Math.max(0, currentAvailable + Number(quantityChange));

    const updated = await prisma.$transaction(async (tx) => {
      const inv = await tx.inventory.update({
        where: { productId },
        data: {
          stockQuantity: newStock,
          availableQuantity: newAvailable,
        },
      });

      await tx.inventoryTransaction.create({
        data: {
          inventoryId: inv.id,
          type: 'DAMAGE_ADJUSTMENT',
          quantityChange: Number(quantityChange),
          previousStock,
          newStock,
          notes: reason || 'Admin manual stock adjustment',
        },
      });

      return inv;
    });

    return sendSuccess(res, updated);
  } catch (error) {
    next(error);
  }
}
