import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Pages.css';
import AppartmentCard from '../components/AppartmentCard/AppartmentCard';

function SearchResults() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const tab = params.get('tab');
  const q = params.get('q');

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const res = await fetch('/api/data');
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        setItems(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch');
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div className="page">
      <h1>Search Results</h1>
      <p>Tab: {tab}</p>
      <p>Query: {q}</p>
      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && items.length === 0 && <p>No results</p>}
      {!loading && !error && items.length > 0 && (
        <AppartmentCard dataList={items} />
      )}
    </div>
  );
}

export default SearchResults;
