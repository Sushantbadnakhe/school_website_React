import React from "react";
import styles from "./Curriculum.module.css";
import { Card } from "./Card.js";

export const Curriculum = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>
          Our
          <span> Curriculum</span>
        </h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
