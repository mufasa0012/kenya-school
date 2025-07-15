import express from 'express';
import { getAttendance, addAttendance } from '../controllers/attendanceController.js';

const router = express.Router();

router.route('/attendance')
  .get(getAttendance)
  .post(addAttendance);

export default router;