// AppartmentCard.jsx
import React from "react";
import styles from "./AppartmentCard.module.css";



export default function AppartmentCard({ dataList = [] }) {
  return (
    <div className={styles.container}>
        <div className={styles.container2}>
      {dataList.map((item, index) => (
        <div key={index} className={styles.card}>
          <img src={item.image} alt={item.name} className={styles.image} />

          <div className={styles.info}>
            <h2 className={styles.title}>{item.name}</h2>
            <p className={styles.text}><strong>Location:</strong> {item.location}</p>
            <p className={styles.text}><strong>Units:</strong> {item.number_of_units}</p>
            <p className={styles.text}><strong>Pipelines:</strong> {item.pipelines}</p>
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
