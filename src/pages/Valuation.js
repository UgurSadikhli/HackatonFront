import React from 'react';
import { useLocation } from 'react-router-dom';
import './Pages.css';

function Valuation() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const postcode = params.get('postcode');

  return (
    <div className="page">
      <h1>Instant Valuation</h1>
      <p>Postcode: {postcode}</p>
      <p>This page would show an instant valuation for the postcode.</p>
    </div>
  );
}

export default Valuation;
