import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">KENYA SCHOOL</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="desktop-menu">
          {isAuthenticated && (
            <>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/students">Students</Link></li>
              <li><Link to="/teachers">Teachers</Link></li>
              <li><Link to="/classes">Classes</Link></li>
              <li><Link to="/results">Results</Link></li>
              <li><Link to="/timetables">Timetable</Link></li>
              <li><Link to="/attendance">Attendance</Link></li>
              <li><Link to="/analytics">Analytics</Link></li>
              <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button className="hamburger" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="mobile-menu">
          {isAuthenticated && (
            <>
              <li><Link to="/dashboard" onClick={toggleMobileMenu}>Dashboard</Link></li>
              <li><Link to="/students" onClick={toggleMobileMenu}>Students</Link></li>
              <li><Link to="/teachers" onClick={toggleMobileMenu}>Teachers</Link></li>
              <li><Link to="/classes" onClick={toggleMobileMenu}>Classes</Link></li>
              <li><Link to="/results" onClick={toggleMobileMenu}>Results</Link></li>
              <li><Link to="/timetables" onClick={toggleMobileMenu}>Timetable</Link></li>
              <li><Link to="/attendance" onClick={toggleMobileMenu}>Attendance</Link></li>
              <li><Link to="/analytics" onClick={toggleMobileMenu}>Analytics</Link></li>
              <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;