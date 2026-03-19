import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Careers from './pages/Careers';
import WhoWe from './landingpages/whowe';
import Coreservices from './landingpages/coreservices';
import WhyChoose from './landingpages/whychoose';
import Testimonials from './landingpages/testimonial';
import CTASection from './landingpages/readyland';
import LandingHero from './landingpages/landinghero';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Services from "./Ourservices/Services";
import AboutUs from "./Ourservices/AboutUs";

import Testimonials from "./Ourservices/Testimonials";

import Footer from "./Ourservices/Footer";

function App() {
  return (
    <Router>
    
      <div className="App">
        <Navbar />
        <Routes>
         
           <Route
          path="/"
          element={
            <>
              <LandingHero />
              <WhoWe />
              <Coreservices />
              <WhyChoose />
              <Testimonials />
              <CTASection />
            </>
          }
        />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </div>


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