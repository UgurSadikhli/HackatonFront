import React from 'react';
import { useLocation } from 'react-router-dom';
import './Pages.css';

function SearchResults() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const tab = params.get('tab');
  const q = params.get('q');

  return (
    <div className="page">
      <h1>Search Results</h1>
      <p>Tab: {tab}</p>
      <p>Query: {q}</p>
    </div>
  );
}

export default SearchResults;
