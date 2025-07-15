import React, { useEffect, useState } from 'react';
import apiClient from '../services/apiClient';
import TeacherForm from '../components/TeacherForm';
import TeacherList from '../components/TeacherList';

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);

  const fetchTeachers = async () => {
    try {
      const res = await apiClient.get('/teachers');
      setTeachers(res.data);
    } catch (err) {
      alert('Failed to load teachers');
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleAddTeacher = async (newTeacher) => {
    try {
      await apiClient.post('/teachers', newTeacher);
      fetchTeachers();
    } catch (err) {
      alert(err.response?.data?.error || 'Error adding teacher');
    }
  };

  return (
    <div>
      <h2>Teachers</h2>
      <TeacherForm onAdd={handleAddTeacher} />
      <TeacherList teachers={teachers} />
    </div>
  );
};

export default TeachersPage;