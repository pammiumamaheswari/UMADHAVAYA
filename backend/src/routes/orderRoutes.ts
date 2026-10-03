import { Router } from 'express';
import { createOrder, getUserOrders, getOrderById } from '../controllers/orderController';
import { optionalAuthenticate, authenticate } from '../middleware/auth';

const router = Router();

router.post('/', optionalAuthenticate, createOrder);
router.get('/', authenticate, getUserOrders);
router.get('/:id', optionalAuthenticate, getOrderById);

export default router;
