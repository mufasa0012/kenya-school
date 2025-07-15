import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css';

const DashboardPage = () => {
  // Mock data for KPIs
  const kpis = [
    {
      title: 'Total Students',
      value: '1,247',
      subtitle: '+12% from last term',
      color: '#2196f3', // Blue
    },
    {
      title: 'Active Teachers',
      value: '86',
      subtitle: '98% attendance rate',
      color: '#4caf50', // Green
    },
    {
      title: 'Fee Collection',
      value: 'KSh 2.4M',
      subtitle: '$ 85% collected',
      color: '#ffffff', // White
    },
    {
      title: 'CBC Compliance',
      value: '94%',
      subtitle: 'Assessment complete',
      color: '#ffeb3b', // Yellow
    },
  ];

  // Mock data for recent activities
  const recentActivities = [
    {
      icon: '🔵',
      title: 'New student enrollment - Grade 4',
      timestamp: '2 hours ago',
    },
    {
      icon: '🟢',
      title: 'CBC Assessment submitted - Grade 6',
      timestamp: '4 hours ago',
    },
    {
      icon: '🟡',
      title: 'Fee payment reminder sent',
      timestamp: '1 day ago',
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Kenya School Management System</h1>
        <p>Your all-in-one solution for managing students, teachers, classes, and academic performance.</p>
        <p>Use the navigation above or the quick links below to begin.</p>
      </section>

      {/* Metrics Cards */}
      <section className="kpis-section">
        <h2>Key Performance Indicators</h2>
        <div className="kpi-cards">
          {kpis.map((kpi, index) => (
            <div key={index} className="kpi-card" style={{ backgroundColor: kpi.color }}>
              <h3>{kpi.title}</h3>
              <p className="kpi-value">{kpi.value}</p>
              <small>{kpi.subtitle}</small>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>What You Can Do</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Students</h3>
            <p>Add, view, and manage student records easily.</p>
            <Link to="/students"><button>Go to Students</button></Link>
          </div>

          <div className="feature-card">
            <h3>Teachers</h3>
            <p>Register teachers and assign subjects.</p>
            <Link to="/teachers"><button>Go to Teachers</button></Link>
          </div>

          <div className="feature-card">
            <h3>Classes</h3>
            <p>Create and manage forms and streams.</p>
            <Link to="/classes"><button>Go to Classes</button></Link>
          </div>

          <div className="feature-card">
            <h3>Results</h3>
            <p>Enter and view exam marks and reports.</p>
            <Link to="/results"><button>Go to Results</button></Link>
          </div>

          <div className="feature-card">
            <h3>Timetable</h3>
            <p>Set weekly class schedules per stream.</p>
            <Link to="/timetables"><button>Go to Timetable</button></Link>
          </div>

          <div className="feature-card">
            <h3>Attendance</h3>
            <p>Track daily attendance of students.</p>
            <Link to="/attendance"><button>Go to Attendance</button></Link>
          </div>

          <div className="feature-card">
            <h3>Analytics</h3>
            <p>Get insights into school-wide performance trends.</p>
            <Link to="/analytics"><button>Go to Analytics</button></Link>
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="recent-activities">
        <h2>Recent Activities</h2>
        <p>Latest updates across the school</p>
        <ul>
          {recentActivities.map((activity, index) => (
            <li key={index}>
              <span>{activity.icon}</span>
              <strong>{activity.title}</strong>
              <small>{activity.timestamp}</small>
            </li>
          ))}
        </ul>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <p>Frequently used functions</p>
        <div className="action-buttons">
          <button>Add Student</button>
          <button>Create Timetable</button>
          <button>Submit Assessment</button>
          <button>View Reports</button>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;