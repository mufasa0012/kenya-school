import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase.js';

// Get all classes
export const getClasses = async (req, res) => {
  try {
    const snapshot = await getDocs(collection(db, 'classes'));
    const classes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add new class
export const addClass = async (req, res) => {
  try {
    const classData = req.body;
    await addDoc(collection(db, 'classes'), classData);
    res.status(201).json({ message: 'Class added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};