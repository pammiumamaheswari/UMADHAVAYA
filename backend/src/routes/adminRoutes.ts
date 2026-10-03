import { Router } from 'express';
import {
  getDashboardStats,
  getAdminOrders,
  updateOrderStatus,
  getAdminInventory,
  adjustInventory,
} from '../controllers/adminController';
import { authenticate } from '../middleware/auth';
import { authorizeRoles } from '../middleware/rbac';

const router = Router();

router.use(authenticate);
router.use(authorizeRoles('ADMIN', 'OWNER', 'MANAGER', 'INVENTORY_MANAGER', 'ORDER_MANAGER'));

router.get('/dashboard/stats', getDashboardStats);
router.get('/orders', getAdminOrders);
router.patch('/orders/:id/status', updateOrderStatus);
router.get('/inventory', getAdminInventory);
router.post('/inventory/adjust', adjustInventory);

export default router;
