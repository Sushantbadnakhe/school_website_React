import "./App.css";
import { Navbar } from "../Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import { Footer } from "../Components/footer";

import { BackToTop } from "../Components/BackToTop";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
