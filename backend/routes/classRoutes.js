import express from 'express';
import { getClasses, addClass } from '../controllers/classController.js';

const router = express.Router();

router.route('/classes')
  .get(getClasses)
  .post(addClass);

export default router;