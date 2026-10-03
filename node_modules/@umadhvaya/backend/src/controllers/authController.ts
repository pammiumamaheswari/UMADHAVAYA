import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import prisma from '../config/database';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../utils/jwt';
import { sendSuccess, sendError } from '../utils/apiResponse';
import { AuthenticatedRequest } from '../middleware/auth';

const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phone: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function register(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = registerSchema.parse(req.body);

    const existingUser = await prisma.user.findUnique({
      where: { email: payload.email.toLowerCase() },
    });

    if (existingUser) {
      return sendError(
        res,
        {
          code: 'USER_EXISTS',
          message: 'An account with this email address already exists.',
        },
        409
      );
    }

    const passwordHash = await bcrypt.hash(payload.password, 10);

    const user = await prisma.user.create({
      data: {
        email: payload.email.toLowerCase(),
        passwordHash,
        firstName: payload.firstName,
        lastName: payload.lastName,
        phone: payload.phone,
        customerProfile: {
          create: {
            isSubscribed: true,
          },
        },
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });

    const accessToken = generateAccessToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    const refreshToken = generateRefreshToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    return sendSuccess(
      res,
      {
        user,
        accessToken,
        refreshToken,
      },
      { statusCode: 201 }
    );
  } catch (error) {
    next(error);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = loginSchema.parse(req.body);

    const user = await prisma.user.findUnique({
      where: { email: payload.email.toLowerCase() },
      include: { customerProfile: true },
    });

    if (!user) {
      return sendError(
        res,
        {
          code: 'INVALID_CREDENTIALS',
          message: 'Invalid email or password combination.',
        },
        401
      );
    }

    const isValidPassword = await bcrypt.compare(payload.password, user.passwordHash);
    if (!isValidPassword) {
      return sendError(
        res,
        {
          code: 'INVALID_CREDENTIALS',
          message: 'Invalid email or password combination.',
        },
        401
      );
    }

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    const accessToken = generateAccessToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    const refreshToken = generateRefreshToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    return sendSuccess(res, {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        role: user.role,
        avatarUrl: user.customerProfile?.avatarUrl,
        createdAt: user.createdAt,
      },
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(error);
  }
}

export async function refresh(req: Request, res: Response, next: NextFunction) {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return sendError(res, { code: 'MISSING_TOKEN', message: 'Refresh token is required.' }, 400);
    }

    const decoded = verifyRefreshToken(refreshToken);
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, email: true, role: true, isActive: true },
    });

    if (!user || !user.isActive) {
      return sendError(res, { code: 'INVALID_TOKEN', message: 'User is inactive or not found.' }, 401);
    }

    const newAccessToken = generateAccessToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    return sendSuccess(res, { accessToken: newAccessToken });
  } catch (error) {
    next(error);
  }
}

export async function me(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    if (!req.user) {
      return sendError(res, { code: 'UNAUTHORIZED', message: 'Not authenticated' }, 401);
    }

    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        role: true,
        isEmailVerified: true,
        createdAt: true,
        customerProfile: {
          include: {
            addresses: true,
          },
        },
      },
    });

    if (!user) {
      return sendError(res, { code: 'USER_NOT_FOUND', message: 'User not found' }, 404);
    }

    return sendSuccess(res, user);
  } catch (error) {
    next(error);
  }
}
