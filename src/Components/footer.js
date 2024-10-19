import React from "react";
import styles from "./footer.module.css";
import { GrPhone } from "react-icons/gr";
import { CiMail } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { PiYoutubeLogoFill } from "react-icons/pi";

export const Footer = () => {
  return (
    <div className={`${styles.container} container`} data-bs-theme="dark">
      <footer className="py-5">
        <div className={`${styles.row} row`}>
          <div className="col-6 col-md-5 mb-3">
            <h5>Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Facilities
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Admission
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Acadmic
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-5  mb-3">
            <h5>Contact Details</h5>

            <div className="row">
              <div className="col mb-5">
                <ul className="nav flex-column">
                  <li className="nav-item mb-3">
                    <h5>
                      <span>
                        <GrPhone />
                      </span>
                      Phone
                    </h5>
                    <span> +91 900000000000</span>
                  </li>
                  <li className="nav-item mb-3">
                    <h5>
                      <span>
                        <CiMail />
                      </span>
                      Email
                    </h5>
                    <span>abcd@gmail.com</span>
                  </li>
                  <li className="nav-item mb-3">
                    <h5>
                      <span>
                        <SlLocationPin />
                      </span>
                      Address
                    </h5>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <PiYoutubeLogoFill />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#facebook"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
