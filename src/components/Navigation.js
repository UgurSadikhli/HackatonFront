import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">✨</span>
          NextGen
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/property" className="nav-link filter-btn">
              <span className="filter-icon">⚙️</span>
              <span className="filter-text">Filter</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
