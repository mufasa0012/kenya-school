import React, { useState } from 'react';

const AttendanceForm = ({ onAdd }) => {
  const [studentName, setStudentName] = useState('');
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [form, setForm] = useState('');
  const [stream, setStream] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [status, setStatus] = useState('Present');
  const [remarks, setRemarks] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const attendance = {
      studentName,
      admissionNumber,
      form,
      stream,
      date,
      status,
      remarks,
      timestamp: new Date().toISOString()
    };

    onAdd(attendance);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={studentName} onChange={(e) => setStudentName(e.target.value)} placeholder="Student Name" required />
      <input value={admissionNumber} onChange={(e) => setAdmissionNumber(e.target.value)} placeholder="Admission Number" required />

      <select value={form} onChange={(e) => setForm(e.target.value)} required>
        <option value="">Select Form</option>
        <option value="Form 1">Form 1</option>
        <option value="Form 2">Form 2</option>
        <option value="Form 3">Form 3</option>
        <option value="Form 4">Form 4</option>
      </select>

      <input value={stream} onChange={(e) => setStream(e.target.value)} placeholder="Stream" required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
        <option value="Late">Late</option>
      </select>

      <input value={remarks} onChange={(e) => setRemarks(e.target.value)} placeholder="Remarks (optional)" />

      <button type="submit">Record Attendance</button>
    </form>
  );
};

export default AttendanceForm;