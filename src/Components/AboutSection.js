import React from "react";
import styles from "./AboutSection.module.css";

export const AboutSection = () => {
  return (
    <div className={`${styles.background} text-center  rounded-3 `}>
      <div className={`${styles.section} container marketing`}>
        <svg
          className="bi mt-4 mb-3"
          style={{ color: "var(--bs-indigo)", width: "100", height: "100" }}
        >
          <use xlinkHref="#bootstrap" />
        </svg>
        <h1 className={styles.heading}>ABOUT SCHOOL</h1>
        <p className={`${styles.para} col-lg-8 mx-auto fs-5 text-muted`}>
          This is a custom jumbotron featuring an SVG image at the top
        </p>
        <div className={styles.AboutSection}>
          <div className="row featurette">
            <div className="col-md-5 order-md-1">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-bg)"
                ></rect>
                <text
                  x="50%"
                  y="50%"
                  fill="var(--bs-secondary-color)"
                  dy=".3em"
                >
                  500x500
                </text>
              </svg>
            </div>
            <div className={`${styles.section} col-md-7 order-md-2`}>
              <h2 className=" featurette-heading fw-normal lh-1">
                About Our
                <span className="text-body-secondary"> School</span>
              </h2>
              <p className={`${styles.aboutPara} lead`}>
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.Another featurette? Of course. More
                placeholder content here to give you an idea of how this layout
                would work with some actual real-world content in place.Another
                featurette? Of course. More placeholder content here to give you
                an idea of how this layout would work with some actual
                real-world content in place.
              </p>
              <button type="button" className="btn btn-primary">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
