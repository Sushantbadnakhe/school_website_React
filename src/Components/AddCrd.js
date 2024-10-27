import styles from "./AddCrd.module.css";
import { useState } from "react";
import { AcCard } from "./AcCard";
import { useContext } from "react";
import { CdcontainerContext } from "../Store/Provider";
import { Card } from "./Card";
import { MdOutlineDeleteOutline } from "react-icons/md";

export const Addcrd = () => {
  const [select, setselect] = useState("A");

  const { Cdcontainer, deleteCard } = useContext(CdcontainerContext);

  const handleselect = (b) => {
    setselect(b);
  };

  return (
    <div className="container my-5">
      <form className="row g-3">
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Select Image
          </label>
          <input type="file" className="form-control" id="inputEmail4" />
        </div>

        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Add title"
          />
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">
            Description
          </label>
          <textarea
            rows="5"
            style={{ resize: "none" }}
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Add somthing about Card"
          />
        </div>
        <div className="col-md-6">
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">Curriculum</option>
            <option value="2">Achivement</option>
          </select>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Add Card
          </button>
        </div>
      </form>

      <hr className="my-5" />
      <nav
        className="navbar navbar-expand mb-3"
        aria-label="Second navbar example"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample02"
            aria-controls="navbarsExample02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse  navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav me-auto">
              <li
                className={`${
                  select === "C" ? styles.active : ""
                } nav-item mx-3`}
                onClick={() => {
                  handleselect("C");
                }}
              >
                <h5>Curriculum</h5>
              </li>
              <li
                className={`${
                  select === "A" ? styles.active : ""
                } nav-item mx-3`}
                onClick={() => {
                  handleselect("A");
                }}
              >
                <h5>Achivement</h5>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />

      {select === "A" ? (
        <div className="row row-cols-1 row-cols-md-4 g-4 m-3 container mx-auto text-start">
          {Cdcontainer.map((Ac) => (
            <div key={Ac.id}>
              <button
                className="btn btn-primary"
                onClick={() => {
                  deleteCard(Ac.id);
                }}
              >
                delete
              </button>
              <AcCard key={Ac.id} Ac={Ac} />
            </div>
          ))}
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-4 g-4 m-3 container mx-auto text-start">
          {Cdcontainer.map((Cd) => (
            <div key={Cd.id}>
              <button
                className="btn btn-outline-primary rounded-circle p-2"
                onClick={() => {
                  deleteCard(Cd.id);
                }}
              >
                <MdOutlineDeleteOutline />
              </button>
              <Card key={Cd.id} Cd={Cd} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
