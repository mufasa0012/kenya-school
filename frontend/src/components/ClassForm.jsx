import React, { useState } from 'react';

const ClassForm = ({ onAdd }) => {
  const [form, setForm] = useState('');
  const [stream, setStream] = useState('');
  const [subjects, setSubjects] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClass = {
      form,
      stream,
      subjects: subjects.split(',').map(s => s.trim()),
      createdAt: new Date().toISOString()
    };
    onAdd(newClass);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={form} onChange={(e) => setForm(e.target.value)} required>
        <option value="">Select Form</option>
        <option value="Form 1">Form 1</option>
        <option value="Form 2">Form 2</option>
        <option value="Form 3">Form 3</option>
        <option value="Form 4">Form 4</option>
      </select>

      <input value={stream} onChange={(e) => setStream(e.target.value)} placeholder="Stream (e.g. East)" required />

      <input
        value={subjects}
        onChange={(e) => setSubjects(e.target.value)}
        placeholder="Subjects (comma-separated)"
      />

      <button type="submit">Add Class</button>
    </form>
  );
};

export default ClassForm;