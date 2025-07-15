import express from 'express';
import { getResults, addResult } from '../controllers/resultController.js';

const router = express.Router();

router.route('/results')
  .get(getResults)
  .post(addResult);

export default router;