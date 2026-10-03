import { Router } from 'express';
import { getCart, addToCart, updateCartItem, removeCartItem } from '../controllers/cartController';
import { optionalAuthenticate } from '../middleware/auth';

const router = Router();

router.use(optionalAuthenticate);

router.get('/', getCart);
router.post('/items', addToCart);
router.patch('/items/:id', updateCartItem);
router.delete('/items/:id', removeCartItem);

export default router;
