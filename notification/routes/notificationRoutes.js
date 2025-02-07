import express from 'express'
import { getNotifications, updateNotification } from '../controllers/notificationController.js';

const router = express.Router();

router.get('/all', getNotifications);
router.put('/', updateNotification);

export default router;