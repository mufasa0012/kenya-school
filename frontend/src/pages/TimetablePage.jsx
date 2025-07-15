import React, { useEffect, useState } from 'react';
import apiClient from '../services/apiClient';
import TimetableForm from '../components/TimetableForm';
import TimetableList from '../components/TimetableList';

const TimetablePage = () => {
  const [timetables, setTimetables] = useState([]);

  const fetchTimetables = async () => {
    try {
      const res = await apiClient.get('/timetables');
      setTimetables(res.data);
    } catch (err) {
      alert('Failed to load timetables');
    }
  };

  useEffect(() => {
    fetchTimetables();
  }, []);

  const handleAddTimetable = async (newTimetable) => {
    try {
      await apiClient.post('/timetables', newTimetable);
      fetchTimetables();
    } catch (err) {
      alert(err.response?.data?.error || 'Error adding timetable');
    }
  };

  return (
    <div>
      <h2>Weekly Timetable</h2>
      <TimetableForm onAdd={handleAddTimetable} />
      <TimetableList timetables={timetables} />
    </div>
  );
};

export default TimetablePage;