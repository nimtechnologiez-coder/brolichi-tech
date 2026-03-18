import React, { useState, useEffect } from "react";
import "../Styleour/services.css";
import tickIcon from "../images/check-broken.png";
import bg1 from "../images/signatureFrancine.png";
import bg2 from "../images/signatureJOHN.png";
import bg3 from "../images/signaturePHILIMON.png";
import materials from "../images/material4.png";
import transport from "../images/materials1.png";
import vehicle from "../images/materials2.png";
import customs from "../images/materials3.png";
const Tick = ({ text }) => (
  <div className="tick">
    <img src={tickIcon} alt="tick" className="tick-icon" />
    <p>{text}</p>
  </div>
);

const Services = () => {
  const images = [bg1, bg2, bg3];
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="services-page">

      {/* HEADER CAROUSEL */}
      <div className="header">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`header-bg ${idx === currentIdx ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* HEADER TEXT SECTION */}
      <div className="header-text-section">
        <div className="header-content">
          <p className="tag">WHAT WE OFFER</p>
          <h1 className="main-title">Our Services</h1>
          <h4 className="sub-title">
            Quality building materials for homes, shops, and projects of all sizes
          </h4>
          <p className="desc">
            Quality building materials for homes, shops, and projects of all sizes –
            reliably sourced and ready to supply.
          </p>
        </div>
      </div>

      {/* CARD 1 */}
      <div className="card card-1">
        <div className="card-img">
          <img src={materials} alt="" />
        </div>

        <div className="card-content">
          <p className="tag">SERVICE RANGE 01</p>
          <h2 className="title">Building Materials Supply</h2>

          <p className="desc">
            We provide a wide range of high-quality construction materials for residential, commercial, and industrial projects. Our materials are sourced from trusted manufacturers to ensure

            durability, reliability, and consistent supply
          </p>

          <div className="list-row">
            <div>
              <Tick text="Cement & construction aggregates" />
              <Tick text="Bricks, blocks, & masonry materials" />
              <Tick text="Sand, gravel, & paving materials" />
            </div>

            <div>
              <Tick text="Roofing sheets & structural timber" />
              <Tick text="Paints, tiles, & finishing materials" />
              <Tick text="Electrical & plumbing supplies" />
            </div>
          </div>

          <a href="/quotation" className="btn-dark">
            Request a Quotation &nbsp; →
          </a>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="card card-2 reverse">
        <div className="card-img">
          <img src={transport} alt="" />
        </div>

        <div className="card-content">
          <p className="tag">SERVICE RANGE 02</p>
          <h2 className="title">Transport & Logistics Services</h2>
          <p className="desc">
            Our transport services ensure safe and timely delivery of construction materials and goods
            to project sites. With a reliable fleet and experienced drivers, we support both small and
            large-scale logistics needs.
          </p>
          <div className="list-row">
            <div>
              <Tick text="Transportation of construction materials" />
              <Tick text="Local & regional delivery services" />
              <Tick text="Bulk cargo transport solutions" />
            </div>

            <div>
              <Tick text="Reliable scheduling & tracking" />
              <Tick text="Safe handling of fragile materials" />
              <Tick text="On-time project site delivery" />
            </div>
          </div>

          <a href="/bookings" className="btn-dark">Book Transport &nbsp; →</a>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="card card-3">
        <div className="card-img">
          <img src={vehicle} alt="Motor Vehicle Importation" />
        </div>

        <div className="card-content">
          <p className="tag">SERVICE RANGE 03</p>
          <h2 className="title">Motor Vehicle Importation</h2>

          <p className="desc">
            We assist individuals and businesses in importing motor vehicles from trusted international
            suppliers. Our team manages the entire process to ensure a smooth and hassle-free
            vehicle import experience.
          </p>

          <div className="list-row">
            <div>
              <Tick text="Importation of new & used vehicles" />
              <Tick text="Vehicle sourcing from international markets" />
              <Tick text="Import documentation support" />
            </div>

            <div>
              <Tick text="Compliance with import regulations" />
              <Tick text="Safe & secure shipping arrangements" />
              <Tick text="Delivery coordination after arrival" />
            </div>
          </div>

          <a href="/import-vehicle" className="btn-dark">Start Vehicle Import &nbsp; →</a>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="card card-4 reverse">
        <div className="card-img">
          <img src={customs} alt="Customs Clearing & Forwarding" />
        </div>

        <div className="card-content">
          <p className="tag">SERVICE RANGE 04</p>
          <h2 className="title">Customs Clearing & Forwarding</h2>

          <p className="desc">
            Our customs clearing and forwarding services simplify international trade by handling
            documentation, customs procedures, and logistics. We ensure your cargo moves quickly
            and efficiently through ports and borders.
          </p>

          <div className="list-row">
            <div>
              <Tick text="Import & export customs clearance" />
              <Tick text="Documentation preparation & processing" />
              <Tick text="Freight forwarding coordination" />
            </div>

            <div>
              <Tick text="Port handling & cargo inspection support" />
              <Tick text="Duty & tax processing assistance" />
              <Tick text="Efficient cargo release & delivery" />
            </div>
          </div>

          <a href="/clearing-assistance" className="btn-dark">Get Clearing Assistance &nbsp; →</a>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h1>Ready to Start Your Project ?</h1>
        <p>Contact us today and get a personalised quote.</p>

        <div className="cta-buttons">
          <a href="/quotation" className="btn-orange">Request a Quotation &nbsp; →</a>
          <a href="/contact" className="btn-outline">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Services;