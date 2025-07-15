import React, { useEffect, useState } from 'react';
import apiClient from '../services/apiClient';
import ClassForm from '../components/ClassForm';
import ClassList from '../components/ClassList';

const ClassesPage = () => {
  const [classes, setClasses] = useState([]);

  const fetchClasses = async () => {
    try {
      const res = await apiClient.get('/classes');
      setClasses(res.data);
    } catch (err) {
      alert('Failed to load classes');
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const handleAddClass = async (newClass) => {
    try {
      await apiClient.post('/classes', newClass);
      fetchClasses();
    } catch (err) {
      alert(err.response?.data?.error || 'Error adding class');
    }
  };

  return (
    <div>
      <h2>Classes</h2>
      <ClassForm onAdd={handleAddClass} />
      <ClassList classes={classes} />
    </div>
  );
};

export default ClassesPage;