import { Request, Response, NextFunction } from 'express';
import { sendError } from '../utils/apiResponse';
import { ZodError } from 'zod';

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error('🔥 [Unhandled Error]:', err);

  if (err instanceof ZodError) {
    const fields: Record<string, string> = {};
    err.errors.forEach((e) => {
      const key = e.path.join('.');
      fields[key] = e.message;
    });

    return sendError(
      res,
      {
        code: 'VALIDATION_ERROR',
        message: 'Invalid input payload',
        fields,
      },
      422
    );
  }

  // Prisma unique constraint violation
  if (err.code === 'P2002') {
    return sendError(
      res,
      {
        code: 'DUPLICATE_RESOURCE',
        message: `A record with this field already exists: ${err.meta?.target || 'unique field'}`,
      },
      409
    );
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || 'An unexpected internal error occurred.';

  return sendError(
    res,
    {
      code: err.code || 'INTERNAL_SERVER_ERROR',
      message,
    },
    statusCode
  );
}
