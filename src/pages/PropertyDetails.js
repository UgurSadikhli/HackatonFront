import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './Pages.css'
import styles from './PropertyDetails.module.css';

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

  // Base URL for API - set REACT_APP_API_BASE_URL in environment or default to http://localhost:5000/api
  const API_BASE = (process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000') + '/api';

  useEffect(() => {
    if (property) return; // already provided via route state
    if (!id) return;

    setLoading(true);
    setError(null);

    fetch(`${API_BASE}/properties/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        // Verify JSON content-type before parsing
        const ct = res.headers.get('content-type') || '';
        if (!ct.toLowerCase().includes('application/json')) {
          // Extract text to help debugging (often returns HTML index page)
          return res.text().then((text) => {
            throw new Error('Expected JSON response from API but received: ' + (text ? text.substring(0, 240) : 'empty response'));
          });
        }
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

  const hasVal = (v) => {
    if (v === null || v === undefined) return false;
    if (typeof v === 'string') return v.trim() !== '';
    if (Array.isArray(v)) return v.length > 0;
    if (typeof v === 'object') return Object.keys(v).length > 0;
    return true;
  };

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
    <div className={`page property-page ${styles.pageRoot}`}>
      <button className="back-btn" onClick={() => navigate(-1)}>&larr; Back to results</button>
      <div className={styles.grid}>
        <div className={styles.mainCol}>
          <div className={styles.gallery}>
            {property.images && Array.isArray(property.images) && property.images.length > 0 ? (
              <div className={styles.galleryGrid}>
                {property.images.map((src, idx) => (
                  <img key={idx} src={src} alt={(property.title || property.name) ? `${property.title || property.name} ${idx + 1}` : `Property image ${idx + 1}`} className={styles.galleryImage} />
                ))}
              </div>
            ) : (
              <img src={property.image || 'https://via.placeholder.com/900x600?text=No+image'} alt={(property.title || property.name) || 'Property image'} className={styles.mainImage} />
            )}
          </div>

          <div className={styles.summaryCard}>
            <div className={styles.metaTop}>
              <div className={styles.titleWrap}>
                <h1 className={styles.title}>{property.title || property.name}</h1>
                {hasVal(property.address || property.location || property.city) && (
                  <div className={styles.address}>{property.address || property.location || property.city}</div>
                )}
              </div>
              <div className={styles.priceWrap}>
                {hasVal(property.price) && (
                  <div className={styles.price}>${Number(property.price).toLocaleString()}</div>
                )}
                <div className={styles.metaRow}>
                  {hasVal(property.beds) && `${property.beds} beds`}
                  {hasVal(property.number_of_units) && !hasVal(property.beds) && `${property.number_of_units} units`}
                  {hasVal(property.beds) && hasVal(property.baths) && ' • '}
                  {hasVal(property.baths) && `${property.baths} baths`}
                  {hasVal(property.reception) && ` • ${property.reception} reception`}
                </div>
                {hasVal(property.key_dates) && (
                  <div className={styles.keyDates}>
                    <p><strong>Key Dates:</strong></p>
                    <div className={styles.datesList} style={{display:"flex", flexDirection:"column"}}>
                      <><strong>Enabling Works Start:</strong> {property.key_dates.enablingWorksStart}</>
                      <><strong>Housing Start:</strong> {property.key_dates.housingStart}</>
                      <><strong>Project Completion:</strong> {property.key_dates.projectCompletion}</>
                    </div>
                  </div>)}
              </div>
            </div>

            <div className={styles.tagsRow}>
              {hasVal(property.pipelines) && <div className={styles.tag}>{property.pipelines}</div>}
              {hasVal(property.epc) && <div className={styles.tag}>EPC: {property.epc}</div>}
            </div>

            {hasVal(property.features) && (
              <section className={styles.featuresSection}>
                <h3 className={styles.sectionTitle}>Key Features</h3>
                <div className={styles.featuresGrid}>
                  {property.features.map((f, i) => (
                    <div key={i} className={styles.featureItem}>✓ {f}</div>
                  ))}
                </div>
              </section>
            )}

            {hasVal(property.description) && (
              <section className={styles.aboutSection}>
                <h3 className={styles.sectionTitle}>About this property</h3>
                <p className={styles.description}>{property.description}</p>
              </section>
            )}
          </div>
        </div>

        <aside className={styles.sideCol}>
          {(hasVal(property.reference) || hasVal(property.number_of_units) || hasVal(property.beds) || hasVal(property.baths) || hasVal(property.pipelines) || hasVal(property.address) || hasVal(property.city) || hasVal(property.epc)) && (
            <div className={styles.sideCard}>
              <h4 className={styles.sideTitle}>Key Details</h4>
              <dl className={styles.detailList}>
                {hasVal(property.reference) && <div className={styles.detailRow}><dt>Reference</dt><dd>{property.reference}</dd></div>}
                {(hasVal(property.number_of_units) || hasVal(property.beds)) && <div className={styles.detailRow}><dt>Units / Beds</dt><dd>{property.number_of_units || property.beds}</dd></div>}
                {hasVal(property.baths) && <div className={styles.detailRow}><dt>Bathrooms</dt><dd>{property.baths}</dd></div>}
                {hasVal(property.pipelines) && <div className={styles.detailRow}><dt>Pipeline</dt><dd>{property.pipelines}</dd></div>}
                {hasVal(property.address) && <div className={styles.detailRow}><dt>Address</dt><dd>{property.address}</dd></div>}
                {hasVal(property.city) && <div className={styles.detailRow}><dt>City</dt><dd>{property.city}</dd></div>}
                {hasVal(property.epc) && <div className={styles.detailRow}><dt>EPC</dt><dd>{property.epc}</dd></div>}
              </dl>
            </div>
          )}
          <div className={styles.sideCard}>
            <div className={styles.contactWrap}>
              <button className={styles.contactBtn}>Contact Agent</button>
            </div>
          </div>


          {Object.keys(property).some(k => !(k === 'id' || k === 'title' || k === 'name' || k === 'image' || k === 'images' || k === 'description' || k === 'features' || k === 'price' || k === 'address' || k === 'location' || k === 'city' || k === 'beds' || k === 'baths' || k === 'reception' || k === 'pipelines' || k === 'number_of_units' || k === 'key_dates' || k === 'epc')) && (
            <div className={styles.sideCard}>
              <h4 className={styles.sideTitle}>Other information</h4>
              <div className={styles.detailList}>
                {Object.keys(property).map((k) => {
                  if (['id', 'title', 'name', 'image', 'images', 'description', 'features', 'price', 'address', 'location', 'city', 'beds', 'baths', 'reception', 'pipelines', 'number_of_units', 'key_dates', 'epc'].includes(k)) return null;
                  if (!hasVal(property[k])) return null;
                  return <div key={k} className={styles.detailRow}><dt>{k}</dt><dd>{String(property[k])}</dd></div>;
                })}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

export default PropertyDetails;
