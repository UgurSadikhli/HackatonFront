import React, { useState } from 'react';
import './Pages.css';
import styles from './Property.module.css';
import AppartmentCard from '../components/AppartmentCard/AppartmentCard';
import Header from '../components/Header/Header';
import { useLocation } from 'react-router-dom';

const sampleArray = [
    {
    id: 1,
        name: "Sample Appartment A",
        location: "Downtown Sample City",
        image: "https://plus.unsplash.com/premium_vector-1721890983105-625c0d32045f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      images: ["https://images.unsplash.com/photo-1545017861-43f97a6f41c0","https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"],
      price: 120000,
      beds: 2, baths: 1,
        number_of_units: 12,
        pipelines: "short",
        key_dates: {
            enablingWorksStart: "2/26/2026  12:00:00 AM",
            housingStart: "3/15/2026  12:00:00 AM",
            projectCompletion: "12/20/2027  12:00:00 AM"
        },
        description: "Bright units close to public transport and local amenities."
    },
    {
      id: 2,
        name: "Sample Appartment B",
        location: "Riverside Sample City",
       image: "https://plus.unsplash.com/premium_vector-1721890983105-625c0d32045f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      images: ["https://images.unsplash.com/photo-1507089947368-19c1da9775ae"],
      price: 350000,
      beds: 4, baths: 3,
        number_of_units: 8,
        pipelines: "medium",
        key_dates: {
            enablingWorksStart: "1/10/2026  12:00:00 AM",
            housingStart: "4/05/2026  12:00:00 AM",
            projectCompletion: "11/30/2027  12:00:00 AM"
        },
        description: "Quiet riverside location with modern finishes."
    },
    {
      id: 3,
        name: "Sample Appartment C",
        location: "Uptown Sample City",
 image: "https://plus.unsplash.com/premium_vector-1721890983105-625c0d32045f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      images: ["https://images.unsplash.com/photo-1505691723518-36a4e6d5f7ef"],
      price: 80000,
      beds: 3, baths: 2,
        number_of_units: 20,
        pipelines: "long",
        key_dates: {
            enablingWorksStart: "3/01/2026  12:00:00 AM",
            housingStart: "6/15/2026  12:00:00 AM",
            projectCompletion: "06/30/2028  12:00:00 AM"
        },
        description: "Large development ideal for families and long-term tenants."
    },
    {
      id: 4,
          price: 85000,
          beds: 2, baths: 1,
        name: "Sample Appartment D",
        location: "Market District",
 image: "https://plus.unsplash.com/premium_vector-1721890983105-625c0d32045f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        number_of_units: 6,
        pipelines: "short",
         key_dates: {
            enablingWorksStart: "2/26/2026  12:00:00 AM",
            housingStart: "3/20/2026  12:00:00 AM",
            projectCompletion: "01/15/2027  12:00:00 AM"
        },

        description: "Cozy boutique building steps from the market and cafes."
    },
    {
      id: 5,
          price: 150000,
          beds: 4, baths: 2,
        name: "Sample Appartment E",
        location: "Hillview",
 image: "https://plus.unsplash.com/premium_vector-1721890983105-625c0d32045f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        number_of_units: 15,
        pipelines: "in-progress",
        key_dates: {
            enablingWorksStart: "05/10/2025  12:00:00 AM",
            housingStart: "08/01/2025  12:00:00 AM",
            projectCompletion: "05/20/2027  12:00:00 AM"
        },

        description: "Scenic views with recently renovated common areas."
    },
    {
      id: 6,
          price: 99000,
          beds: 3, baths: 1,
        name: "Sample Appartment F",
        location: "Garden Quarter",
      image: "https://plus.unsplash.com/premium_vector-1721890983105-625c0d32045f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        number_of_units: 9,
        pipelines: "short",
             key_dates: {
            enablingWorksStart: "2/26/2026  12:00:00 AM",
            housingStart: "3/15/2026  12:00:00 AM",
            projectCompletion: "12/20/2027  12:00:00 AM"
        },

        description: "Green courtyard and family-friendly layout."
    },
    {
      id: 7,
          price: 500000,
          beds: 6, baths: 4,
        name: "Sample Appartment G",
        location: "Tech Park",
 image: "https://plus.unsplash.com/premium_vector-1721890983105-625c0d32045f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        number_of_units: 30,
        pipelines: "long",
          key_dates: {
            enablingWorksStart: "4/01/2026  12:00:00 AM",
            housingStart: "7/15/2026  12:00:00 AM",
            projectCompletion: "08/31/2028  12:00:00 AM"
        },

        description: "High-density complex popular with professionals."
    },
    {
      id: 8,
          price: 75000,
          beds: 2, baths: 1,
        name: "Sample Appartment H",
        location: "Harborfront",
 image: "https://plus.unsplash.com/premium_vector-1721890983105-625c0d32045f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        number_of_units: 5,
        pipelines: "stalled",
            key_dates: {
            enablingWorksStart: "09/15/2025  12:00:00 AM",
            housingStart: "12/01/2025  12:00:00 AM",
            projectCompletion: "09/30/2027  12:00:00 AM"
        },

        description: "Small waterfront property currently awaiting permit approvals."
    },
    {
      id: 9,
          price: 68000,
          beds: 1, baths: 1,
        name: "Sample Appartment I",
        location: "Old Town",
 image: "https://plus.unsplash.com/premium_vector-1721890983105-625c0d32045f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        number_of_units: 7,
        pipelines: "medium",
        key_dates: {
            enablingWorksStart: "12/15/2025  12:00:00 AM",
            housingStart: "03/10/2026  12:00:00 AM",
            projectCompletion: "10/20/2027  12:00:00 AM"
        },

        description: "Historic building with character and upgraded utilities."
    },
    {
      id: 10,
          price: 210000,
          beds: 5, baths: 3,
        name: "Sample Appartment J",
        location: "University District",
 image: "https://plus.unsplash.com/premium_vector-1721890983105-625c0d32045f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        number_of_units: 18,
        pipelines: "short",
        key_dates: {
            enablingWorksStart: "2/26/2026  12:00:00 AM",
            housingStart: "3/15/2026  12:00:00 AM",
            projectCompletion: "12/20/2027  12:00:00 AM"
        },

        description: "Convenient for students with shared and private units."
    },
    {
      id: 11,
          price: 40000,
          beds: 1, baths: 1,
        name: "Sample Appartment K",
        location: "Industrial Edge",
 image: "https://plus.unsplash.com/premium_vector-1721890983105-625c0d32045f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        number_of_units: 4,
        pipelines: "in-progress",
              key_dates: {
            enablingWorksStart: "06/01/2025  12:00:00 AM",
            housingStart: "09/15/2025  12:00:00 AM",
            projectCompletion: "06/30/2027  12:00:00 AM"
        },

        description: "Adaptive reuse of warehouse space into loft-style apartments."
    },
    {
      id: 12,
          price: 130000,
          beds: 3, baths: 2,
        name: "Sample Appartment L",
        location: "Suburban Meadows",
 image: "https://plus.unsplash.com/premium_vector-1721890983105-625c0d32045f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        number_of_units: 22,
        pipelines: "short",
        key_dates: {
            enablingWorksStart: "2/26/2026  12:00:00 AM",
            housingStart: "3/15/2026  12:00:00 AM",
            projectCompletion: "12/20/2027  12:00:00 AM"
        },

        description: "Family-oriented complex with parking and playgrounds."
    }
];


