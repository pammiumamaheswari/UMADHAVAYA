import { Router } from 'express';
import { getCategories, getCollections } from '../controllers/categoryController';

const router = Router();

router.get('/categories', getCategories);
router.get('/collections', getCollections);

export default router;
