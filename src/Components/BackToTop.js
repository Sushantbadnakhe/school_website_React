import React, { useState } from "react";
import styles from "./BackToTop.module.css";

export const BackToTop = () => {
  let [displayCon, setdisplayCon] = useState("none");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 999) {
      setdisplayCon("block");
    } else if (window.scrollY <= 700) {
      setdisplayCon("none");
    }
  });

  return (
    <div className={styles.back} style={{ display: displayCon }}>
      <a href="#" className="btn my-2">
        <span className="material-symbols-outlined">arrow_upward</span>
      </a>
    </div>
  );
};
