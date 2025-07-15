import React from 'react';

const ResultList = ({ results, onGenerateReport }) => {
  return (
    <ul>
      {results.map(res => (
        <li key={res.id}>
          <strong>{res.classForm} {res.stream}</strong> - {res.examType}, {res.year}<br />
          <small>Marks: {Object.entries(res.marks).map(([k, v]) => `${k}: ${v}`).join(', ')}</small><br />
          <b>Total:</b> {res.totalMarks} | <b>Average:</b> {res.average}% | <b>Grade:</b> {res.grade}
          <br />
          <button onClick={() => onGenerateReport(res)}>📄 Download Report</button>
        </li>
      ))}
    </ul>
  );
};

export default ResultList;