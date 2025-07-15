import React from 'react';

const TeacherList = ({ teachers }) => {
  return (
    <ul>
      {teachers.map(teacher => (
        <li key={teacher.id}>
          <strong>{teacher.name}</strong> - {teacher.email} <br />
          <small>Subjects: {teacher.subjects.join(', ')}</small><br />
          {teacher.formTeacherOf && <small>Form Teacher of: {teacher.formTeacherOf}</small>}
        </li>
      ))}
    </ul>
  );
};

export default TeacherList;