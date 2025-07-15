import express from 'express';
import { db } from '../config/firebase.js';
import { collection, addDoc } from 'firebase/firestore';

const router = express.Router();

router.post('/students', async (req, res) => {
  try {
    const studentData = req.body;
    const docRef = await addDoc(collection(db, 'students'), studentData);
    res.status(201).json({ id: docRef.id, ...studentData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;