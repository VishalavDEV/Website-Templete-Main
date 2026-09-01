import express from 'express';
import adminController from '../controllers/admin.controller.js';
import verifyToken, { authorize } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Apply JWT verification
router.use(verifyToken);

// Support Ticket endpoints for general users
router.post('/support/tickets', adminController.createSupportTicket);
router.get('/support/tickets/my', adminController.getUserTickets);

// --- ADMIN ONLY OPERATIONS ---
const adminAuth = authorize(['ROLE_ADMIN']);

// Dashboard metrics & Analytics reports
router.get('/dashboard', adminAuth, adminController.getDashboardMetrics);
router.get('/audit/logs', adminAuth, adminController.getAuditLogs);

// Admin support ticket management
router.get('/support/tickets', adminAuth, adminController.getAllSupportTickets);
router.put('/support/tickets/:id', adminAuth, adminController.updateTicketStatus);

// Analytics & Reports
router.post('/reports', adminAuth, adminController.generateAnalyticsReport);
router.get('/reports', adminAuth, adminController.getReportsList);

// Catalog / Inventory adjustments
router.post('/products', adminAuth, adminController.createProduct);
router.put('/products/:id', adminAuth, adminController.updateProduct);
router.put('/inventory', adminAuth, adminController.updateInventory);

// Live database mappings for React admin portal
router.get('/orders', adminAuth, adminController.getAllOrders);
router.put('/orders/:id', adminAuth, adminController.updateOrderStatus);
router.get('/users', adminAuth, adminController.getAllUsers);
router.get('/reviews', adminAuth, adminController.getAllReviews);
router.delete('/reviews/:id', adminAuth, adminController.deleteReview);
router.get('/payments', adminAuth, adminController.getAllPayments);
router.get('/shipments', adminAuth, adminController.getAllShipments);
router.put('/shipments/:orderId', adminAuth, adminController.updateShipmentStatus);

export default router;
