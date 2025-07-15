import React, { useEffect, useState } from 'react';
import apiClient from '../services/apiClient';
import AttendanceForm from '../components/AttendanceForm';
import AttendanceList from '../components/AttendanceList';

const AttendancePage = () => {
  const [attendance, setAttendance] = useState([]);

  const fetchAttendance = async () => {
    try {
      const res = await apiClient.get('/attendance');
      setAttendance(res.data);
    } catch (err) {
      alert('Failed to load attendance records');
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  const handleAddAttendance = async (newRecord) => {
    try {
      await apiClient.post('/attendance', newRecord);
      fetchAttendance();
    } catch (err) {
      alert(err.response?.data?.error || 'Error recording attendance');
    }
  };

  return (
    <div>
      <h2>Daily Attendance</h2>
      <AttendanceForm onAdd={handleAddAttendance} />
      <AttendanceList attendance={attendance} />
    </div>
  );
};

export default AttendancePage;