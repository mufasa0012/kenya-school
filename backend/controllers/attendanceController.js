import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase.js';

// Get all attendance records
export const getAttendance = async (req, res) => {
  try {
    const snapshot = await getDocs(collection(db, 'attendance'));
    const attendance = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add new attendance record
export const addAttendance = async (req, res) => {
  try {
    const attendanceData = req.body;
    await addDoc(collection(db, 'attendance'), attendanceData);
    res.status(201).json({ message: 'Attendance recorded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};