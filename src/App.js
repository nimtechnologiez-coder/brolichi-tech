import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Services from "./Ourservices/Services";
import AboutUs from "./Ourservices/AboutUs";

import Testimonials from "./Ourservices/Testimonials";

function App() {
  return (
    <Router>
    

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

 
    </Router>
  );
}

export default App;