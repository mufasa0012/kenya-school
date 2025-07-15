import express from 'express';
import { getTimetables, addTimetable } from '../controllers/timetableController.js';

const router = express.Router();

router.route('/timetables')
  .get(getTimetables)
  .post(addTimetable);

export default router;