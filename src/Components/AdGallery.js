import React, { useContext } from "react";
import { Head } from "./Head";
import { GC } from "./GC";
import { CdcontainerContext } from "../Store/Provider";

export const AdGallery = () => {
  const { Ga } = useContext(CdcontainerContext);

  return (
    <div className="gallery w-100 p-0">
      <Head Gallery="Gallery" />

      <div className={` container row row-cols-md-4 mx-auto`}>
        {Ga.map((g) => (
          <GC key={g.id} g={g} />
        ))}
      </div>
    </div>
  );
};
