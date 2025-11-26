import React from 'react';
import './Pages.css';
import LocationSearch from '../components/LocationSearch';

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-overlay">
          <h1 className="hero-title">WIN AT MOVING</h1>
          <p className="hero-sub">Find homes to buy or rent and check house prices</p>
          {/* Search overlay */}
          <div className="hero-search">
            <LocationSearch placeholder="Search for postcode" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
