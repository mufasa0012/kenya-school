import express from 'express';
import { getTeachers, addTeacher } from '../controllers/teacherController.js';

const router = express.Router();

router.route('/teachers')
  .get(getTeachers)
  .post(addTeacher);

export default router;