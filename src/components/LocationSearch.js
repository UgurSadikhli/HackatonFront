import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './LocationSearch.css';

const TAB_KEYS = [' '];

function LocationSearch({ placeholder = 'Search for tube stations, postcodes or neighborhoods' }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('buy');
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabFromQuery = params.get('tab');
    if (tabFromQuery && TAB_KEYS.includes(tabFromQuery)) {
      setActiveTab(tabFromQuery);
    }
  }, [location.search]);

  function switchTab(tabKey) {
    setActiveTab(tabKey);
    setQuery('');
    setError('');
    const params = new URLSearchParams(location.search);
    params.set('tab', tabKey);
    navigate(`${location.pathname}?${params.toString()}`);
  }

  function isValidUKPostcode(val) {
    // Simple but permissive postcode check
    const clean = (val || '').trim();
    const regex = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s*\d[A-Z]{2}$/i;
    return regex.test(clean);
  }

  function onSearch() {
    setError('');
    const trimmed = query.trim();
    if (activeTab === 'instant-valuation') {
      if (!isValidUKPostcode(trimmed)) {
        setError('Please enter a valid UK postcode');
        return;
      }
      // Navigate to valuation page
      navigate(`/Property?postcode=${encodeURIComponent(trimmed)}`);
    } else {
      // Navigate to search page
      navigate(`/Property?postcode=${encodeURIComponent(trimmed)}`);
    }
  }

  return (
    <div className="location-search">
      <div className="search-card">
        <ul className="tabs">
            {TAB_KEYS.map((key) => (
            <li
              key={key}
              role="button"
              className={`tab ${activeTab === key ? 'active' : ''}`}
                aria-current={activeTab === key}
              onClick={() => switchTab(key)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') switchTab(key);
              }}
              tabIndex={0}
            >
              {key === 'buy' ? 'Buy' : key === 'rent' ? 'Rent' : key === 'house-prices' ? 'House prices' : 'Instant valuation'}
            </li>
          ))}
        </ul>

        <div className="search-body">
          <label className="search-label">
            {activeTab === 'instant-valuation' ? 'Enter a full UK postcode' : 'Enter a location'}
          </label>
          <div className="search-field">
            <input
              className={`location-input ${error ? 'invalid' : ''}`}
              type="text"
              placeholder={
                activeTab === 'instant-valuation'
                  ? 'e.g. SW1 0RG'
                  : activeTab === 'house-prices'
                  ? 'Search for postcode'
                  : activeTab === 'buy'
                  ? 'Search for tube stations, postcodes or neighborhoods'
                  : 'Search for a location'
              }
              aria-label="location"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') onSearch(); }}
            />
            <button type="button" className="search-btn" aria-label="Search" onClick={onSearch}>
              🔍 {activeTab === 'instant-valuation' ? 'Look up postcode' : 'Search'}
            </button>
          </div>
          {error && <div className="error-msg">{error}</div>}
        </div>
      </div>
    </div>
  );
}

export default LocationSearch;
