import React, { useContext } from "react";
import styles from "./GC.module.css";
import { CdcontainerContext } from "../Store/Provider";

export const GC = ({ g }) => {
  const { showGallery } = useContext(CdcontainerContext);

  return (
    <div
      className={`${styles.img_container} border rounded mx-1 my-3 p-1`}
      onClick={() => {
        showGallery(g);
      }}
    >
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="42.5" stroke="#F8B81F" strokeWidth="15" />
      </svg>
      <div className="my-0">
        <p>{g.title}</p>
      </div>
    </div>
  );
};
