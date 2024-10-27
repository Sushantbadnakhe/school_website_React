import { useContext } from "react";
import { CdcontainerContext } from "../Store/Provider";

export const Sidebar = ({ handleTab, tab }) => {
  const { SidebarTag } = useContext(CdcontainerContext);

  return (
    <div
      className={`${
        window.innerWidth <= "800" ? "offcanvas offcanvas-start" : ""
      } d-flex flex-column  p-3 bg-body-tertiary`}
      style={{ width: "280px", height: "calc(100vh-60rem)" }}
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabindex="-1"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
    >
      {window.innerWidth <= "800" ? (
        <button
          type="button"
          className="btn-close ms-auto"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      ) : (
        ""
      )}
      <div className="d-flex">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
      </div>

      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {SidebarTag.map((item) => (
          <li
            key={item.name}
            className="nav-item"
            onClick={() => {
              handleTab(item.handler);
            }}
          >
            <a
              href="#"
              className={`${tab === item.handler ? "active" : ""} nav-link`}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
