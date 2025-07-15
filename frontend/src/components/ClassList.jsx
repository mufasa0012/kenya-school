import React from 'react';

const ClassList = ({ classes }) => {
  return (
    <ul>
      {classes.map(cls => (
        <li key={cls.id}>
          <strong>{cls.form} {cls.stream}</strong><br />
          <small>Subjects: {cls.subjects.join(', ')}</small>
        </li>
      ))}
    </ul>
  );
};

export default ClassList;