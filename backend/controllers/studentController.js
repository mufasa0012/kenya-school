import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase.js';

export const addStudent = async (req, res) => {
  try {
    const studentData = req.body;
    await addDoc(collection(db, 'students'), studentData);
    res.status(201).json({ message: 'Student added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getStudents = async (req, res) => {
  try {
    const snapshot = await getDocs(collection(db, 'students'));
    const students = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};