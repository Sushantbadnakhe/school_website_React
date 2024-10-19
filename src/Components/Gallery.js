import React from "react";
import styles from "./Gallery.module.css";
import { Head } from "./Head";
export const Gallery = () => {
  return (
    <div className="gallery">
      <Head Gallery="Gallery" />
      <div className={`${styles.container} container`}>
        <div className={`${styles.img_container} img-thumbnail`}>
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="42.5"
              stroke="#F8B81F"
              strokeWidth="15"
            />
          </svg>
          <div className={styles.caption}>
            <p>Activities</p>
          </div>
        </div>
      </div>
    </div>
  );
};
