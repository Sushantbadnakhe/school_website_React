import React, { useContext } from "react";
import { AcCard } from "./AcCard";
import styles from "./AchivCards.module.css";
import { CdcontainerContext } from "../Store/Provider";

export const AchivCards = () => {
 const {Cdcontainer} = useContext(CdcontainerContext)

  return (
    <div className={styles.container}>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Our Achievements</h1>
            <p className="lead text-body-secondary ">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4 m-3 container mx-auto text-start">
          {Cdcontainer.map((Ac) => (
            <AcCard key={Ac.id} Ac={Ac} />
          ))}
        </div>
      </section>
    </div>
  );
};
