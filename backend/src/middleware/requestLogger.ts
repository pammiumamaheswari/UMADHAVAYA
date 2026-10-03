import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const requestId = (req.headers['x-request-id'] as string) || uuidv4();
  res.locals.requestId = requestId;
  res.setHeader('x-request-id', requestId);

  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms (ReqID: ${requestId})`
    );
  });

  next();
}
