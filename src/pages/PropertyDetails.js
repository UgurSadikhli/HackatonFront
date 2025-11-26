import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './Pages.css';

/**
 * PropertyDetails
 *
 * This page fetches property details from the backend using the ID route param.
 * - Set the API base URL with REACT_APP_API_BASE_URL in your environment, e.g. http://localhost:4000
 * - Expected response JSON for GET /properties/:id:
 *   {
 *     id, price, title, address, beds, baths, reception, epc, description, features: [], image
 *   }
 */
function PropertyDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [property, setProperty] = useState(() => {
    const p = location.state && location.state.property;
    return p || null;
  });
  const [loading, setLoading] = useState(!property);
  const [error, setError] = useState(null);

  // Base URL for API - set REACT_APP_API_BASE_URL in environment or default to '/api'
  const API_BASE = process.env.REACT_APP_API_BASE_URL || '/api';

  useEffect(() => {
    if (property) return; // already provided via route state
    if (!id) return;

    setLoading(true);
    setError(null);

    fetch(`${API_BASE}/properties/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setProperty(data);
      })
      .catch((err) => {
        console.error('Error loading property', err);
        setError(err.message || 'Failed to load');
      })
      .finally(() => setLoading(false));
  }, [id, property, API_BASE]);

  if (loading) return (
    <div className="page">
      <h1>Loading property…</h1>
    </div>
  );

  if (error) return (
    <div className="page">
      <h1>Error</h1>
      <p>{error}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );

  if (!property) {
    return (
      <div className="page">
        <h1>Property not found</h1>
        <p>We couldn't find that property. It may have been removed or the ID is invalid.</p>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    );
  }

  return (
    <div className="page property-page">
      <button className="back-btn" onClick={() => navigate(-1)}>&larr; Back to results</button>

      <div className="property-header">
        <img src={property.image} alt={property.title} className="property-image" />
        <div className="property-meta">
          <h1 className="property-price">{property.price}</h1>
          <p className="property-title">{property.title} <span className="property-address">{property.address}</span></p>
          <p className="property-summary">
            {property.beds} beds • {property.baths} bath • {property.reception} reception • EPC: {property.epc}
          </p>
        </div>
      </div>

      <section className="property-about">
        <h2>About this property</h2>
        <div className="features-grid">
          {property.features && Array.isArray(property.features) && property.features.map((f, i) => (
            <div key={i} className="feature-item">
              ✓ {f}
            </div>
          ))}
        </div>

        <p className="property-description">{property.description}</p>
      </section>
    </div>
  );
}

export default PropertyDetails;
