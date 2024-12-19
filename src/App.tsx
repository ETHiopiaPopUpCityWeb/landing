import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import WhyEthiopia from "./pages/WhyEthiopia";
// import EmbeddedNextApp from "./pages/EmbeddedNextApp";
import { useEffect } from "react";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
};

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/lotto") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen max-w-screen flex flex-col">
      <div className="flex-1">
        {location.pathname !== "/lotto" && <Navbar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/lotto" element={<EmbeddedNextApp />} /> */}
          <Route path="/Understand-why-ETHiopia" element={<WhyEthiopia />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
