import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Gallery } from "./Components/Gallery";
import { Home } from "./Components/Home";
import { AboutSection } from "./Components/AboutSection";
import { Contact } from "./Components/Contact";
import { Facilities } from "./Components/Facilities";
import { Admission } from "./Components/Admission";
import { Imgs } from "./Components/Imgs";
import { Admin } from "./Components/admin";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <AboutSection /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/contact-Us", element: <Contact /> },
      { path: "/facilities", element: <Facilities /> },
      { path: "/admission", element: <Admission /> },
      { path: "/gallery/subgallery", element: <Imgs /> },
      { path: "/admin", element: <Admin /> },
      // { path: `/gallery/${GalleryTab}`, element: <subGallery /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
