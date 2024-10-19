import React from "react";
import styles from "./Card.module.css";
export const Card = () => {
  return (
    <>
      <div className={`${styles.card}`}>
        <div className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">01/01/2024</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};