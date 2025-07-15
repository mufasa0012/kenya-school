import React from 'react';

const AttendanceList = ({ attendance }) => {
  return (
    <ul>
      {attendance.map(record => (
        <li key={record.id}>
          <strong>{record.studentName}</strong> ({record.admissionNumber})<br />
          <small>{record.form} {record.stream} | {record.date} | <b>{record.status}</b></small><br />
          {record.remarks && <small>Remarks: {record.remarks}</small>}
        </li>
      ))}
    </ul>
  );
};

export default AttendanceList;