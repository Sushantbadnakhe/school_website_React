import React from "react";
import styles from "./MarqueeSection.module.css";

export const MarqueeSection = () => {
  return (
    <div className={styles.marqueeSection}>
      <marquee>Notifications</marquee>
    </div>
  );
};
