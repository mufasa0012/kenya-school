import React, { useState } from 'react';

const TimetableForm = ({ onAdd }) => {
  const [form, setForm] = useState('');
  const [stream, setStream] = useState('');
  const [weekDay, setWeekDay] = useState('Monday');
  const [lessons, setLessons] = useState([{ period: '', subject: '', teacher: '', startTime: '', endTime: '' }]);

  const handleChange = (index, e) => {
    const updatedLessons = [...lessons];
    updatedLessons[index][e.target.name] = e.target.value;
    setLessons(updatedLessons);
  };

  const handleAddLesson = () => {
    setLessons([...lessons, { period: '', subject: '', teacher: '', startTime: '', endTime: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const timetable = {
      form,
      stream,
      weekDay,
      lessons,
      createdAt: new Date().toISOString()
    };
    onAdd(timetable);
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

      <select value={weekDay} onChange={(e) => setWeekDay(e.target.value)}>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
      </select>

      <h4>Lessons</h4>
      {lessons.map((lesson, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <input name="period" value={lesson.period} onChange={(e) => handleChange(index, e)} placeholder="Period" />
          <input name="subject" value={lesson.subject} onChange={(e) => handleChange(index, e)} placeholder="Subject" />
          <input name="teacher" value={lesson.teacher} onChange={(e) => handleChange(index, e)} placeholder="Teacher" />
          <input name="startTime" value={lesson.startTime} onChange={(e) => handleChange(index, e)} placeholder="Start Time" />
          <input name="endTime" value={lesson.endTime} onChange={(e) => handleChange(index, e)} placeholder="End Time" />
        </div>
      ))}

      <button type="button" onClick={handleAddLesson}>+ Add Lesson</button>
      <button type="submit">Save Timetable</button>
    </form>
  );
};

export default TimetableForm;