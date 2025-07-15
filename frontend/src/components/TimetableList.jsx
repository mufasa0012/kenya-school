import React from 'react';

const TimetableList = ({ timetables }) => {
  return (
    <ul>
      {timetables.map(table => (
        <li key={table.id}>
          <strong>{table.form} {table.stream}</strong> - {table.weekDay}<br />
          {table.lessons.map((lesson, i) => (
            <div key={i}>
              {lesson.period}: {lesson.subject} by {lesson.teacher} ({lesson.startTime}–{lesson.endTime})
            </div>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default TimetableList;