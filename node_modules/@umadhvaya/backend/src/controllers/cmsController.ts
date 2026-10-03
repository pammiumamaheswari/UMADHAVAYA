import { Request, Response, NextFunction } from 'express';
import prisma from '../config/database';
import { sendSuccess } from '../utils/apiResponse';

export async function getBanners(req: Request, res: Response, next: NextFunction) {
  try {
    const position = req.query.position as string;
    const banners = await prisma.banner.findMany({
      where: {
        isActive: true,
        ...(position ? { position } : {}),
      },
      orderBy: { displayOrder: 'asc' },
    });

    return sendSuccess(res, banners);
  } catch (error) {
    next(error);
  }
}

export async function getBlogPosts(_req: Request, res: Response, next: NextFunction) {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { isPublished: true },
      orderBy: { publishedAt: 'desc' },
      take: 6,
    });

    return sendSuccess(res, posts);
  } catch (error) {
    next(error);
  }
}
