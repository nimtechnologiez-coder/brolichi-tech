import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Services from "./Ourservices/Services";
import AboutUs from "./Ourservices/AboutUs";

// Footer
import Footer from "./Ourservices/Footer";

function App() {
  return (
    <Router>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/services" element={<Services />} />

        {/* You can add more pages later */}
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      {/* FOOTER */}
      <Footer />

    </Router>
  );
}

export default App;