function Property() {
  const [filters, setFilters] = useState({
    reference: false,
    sponsorsDevelopers: false,
    siteSize: '',
    revenue: '',
    greenField: false,
    brownField: false,
    placeBasedPipeline: false,
    sppPriority: false,
    procurementRoute: false,
    developerStatus: false,
    landOwnershipType: false,
    intervention: false,
    constraints: false
  });

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const postcode = params.get('postcode');

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };


  const handleSubmit = async () => {
    // try {
    //   const response = await fetch('https://your-backend-endpoint.com/api/filters', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(filters)
    //   });
    //   const data = await response.json();
    //   console.log('Backend response:', data);
    // } catch (error) {
    //   console.error('Error sending filters:', error);
    // }

    console.log('Applied Filters:', filters);
    console.log('Postcode:', postcode);

  };

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.bottom}>
        <AppartmentCard dataList={sampleArray} />

        <div className={styles.filterBoxMain}>
          <div className={styles.filterBox}>
            
            {/* Category 1 */}
            <div className={styles.category}>
              <h3 className={styles.categoryTitle}>Key Details</h3>

              <div className={styles.fieldRow}>
                <label>Reference</label>
                <input type="checkbox" name="reference" checked={filters.reference} onChange={handleChange} />
              </div>

              <div className={styles.fieldRow}>
                <label>Sponsors & Developers</label>
                <input type="checkbox" name="sponsorsDevelopers" checked={filters.sponsorsDevelopers} onChange={handleChange} />
              </div>

              <div className={styles.fieldRow}>
                <label>Site Size </label>
                <input type="text" name="siteSize" value={filters.siteSize} onChange={handleChange} placeholder="Enter site size" />
              </div>

              <div className={styles.fieldRow}>
                <label>Revenue</label>
                <input type="text" name="revenue" value={filters.revenue} onChange={handleChange} placeholder="Enter revenue" />
              </div>
            </div>

            {/* Category 2 */}
            <div className={styles.category}>
              <h3 className={styles.categoryTitle}>About Area</h3>
              <div className={styles.fieldRow}>
                <label>Green Field</label>
                <input type="checkbox" name="greenField" checked={filters.greenField} onChange={handleChange} />
              </div>
              <div className={styles.fieldRow}>
                <label>Brown Field</label>
                <input type="checkbox" name="brownField" checked={filters.brownField} onChange={handleChange} />
              </div>
              <div className={styles.fieldRow}>
                <label>Place-based Pipeline</label>
                <input type="checkbox" name="placeBasedPipeline" checked={filters.placeBasedPipeline} onChange={handleChange} />
              </div>
              <div className={styles.fieldRow}>
                <label>SPP Priority</label>
                <input type="checkbox" name="sppPriority" checked={filters.sppPriority} onChange={handleChange} />
              </div>
              <div className={styles.fieldRow}>
                <label>Procurement Route</label>
                <input type="checkbox" name="procurementRoute" checked={filters.procurementRoute} onChange={handleChange} />
              </div>
            </div>

            {/* Category 3 */}
            <div className={styles.category}>
              <h3 className={styles.categoryTitle}>Ownership</h3>
              <div className={styles.fieldRow}>
                <label>Developer Status</label>
                <input type="checkbox" name="developerStatus" checked={filters.developerStatus} onChange={handleChange} />
              </div>
              <div className={styles.fieldRow}>
                <label>Land Ownership Type</label>
                <input type="checkbox" name="landOwnershipType" checked={filters.landOwnershipType} onChange={handleChange} />
              </div>
            </div>

            {/* Category 4 */}
            <div className={styles.category}>
              <h3 className={styles.categoryTitle}>Status</h3>
              <div className={styles.fieldRow}>
                <label>Intervention</label>
                <input type="checkbox" name="intervention" checked={filters.intervention} onChange={handleChange} />
              </div>
              <div className={styles.fieldRow}>
                <label>Constraints</label>
                <input type="checkbox" name="constraints" checked={filters.constraints} onChange={handleChange} />
              </div>
            </div>

            <button onClick={handleSubmit} className={styles.submitButton}>Apply Filters</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
