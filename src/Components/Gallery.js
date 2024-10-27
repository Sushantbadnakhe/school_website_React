import styles from "./Gallery.module.css";
import React, { useContext } from "react";
import { Head } from "./Head";
import { GC } from "./GC";
import { CdcontainerContext } from "../Store/Provider";
export const Gallery = () => {
  const { Ga } = useContext(CdcontainerContext);

  return (
    <div>
      <div className="gallery">
        <Head Gallery="Gallery" />

        <div
          className={`${styles.container} container row row-cols-md-4 mx-auto`}
        >
          {Ga.map((g) => (
            <GC key={g.id} g={g} />
          ))}
        </div>
      </div>
    </div>
  );
};
