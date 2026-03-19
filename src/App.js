import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
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
import Contact from './contact/Contact';
import Footer from './components/Footer';

// import Services from "./Ourservices/Services";
// import AboutUs from "./Ourservices/AboutUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          {/* LANDING PAGE ROUTE */}
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
          
          {/* OTHER ROUTES */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;