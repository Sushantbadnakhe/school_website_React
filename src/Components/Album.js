import React from "react";
import styles from "./Album.module.css";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export const Album = () => {
  return (
    <main>
      <div className="album py-5 bg-body-tertiary">
        <center>
          <h3 className={styles.heading}>Gallery</h3>
        </center>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <Link to="/Gallery">
          <button className="btn btn-primary me-3 p-2">
            View More
            <span>
              {" "}
              <MdKeyboardDoubleArrowRight />
            </span>
          </button>
        </Link>
      </div>
    </main>
  );
};
