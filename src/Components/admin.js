import { useState } from "react";
import { AdminPanel } from "./AdminPanel";
import { Dsh } from "./Dashboard";
import { Sidebar } from "./Sidebar";
import { Addcrd } from "./AddCrd";
import { BsLayoutSidebar } from "react-icons/bs";
import { AdGallery } from "./AdGallery";
import { useContext } from "react";
import { CdcontainerContext } from "../Store/Provider";

export const Admin = () => {
  const [tab, settab] = useState("AdminPanel");
  const { SidebarTag } = useContext(CdcontainerContext);

  const handleTab = (tab) => {
    settab(tab);
    console.log(tab);
  };

  return (
    <div>
      {window.innerWidth <= "800" ? (
        <button
          className="btn btn-light ms-3 my-3"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
        >
          <BsLayoutSidebar />
        </button>
      ) : (
        ""
      )}

      <div className="d-flex">
        <Sidebar handleTab={handleTab} tab={tab} />
        {tab === "AdminPanel" ? (
          <AdminPanel />
        ) : tab === "Dsh" ? (
          <Dsh />
        ) : tab === "Addcrd" ? (
          <Addcrd />
        ) : tab === "AdGallery" ? (
          <AdGallery />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
