import { Router } from 'express';
import { getBanners, getBlogPosts } from '../controllers/cmsController';

const router = Router();

router.get('/banners', getBanners);
router.get('/blog', getBlogPosts);

export default router;
