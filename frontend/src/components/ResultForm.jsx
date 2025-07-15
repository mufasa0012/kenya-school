import React, { useState } from 'react';

const ResultForm = ({ onAdd }) => {
  const [form, setForm] = useState('');
  const [stream, setStream] = useState('');
  const [examType, setExamType] = useState('Mid Term');
  const [marks, setMarks] = useState({
    Mathematics: '',
    English: '',
    Biology: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMarks(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = {
      studentId: 'temp-student-id',
      classForm: form,
      stream,
      examType,
      year: new Date().getFullYear(),
      marks,
      dateAdded: new Date().toISOString()
    };
    onAdd(result);
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

      <input value={stream} onChange={(e) => setStream(e.target.value)} placeholder="Stream" required />

      <select value={examType} onChange={(e) => setExamType(e.target.value)}>
        <option value="Mid Term">Mid Term</option>
        <option value="End Term">End Term</option>
        <option value="Mock Exam">Mock Exam</option>
      </select>

      <input name="Mathematics" value={marks.Mathematics} onChange={handleChange} placeholder="Mathematics" />
      <input name="English" value={marks.English} onChange={handleChange} placeholder="English" />
      <input name="Biology" value={marks.Biology} onChange={handleChange} placeholder="Biology" />

      <button type="submit">Add Result</button>
    </form>
  );
};

export default ResultForm;