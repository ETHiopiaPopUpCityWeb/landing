import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import WhyEthiopia from "./pages/WhyEthiopia";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen max-w-screen flex flex-col">
        <Navbar />
        <div className="flex-1 px-2">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Understand-why-ETHiopia" element={<WhyEthiopia />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
