import React from 'react';
import './Pages.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>Learn more about NextGen and our mission.</p>
      <div style={{ marginTop: 24 }}>
        <p>Quick links to the search form with different tabs:</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/?tab=buy">Open Home &amp; Show Buy</Link></li>
          <li><Link to="/?tab=rent">Open Home &amp; Show Rent</Link></li>
          <li><Link to="/?tab=house-prices">Open Home &amp; Show House prices</Link></li>
          <li><Link to="/?tab=instant-valuation">Open Home &amp; Show Instant valuation</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default About;
