import { Request, Response, NextFunction } from 'express';
import prisma from '../config/database';
import { sendSuccess } from '../utils/apiResponse';

export async function getCategories(req: Request, res: Response, next: NextFunction) {
  try {
    const categories = await prisma.category.findMany({
      where: { isActive: true },
      orderBy: { displayOrder: 'asc' },
      include: {
        _count: {
          select: { products: true },
        },
      },
    });

    return sendSuccess(res, categories);
  } catch (error) {
    next(error);
  }
}

export async function getCollections(req: Request, res: Response, next: NextFunction) {
  try {
    const collections = await prisma.collection.findMany({
      where: { isActive: true },
      orderBy: { displayOrder: 'asc' },
      include: {
        _count: {
          select: { products: true },
        },
      },
    });

    return sendSuccess(res, collections);
  } catch (error) {
    next(error);
  }
}
