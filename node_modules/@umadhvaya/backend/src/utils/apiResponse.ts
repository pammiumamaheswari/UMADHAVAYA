import { Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

export interface ApiResponseOptions {
  requestId?: string;
  statusCode?: number;
}

export function sendSuccess<T>(
  res: Response,
  data: T,
  options?: ApiResponseOptions
): Response {
  const requestId = options?.requestId || (res.locals.requestId as string) || uuidv4();
  const statusCode = options?.statusCode || 200;

  return res.status(statusCode).json({
    data,
    meta: {
      requestId,
      timestamp: new Date().toISOString(),
    },
  });
}

export function sendPaginated<T>(
  res: Response,
  data: T[],
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  },
  options?: ApiResponseOptions
): Response {
  const requestId = options?.requestId || (res.locals.requestId as string) || uuidv4();
  const statusCode = options?.statusCode || 200;

  return res.status(statusCode).json({
    data,
    pagination,
    meta: {
      requestId,
      timestamp: new Date().toISOString(),
    },
  });
}

export function sendError(
  res: Response,
  error: {
    code: string;
    message: string;
    fields?: Record<string, string>;
  },
  statusCode: number = 400,
  options?: ApiResponseOptions
): Response {
  const requestId = options?.requestId || (res.locals.requestId as string) || uuidv4();

  return res.status(statusCode).json({
    error,
    meta: {
      requestId,
      timestamp: new Date().toISOString(),
    },
  });
}
