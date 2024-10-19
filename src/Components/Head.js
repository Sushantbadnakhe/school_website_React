import React, { useState } from "react";
import styles from "./Head.module.css";
export const Head = () => {
  let location = window.location.href;

  return (
    <div className={styles.heading}>
      {location.includes("contact-us") ? <h1>Contact Us</h1> : <h1>Gallery</h1>}
    </div>
  );
};
