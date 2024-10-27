import React from "react";
import { Head } from "./Head";
import { GrPhone } from "react-icons/gr";
import { CiMail } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";

export const Contact = () => {
  return (
    <div>
      <Head />;
      <div className="container mb-5 pb-5 mt-5">
        <div className="row g-5 justify-content-center">
          <div className="col-md-6 col-lg-4 order-md-last pt-3 rounded border border-1">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Get In Touch With Us</span>
            </h4>
            <ul className="p-0">
              <li className="list-group-item">
                <div className="mb-3">
                  <h5>
                    <span>
                      <SlLocationPin />
                    </span>
                    Address
                  </h5>
                  <span className="ps-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </div>
              </li>
              <li className="list-group-item ">
                <div className="mb-3">
                  <h5>
                    <span>
                      <CiMail />
                    </span>
                    Email
                  </h5>
                  <span className="ps-5">abcd@gmail.com</span>
                </div>
              </li>
              <li className="list-group-item ">
                <div className="mb-3">
                  <h5>
                    <span>
                      <GrPhone />
                    </span>
                    Phone
                  </h5>
                  <span className="ps-5"> +91 900000000000</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <form className="needs-validation" noValidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name"
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    id="lastName"
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter valid Phone Number
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder=""
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Massage
                  </label>
                  <textarea
                    type="text"
                    rows="5"
                    className="form-control"
                    id="address"
                    placeholder=""
                    style={{ resize: "none" }}
                    required
                  />
                </div>
                <button className="w-100 btn btn-primary btn-lg" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
