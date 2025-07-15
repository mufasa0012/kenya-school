import React, { useState } from 'react';

const TeacherForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subjects, setSubjects] = useState('');
  const [formClass, setFormClass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const teacher = {
      name,
      email,
      subjects: subjects.split(',').map(s => s.trim()),
      formTeacherOf: formClass,
      createdAt: new Date().toISOString()
    };
    onAdd(teacher);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input value={subjects} onChange={(e) => setSubjects(e.target.value)} placeholder="Subjects (comma-separated)" />
      <input value={formClass} onChange={(e) => setFormClass(e.target.value)} placeholder="Form Class (optional)" />
      <button type="submit">Add Teacher</button>
    </form>
  );
};

export default TeacherForm;