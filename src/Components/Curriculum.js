import styles from "./Curriculum.module.css";
import { Card } from "./Card";
import { useContext } from "react";
import { CdcontainerContext } from "../Store/Provider";

export const Curriculum = () => {
  

  const {Cdcontainer} = useContext(CdcontainerContext);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>
          Our
          <span> Curriculum</span>
        </h1>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4 m-3 container mx-auto text-start">
        {Cdcontainer.map((Cd) => (
          <Card key={Cd.id} Cd={Cd} />
        ))}
      </div>
    </div>
  );
};

/* g */
