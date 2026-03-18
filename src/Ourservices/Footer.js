import React from "react";
import "../Styleour/footer.css";
import logo from "../images/check-broken.png";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,

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
          <div className="logo-box">
            <img src={logo} alt="logo" />
          </div>

          <p className="footer-desc">
            Quality building materials for homes, shops, and projects of all sizes.
            Reliable products. Steady supply. Support from start to finish.
          </p>

          <div className="social-icons">
            <FaInstagram />
            <FaLinkedinIn />
            <FaFacebookF />
            <FaXTwitter />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div className="footer-links">
          <h3>Our Products</h3>
          <ul>
            <li>Cement, Bricks, Sand & Stones</li>
            <li>Roofing Sheets, Timber & Doors</li>
            <li>Paints, Tiles & Finishing Items</li>
            <li>Electrical & Plumbing Supplies</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-links">
          <h3>Contact Us</h3>
          <ul className="contact">
            <li>
              <FaMapMarkerAlt className="icon" />
              123 Enterprise Avenue, Harare, Zimbabwe
            </li>
            <li>
              <FaPhoneAlt className="icon" />
              +263 00 000 0000
            </li>
            <li>
              <FaEnvelope className="icon" />
              info@brolichi.com
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2024 Corporate Brand. All rights reserved.</p>
        <span>Privacy Policy</span>
      </div>

    </footer>
  );
};

export default Footer;