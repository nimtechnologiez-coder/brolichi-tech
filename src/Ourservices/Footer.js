import React from "react";
import { Link } from "react-router-dom";
import "../Styleour/footer.css";
import logo from "../images/check-broken.png";
import { 
  FaInstagram, 
  FaLinkedinIn, 
  FaFacebookF, 
  FaXTwitter 
} from "react-icons/fa6";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <div className="logo-box-footer">
            <img src={logo} alt="logo" />
          </div>

          <p className="footer-desc">
            Quality building materials for homes, shops, and projects
            of all sizes. Reliable products. Steady supply. Support from
            start to finish.
          </p>

          <div className="social-icons">
            <Link to="#" title="Instagram"><FaInstagram /></Link>
            <Link to="#" title="LinkedIn"><FaLinkedinIn /></Link>
            <Link to="#" title="Facebook"><FaFacebookF /></Link>
            <Link to="#" title="X"><FaXTwitter /></Link>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><span className="dot"></span><Link to="/">Home</Link></li>
            <li><span className="dot"></span><Link to="/services">Products</Link></li>
            <li><span className="dot"></span><Link to="/about">About Us</Link></li>
            <li><span className="dot"></span><Link to="/testimonials">Testimonials</Link></li>
            <li><span className="dot"></span><Link to="/careers">Careers</Link></li>
            <li><span className="dot"></span><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div className="footer-links">
          <h3 className="footer-title">Our Products</h3>
          <ul>
            <li><span className="dot"></span>Cement, Bricks, Sand & Stones</li>
            <li><span className="dot"></span>Roofing Sheets, Timber & Doors</li>
            <li><span className="dot"></span>Paints, Tiles & Finishing Items</li>
            <li><span className="dot"></span>Electrical & Plumbing Supplies</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-links">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt className="footer-icon" />
              123 Enterprise Avenue, Harare, Zimbabwe
            </li>
            <li>
              <FaPhoneAlt className="footer-icon" />
              +263 00 000 0000
            </li>
            <li>
              <FaEnvelope className="footer-icon" />
              info@brolichi.com
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="copyright-group">
          <p>© 2024 Corporate Brand. All rights reserved.</p>
          <Link to="/privacy" className="privacy-link">Privacy Policy</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;