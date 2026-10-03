import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from './auth';
import { sendError } from '../utils/apiResponse';

export function authorizeRoles(...allowedRoles: string[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return sendError(
        res,
        {
          code: 'UNAUTHORIZED',
          message: 'Authentication required for this resource.',
        },
        401
      );
    }

    if (!allowedRoles.includes(req.user.role)) {
      return sendError(
        res,
        {
          code: 'FORBIDDEN',
          message: `Access denied. Requires one of roles: ${allowedRoles.join(', ')}`,
        },
        403
      );
    }

    next();
  };
}
