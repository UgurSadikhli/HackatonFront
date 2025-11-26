// AppartmentCard.jsx
import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./AppartmentCard.module.css";



export default function AppartmentCard({ dataList = [] }) {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
        <div className={styles.container2}>
      {dataList.map((item, index) => (
        <div
          key={index}
          className={styles.card}
          role="button"
          tabIndex={0}
          onClick={() => navigate(`/property/${item.id}`, { state: { property: item } })}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(`/property/${item.id}`, { state: { property: item } }); }}
        >
          <img src={item.image || (item.images && item.images[0]) || 'https://via.placeholder.com/180x140?text=No+image'} alt={item.name || item.title || 'Property image'} className={styles.image} />

          <div className={styles.info}>
            <h2 className={styles.title}>{item.name || item.title}</h2>
            <p className={styles.text}><strong>Location:</strong> {item.location || item.address || item.city}</p>
            <p className={styles.text}><strong>Units:</strong> {item.number_of_units || item.beds}</p>
            <p className={styles.text}><strong>Pipelines:</strong> {item.pipelines}</p>
            <p><strong>Key Dates:</strong> {item.key_dates && item.key_dates.join(", ")}</p>
            <div className={styles.keyDates}>
              <p><strong>Key Dates:</strong></p>
              <ul className={styles.datesList}>
                <li><strong>Enabling Works Start:</strong> {item.key_dates.enablingWorksStart}</li>
                <li><strong>Housing Start:</strong> {item.key_dates.housingStart}</li>
                <li><strong>Project Completion:</strong> {item.key_dates.projectCompletion}</li>
              </ul>
            </div>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
