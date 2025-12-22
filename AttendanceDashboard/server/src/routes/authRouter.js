import express from 'express';
import {Protect} from '../middleware/authMiddleware.js';
import {
  userLogin,
  userLogout
} from '../controllers/authController.js';

const router = express.Router();
router.post('/login', userLogin);
router.post('/logout', Protect, userLogout);
export default router;