import React, { useState } from 'react';
import apiClient from '../services/apiClient';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [form, setForm] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiClient.post('/students', { name, form });
      alert('Student added!');
    } catch (err) {
      alert(err.response?.data?.error || 'Error adding student');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <select value={form} onChange={(e) => setForm(e.target.value)}>
        <option value="">Select Form</option>
        <option value="Form 1">Form 1</option>
        <option value="Form 2">Form 2</option>
        <option value="Form 3">Form 3</option>
        <option value="Form 4">Form 4</option>
      </select>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;