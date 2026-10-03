import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken, TokenPayload } from '../utils/jwt';
import { sendError } from '../utils/apiResponse';

export interface AuthenticatedRequest extends Request {
  user?: TokenPayload;
}

export function authenticate(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return sendError(
      res,
      {
        code: 'UNAUTHORIZED',
        message: 'Authentication token is missing or invalid',
      },
      401
    );
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = verifyAccessToken(token);
    req.user = decoded;
    next();
  } catch (err: any) {
    if (err.name === 'TokenExpiredError') {
      return sendError(
        res,
        {
          code: 'TOKEN_EXPIRED',
          message: 'Authentication token has expired. Please refresh your session.',
        },
        401
      );
    }
    return sendError(
      res,
      {
        code: 'INVALID_TOKEN',
        message: 'Invalid authentication token.',
      },
      401
    );
  }
}

export function optionalAuthenticate(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    try {
      const decoded = verifyAccessToken(token);
      req.user = decoded;
    } catch {
      // Ignore invalid token for optional auth
    }
  }
  next();
}
