import { useContext } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { CdcontainerContext } from "../Store/Provider";

export function Navbar() {
  const { Links } = useContext(CdcontainerContext);

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
              {Links.map((link) => (
                <li className="nav-item">
                  {link.sub !== false ? (
                    <li className="nav-item dropdown" key={link.Name}>
                      <a
                        className="nav-link dropdown-toggle "
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        {link.Name}
                      </a>
                      <ul className="dropdown-menu">
                        {link.sub.map((sublink) => (
                          <li key={sublink.Name}>
                            <Link
                              className="dropdown-item"
                              to={`${link.link} ${sublink.sublink}`}
                            >
                              {sublink.subname}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <Link to={link.link} className="nav-link" href="#">
                      {link.Name}
                    </Link>
                  )}
                </li>
              ))}
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
