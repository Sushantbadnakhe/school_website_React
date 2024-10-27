import "./App.css";
import { Navbar } from "../Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "../Components/footer";
import { BackToTop } from "../Components/BackToTop";
import { Outlet } from "react-router-dom";
import { CdcontainerProvider } from "../Store/Provider";

function App() {
  

  return (
    
<CdcontainerProvider>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
        <BackToTop />
      </div>
</CdcontainerProvider>
  );
}

export default App;
