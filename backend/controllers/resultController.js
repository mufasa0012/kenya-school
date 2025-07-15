import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase.js';

// Get all results
export const getResults = async (req, res) => {
  try {
    const snapshot = await getDocs(collection(db, 'results'));
    const results = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add new result
export const addResult = async (req, res) => {
  try {
    const resultData = req.body;

    // Calculate total and average
    const marks = resultData.marks || {};
    const totalMarks = Object.values(marks).reduce((sum, mark) => sum + Number(mark), 0);
    const average = parseFloat((totalMarks / Object.keys(marks).length).toFixed(2));
    const grade = calculateGrade(average);

    const finalResult = {
      ...resultData,
      totalMarks,
      average,
      grade
    };

    await addDoc(collection(db, 'results'), finalResult);
    res.status(201).json({ message: 'Result added successfully', result: finalResult });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Simple grading logic
const calculateGrade = (average) => {
  if (average >= 80) return 'A';
  if (average >= 70) return 'B';
  if (average >= 60) return 'C';
  if (average >= 50) return 'D';
  return 'E';
};
