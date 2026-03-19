import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Hide Navbar on Testimonials page
  if (location.pathname === "/testimonials") {
    return null;
  }

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <div className="crest-icon"></div>
          <div className="logo-text-stack">
            <span className="logo-text-main">Brolichi Creation Enterprise Limited</span>
            <span className="logo-text-sub">YOUR GATEWAY TO THE CONSTRUCTION WORLD</span>
          </div>
        </Link>

        <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
          <li>
            <Link 
              to="/" 
              className={isActive("/") ? "active-pill" : ""} 
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={isActive("/services") ? "active-pill" : ""} 
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActive("/about") ? "active-pill" : ""} 
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link 
              to="/testimonials" 
              className={isActive("/testimonials") ? "active-pill" : ""} 
              onClick={() => setIsMenuOpen(false)}
            >
              TESTIMONIALS
            </Link>
          </li>
          <li>
            <Link 
              to="/careers" 
              className={isActive("/careers") ? "active-pill" : ""} 
              onClick={() => setIsMenuOpen(false)}
            >
              CAREERS
            </Link>
          </li>
        </ul>

        <div className="nav-actions">
          <a href="/contact" className="nav-contact-btn">CONTACT US</a>
          <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
