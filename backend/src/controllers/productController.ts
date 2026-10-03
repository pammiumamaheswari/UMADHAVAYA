import { Request, Response, NextFunction } from 'express';
import prisma from '../config/database';
import { sendSuccess, sendPaginated, sendError } from '../utils/apiResponse';
import { ProductStatus } from '@prisma/client';

export async function getProducts(req: Request, res: Response, next: NextFunction) {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 12;
    const skip = (page - 1) * pageSize;

    const {
      category,
      collection,
      fabric,
      occasion,
      color,
      pattern,
      workType,
      minPrice,
      maxPrice,
      search,
      sortBy,
      isFeatured,
      isBestSeller,
      isNewArrival,
    } = req.query;

    const where: any = {
      status: ProductStatus.ACTIVE,
    };

    if (category) {
      where.category = { slug: String(category) };
    }

    if (collection) {
      where.collection = { slug: String(collection) };
    }

    if (fabric) {
      where.fabric = { contains: String(fabric), mode: 'insensitive' };
    }

    if (occasion) {
      where.occasion = { contains: String(occasion), mode: 'insensitive' };
    }

    if (color) {
      where.color = { contains: String(color), mode: 'insensitive' };
    }

    if (pattern) {
      where.pattern = { contains: String(pattern), mode: 'insensitive' };
    }

    if (workType) {
      where.workType = { contains: String(workType), mode: 'insensitive' };
    }

    if (isFeatured === 'true') where.isFeatured = true;
    if (isBestSeller === 'true') where.isBestSeller = true;
    if (isNewArrival === 'true') where.isNewArrival = true;

    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price.gte = parseFloat(String(minPrice));
      if (maxPrice) where.price.lte = parseFloat(String(maxPrice));
    }

    if (search) {
      where.OR = [
        { name: { contains: String(search), mode: 'insensitive' } },
        { description: { contains: String(search), mode: 'insensitive' } },
        { fabric: { contains: String(search), mode: 'insensitive' } },
        { color: { contains: String(search), mode: 'insensitive' } },
        { occasion: { contains: String(search), mode: 'insensitive' } },
      ];
    }

    let orderBy: any = { createdAt: 'desc' };
    if (sortBy === 'price_asc') orderBy = { price: 'asc' };
    if (sortBy === 'price_desc') orderBy = { price: 'desc' };
    if (sortBy === 'popular') orderBy = { isBestSeller: 'desc' };

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        skip,
        take: pageSize,
        orderBy,
        include: {
          category: { select: { id: true, name: true, slug: true } },
          collection: { select: { id: true, name: true, slug: true } },
          images: { orderBy: { displayOrder: 'asc' } },
          inventory: { select: { availableQuantity: true, stockQuantity: true } },
        },
      }),
      prisma.product.count({ where }),
    ]);

    const formatted = products.map((p) => ({
      ...p,
      price: Number(p.price),
      mrp: Number(p.mrp),
      discountPercent: Number(p.discountPercent),
      taxRate: Number(p.taxRate),
      availableQuantity: p.inventory?.availableQuantity || 0,
      stockQuantity: p.inventory?.stockQuantity || 0,
    }));

    return sendPaginated(res, formatted, {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error) {
    next(error);
  }
}

export async function getProductBySlug(req: Request, res: Response, next: NextFunction) {
  try {
    const { slug } = req.params;

    const product = await prisma.product.findUnique({
      where: { slug },
      include: {
        category: true,
        collection: true,
        images: { orderBy: { displayOrder: 'asc' } },
        videos: true,
        inventory: true,
        reviews: {
          where: { isApproved: true },
          include: {
            user: { select: { firstName: true, lastName: true } },
            images: true,
          },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!product) {
      return sendError(
        res,
        {
          code: 'PRODUCT_NOT_FOUND',
          message: 'The requested saree could not be found.',
        },
        404
      );
    }

    // Compute average rating
    const avgRating =
      product.reviews.length > 0
        ? product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length
        : 5.0;

    const formatted = {
      ...product,
      price: Number(product.price),
      mrp: Number(product.mrp),
      discountPercent: Number(product.discountPercent),
      taxRate: Number(product.taxRate),
      availableQuantity: product.inventory?.availableQuantity || 0,
      stockQuantity: product.inventory?.stockQuantity || 0,
      ratingAverage: Number(avgRating.toFixed(1)),
      reviewsCount: product.reviews.length,
    };

    return sendSuccess(res, formatted);
  } catch (error) {
    next(error);
  }
}
