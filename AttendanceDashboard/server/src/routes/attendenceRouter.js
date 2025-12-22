import express from 'express';
import { MarkAttendence, ViewAttendence } from '../controllers/attendenceController.js';

const router = express.Router();

router.post('/mark', MarkAttendence);
router.get('/view/:teacherId', ViewAttendence);


export default router;
