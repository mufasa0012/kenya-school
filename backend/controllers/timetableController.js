import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase.js';

// Get all timetables
export const getTimetables = async (req, res) => {
  try {
    const snapshot = await getDocs(collection(db, 'timetables'));
    const timetables = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(timetables);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add new timetable
export const addTimetable = async (req, res) => {
  try {
    const timetableData = req.body;
    await addDoc(collection(db, 'timetables'), timetableData);
    res.status(201).json({ message: 'Timetable added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};