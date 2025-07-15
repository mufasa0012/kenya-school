import React, { useEffect, useState } from 'react';
import apiClient from '../services/apiClient';
import ResultForm from '../components/ResultForm';
import ResultList from '../components/ResultList';
import { generateStudentReport } from '../services/pdfService';

const ResultsPage = () => {
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    try {
      const res = await apiClient.get('/results');
      setResults(res.data);
    } catch (err) {
      alert('Failed to load results');
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleAddResult = async (newResult) => {
    try {
      await apiClient.post('/results', newResult);
      fetchResults();
    } catch (err) {
      alert(err.response?.data?.error || 'Error adding result');
    }
  };

  const handleGenerateReport = (result) => {
    generateStudentReport(result);
  };

  return (
    <div>
      <h2>Exam Results</h2>
      <ResultForm onAdd={handleAddResult} />

      <h3>Results List</h3>
      <ResultList results={results} onGenerateReport={handleGenerateReport} />
    </div>
  );
};

export default ResultsPage;