import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className={styles.Navbar}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <svg
              width="50"
              height="50"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="42.5"
                stroke="#F8B81F"
                strokeWidth="15"
              />
            </svg>
          </a>
          <div className="col-lg-3  ms-auto m-1">
            <button
              className="navbar-toggler mx-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div
            className="collapse navbar-collapse d-lg-flex justify-content-lg-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav col-lg-12 justify-content-lg-center">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="nav-link" href="#">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/facilities" className="nav-link">
                  Facilities
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admission" className="nav-link">
                  Admission
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Acadmic
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Courses
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Exam Schedule
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Syllabus
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Rules and Regulation
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/gallery" className="nav-link" aria-disabled="true">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-lg-flex col-lg-3 justify-content-lg-end">
            <Link to="/contact-us">
              <button className="btn btn-primary">contact Us</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
