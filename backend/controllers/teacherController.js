import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase.js';

// Get all teachers
export const getTeachers = async (req, res) => {
  try {
    const snapshot = await getDocs(collection(db, 'teachers'));
    const teachers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add new teacher
export const addTeacher = async (req, res) => {
  try {
    const teacherData = req.body;
    await addDoc(collection(db, 'teachers'), teacherData);
    res.status(201).json({ message: 'Teacher added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};