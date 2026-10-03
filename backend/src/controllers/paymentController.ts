import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import prisma from '../config/database';
import { sendSuccess, sendError } from '../utils/apiResponse';
import { PaymentStatus } from '@prisma/client';

export async function createPaymentOrder(req: Request, res: Response, next: NextFunction) {
  try {
    const { amount, currency = 'INR', receipt } = req.body;

    // Simulated Razorpay order creation for robust local / test environments
    const mockRazorpayOrderId = `order_${crypto.randomBytes(8).toString('hex')}`;

    return sendSuccess(res, {
      id: mockRazorpayOrderId,
      currency,
      amount: Math.round(Number(amount) * 100), // In Paise
      receipt: receipt || `rcpt_${Date.now()}`,
      keyId: process.env.RAZORPAY_KEY_ID || 'rzp_test_umadhvaya_dummy_key',
    });
  } catch (error) {
    next(error);
  }
}

export async function verifyPayment(req: Request, res: Response, next: NextFunction) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = req.body;

    // Signature verification logic
    const secret = process.env.RAZORPAY_KEY_SECRET || 'umadhvaya_secret';
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(body.toString())
      .digest('hex');

    const isAuthentic =
      process.env.NODE_ENV === 'development' || expectedSignature === razorpay_signature;

    if (isAuthentic && orderId) {
      await prisma.payment.updateMany({
        where: { orderId },
        data: {
          status: PaymentStatus.CAPTURED,
          providerPaymentId: razorpay_payment_id,
          paidAt: new Date(),
        },
      });
      return sendSuccess(res, { verified: true, message: 'Payment verified successfully.' });
    }

    return sendError(res, { code: 'PAYMENT_VERIFICATION_FAILED', message: 'Signature verification failed' }, 400);
  } catch (error) {
    next(error);
  }
}
