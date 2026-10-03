import jwt, { SignOptions, Secret } from 'jsonwebtoken';

const ACCESS_SECRET: Secret = process.env.JWT_ACCESS_SECRET || 'umadhvaya_jwt_access_secret_super_secure_key_2026_heritage';
const REFRESH_SECRET: Secret = process.env.JWT_REFRESH_SECRET || 'umadhvaya_jwt_refresh_secret_super_secure_key_2026_refresh';

export interface TokenPayload {
  userId: string;
  email: string;
  role: string;
}

export function generateAccessToken(payload: TokenPayload): string {
  const options: SignOptions = {
    expiresIn: (process.env.JWT_ACCESS_EXPIRES_IN || '15m') as any,
  };
  return jwt.sign(payload, ACCESS_SECRET, options);
}

export function generateRefreshToken(payload: TokenPayload): string {
  const options: SignOptions = {
    expiresIn: (process.env.JWT_REFRESH_EXPIRES_IN || '7d') as any,
  };
  return jwt.sign(payload, REFRESH_SECRET, options);
}

export function verifyAccessToken(token: string): TokenPayload {
  return jwt.verify(token, ACCESS_SECRET) as TokenPayload;
}

export function verifyRefreshToken(token: string): TokenPayload {
  return jwt.verify(token, REFRESH_SECRET) as TokenPayload;
}
