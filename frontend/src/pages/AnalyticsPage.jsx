import React, { useEffect, useState } from 'react';
import apiClient from '../services/apiClient';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const AnalyticsPage = () => {
  const [results, setResults] = useState([]);
  const [attendance, setAttendance] = useState([]);

  const fetchResults = async () => {
    try {
      const res = await apiClient.get('/results');
      setResults(res.data);
    } catch (err) {
      alert('Failed to load results');
    }
  };

  const fetchAttendance = async () => {
    try {
      const res = await apiClient.get('/attendance');
      setAttendance(res.data);
    } catch (err) {
      alert('Failed to load attendance');
    }
  };

  useEffect(() => {
    fetchResults();
    fetchAttendance();
  }, []);

  // Process data for charts
  const getSubjectAverages = () => {
    const subjectTotals = {};
    const subjectCounts = {};

    results.forEach(result => {
      const marks = result.marks || {};
      Object.entries(marks).forEach(([subject, mark]) => {
        if (!subjectTotals[subject]) {
          subjectTotals[subject] = 0;
          subjectCounts[subject] = 0;
        }
        subjectTotals[subject] += Number(mark);
        subjectCounts[subject]++;
      });
    });

    return Object.keys(subjectTotals).map(subject => ({
      subject,
      average: (subjectTotals[subject] / subjectCounts[subject]).toFixed(1)
    }));
  };

  const getAttendanceSummary = () => {
    const summary = {
      Present: 0,
      Absent: 0,
      Late: 0
    };

    attendance.forEach(record => {
      const status = record.status;
      if (summary[status] !== undefined) {
        summary[status]++;
      }
    });

    return [
      { name: 'Present', value: summary.Present },
      { name: 'Absent', value: summary.Absent },
      { name: 'Late', value: summary.Late }
    ];
  };

  return (
    <div>
      <h2>📊 School Analytics Dashboard</h2>

      <h3>📚 Subject Performance (Average Marks)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={getSubjectAverages()}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="subject" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="average" fill="#4caf50" name="Avg Marks" />
        </BarChart>
      </ResponsiveContainer>

      <h3>📅 Attendance Summary</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={getAttendanceSummary()}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#2196f3" name="Count" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsPage;