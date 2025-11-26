import React from 'react';
import './Pages.css';
import styles from './Property.module.css';
import AppartmentCard from '../components/AppartmentCard/AppartmentCard';
import Header from '../components/Header/Header';

const sampleArray = [
    {
        name: "Sample Appartment A",
        location: "Downtown Sample City",
        image: "https://img.freepik.com/premium-vector/isolated-home-vector-illustration_1076263-25.jpg",
        number_of_units: 12,
        pipelines: "short",
        key_dates: ["2023", "2024"],
        description: "Bright units close to public transport and local amenities."
    },
    {
        name: "Sample Appartment B",
        location: "Riverside Sample City",
        image: "https://img.freepik.com/premium-vector/isolated-home-vector-illustration_1076263-25.jpg",
        number_of_units: 8,
        pipelines: "medium",
        key_dates: ["2022", "2025"],
        description: "Quiet riverside location with modern finishes."
    },
    {
        name: "Sample Appartment C",
        location: "Uptown Sample City",
        image: "https://img.freepik.com/premium-vector/isolated-home-vector-illustration_1076263-25.jpg",
        number_of_units: 20,
        pipelines: "long",
        key_dates: ["2021", "2023"],
        description: "Large development ideal for families and long-term tenants."
    },
    {
        name: "Sample Appartment D",
        location: "Market District",
        image: "https://img.freepik.com/premium-vector/isolated-home-vector-illustration_1076263-25.jpg",
        number_of_units: 6,
        pipelines: "short",
        key_dates: ["2020", "2024"],
        description: "Cozy boutique building steps from the market and cafes."
    },
    {
        name: "Sample Appartment E",
        location: "Hillview",
        image: "https://img.freepik.com/premium-vector/isolated-home-vector-illustration_1076263-25.jpg",
        number_of_units: 15,
        pipelines: "in-progress",
        key_dates: ["2023", "2026"],
        description: "Scenic views with recently renovated common areas."
    },
    {
        name: "Sample Appartment F",
        location: "Garden Quarter",
        image: "https://img.freepik.com/premium-vector/isolated-home-vector-illustration_1076263-25.jpg",
        number_of_units: 9,
        pipelines: "short",
        key_dates: ["2022", "2024"],
        description: "Green courtyard and family-friendly layout."
    },
    {
        name: "Sample Appartment G",
        location: "Tech Park",
        image: "https://img.freepik.com/premium-vector/isolated-home-vector-illustration_1076263-25.jpg",
        number_of_units: 30,
        pipelines: "long",
        key_dates: ["2021", "2027"],
        description: "High-density complex popular with professionals."
    },
    {
        name: "Sample Appartment H",
        location: "Harborfront",
        image: "https://img.freepik.com/premium-vector/isolated-home-vector-illustration_1076263-25.jpg",
        number_of_units: 5,
        pipelines: "stalled",
        key_dates: ["2020", "2023"],
        description: "Small waterfront property currently awaiting permit approvals."
    },
    {
        name: "Sample Appartment I",
        location: "Old Town",
        image: "https://img.freepik.com/premium-vector/isolated-home-vector-illustration_1076263-25.jpg",
        number_of_units: 7,
        pipelines: "medium",
        key_dates: ["2019", "2022"],
        description: "Historic building with character and upgraded utilities."
    },
    {
        name: "Sample Appartment J",
        location: "University District",
        image: "https://img.freepik.com/premium-vector/isolated-home-vector-illustration_1076263-25.jpg",
        number_of_units: 18,
        pipelines: "short",
        key_dates: ["2022", "2023"],
        description: "Convenient for students with shared and private units."
    },
    {
        name: "Sample Appartment K",
        location: "Industrial Edge",
        image: "https://img.freepik.com/premium-vector/isolated-home-vector-illustration_1076263-25.jpg",
        number_of_units: 4,
        pipelines: "in-progress",
        key_dates: ["2023", "2026"],
        description: "Adaptive reuse of warehouse space into loft-style apartments."
    },
    {
        name: "Sample Appartment L",
        location: "Suburban Meadows",
        image: "https://img.freepik.com/premium-vector/isolated-home-vector-illustration_1076263-25.jpg",
        number_of_units: 22,
        pipelines: "short",
        key_dates: ["2020", "2024"],
        description: "Family-oriented complex with parking and playgrounds."
    }
];



function Property() {
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
          <input type="checkbox" />
        </div>

        <div className={styles.fieldRow}>
          <label>Sponsors & Developers</label>
          <input type="checkbox" />
        </div>

        <div className={styles.fieldRow}>
          <label>Site Size </label>
          <input type="text" placeholder="Enter site size" />
        </div>

        <div className={styles.fieldRow}>
          <label>Revenue</label>
          <input type="text" placeholder="Enter revenue" />
        </div>
      </div>

      {/* Category 2 */}
      <div className={styles.category}>
        <h3 className={styles.categoryTitle}>About Area</h3>

        <div className={styles.fieldRow}>
          <label>Green/Brown Field</label>
          <div className={styles.inputs}>
            <input type="text" placeholder="Enter value" />
            <input type="checkbox" />
          </div>
        </div>

        <div className={styles.fieldRow}>
          <label>Place-based Pipeline </label>
          <input type="checkbox" />
        </div>

        <div className={styles.fieldRow}>
          <label>SPP Priority </label>
          <input type="checkbox" />
        </div>

        <div className={styles.fieldRow}>
          <label>Procurement Route </label>
          <input type="checkbox" />
        </div>
      </div>

      {/* Category 3 */}
      <div className={styles.category}>
        <h3 className={styles.categoryTitle}>Ownership</h3>

        <div className={styles.fieldRow}>
          <label>Developer Status </label>
          <input type="checkbox" />
        </div>

        <div className={styles.fieldRow}>
          <label>Land Ownership Type </label>
          <input type="checkbox" />
        </div>
      </div>

      {/* Category 4 */}
      <div className={styles.category}>
        <h3 className={styles.categoryTitle}>Status</h3>

        <div className={styles.fieldRow}>
          <label>Intervention </label>
          <input type="checkbox" />
        </div>

        <div className={styles.fieldRow}>
          <label>Constraints </label>
          <input type="checkbox" />
        </div>
      </div>
             </div>
            </div>
        </div>
      

      
      
    </div>
  );
}

export default Property;
