import React from "react";
import styles from "./VissionCarousel.module.css";

export function VissionCarousel() {
  return (
    <div className="container marketing">
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className={`${styles.Section} col-md-7`}>
          <h2 className="featurette-heading fw-normal lh-1">
            Our
            <span className="text-body-secondary"> Vision</span>
          </h2>
          <p className="lead">
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>
        </div>
        <div className="col-md-5">
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
            <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-5">
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
            <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
        <div className={`${styles.Section} col-md-7`}>
          <h2 className="featurette-heading fw-normal lh-1">
            Our
            <span className="text-body-secondary"> Mission</span>
          </h2>
          <p className="lead">
            And yes, this is the last block of representative placeholder
            content. Again, not really intended to be actually read, simply here
            to give you a better view of what this would look like with some
            actual content. Your content.
          </p>
        </div>
      </div>

      <hr className="featurette-divider" />
    </div>
  );
}
