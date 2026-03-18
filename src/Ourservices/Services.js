import React from "react";
import "../Styleour/services.css";
import tickIcon from "../images/check-broken.png";
const Tick = ({ text }) => (
  <p
    className="tick"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }}
  >
    <img
      src={tickIcon}
      alt="tick"
      style={{
        width: "18px",
        height: "18px",
        objectFit: "contain"
      }}
    />
    {text}
  </p>
);

const Services = () => {
  return (
    <div className="services-container">

      {/* HEADER */}
      <div className="header">
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
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e" alt="" />
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

          <button className="btn-dark">Request a Quotation →</button>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="card card-2 reverse">
        <div className="card-img">
          <img src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd" alt="" />
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

          <button className="btn-dark">Book Transport →</button>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="card card-3">
        <div className="card-img">
          <img src="https://images.unsplash.com/photo-158" alt="" />
        </div>

        <div className="card-content">
          <p className="tag">SERVICE RANGE 03</p>
          <h2 className="title">Customs Clearing & Forwarding</h2>

          <p className="desc">
           We assist individuals and businesses in importing motor vehicles from trusted international 
suppliers. Our team manages the entire process to ensure a smooth and hassle-free 
vehicle import experience.
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

          <button className="btn-dark">Start Vehicle Import →</button>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="card card-4 reverse">
        <div className="card-img">
          <img src="https://images.unsplash.com/photo-1549924231-f129b911e442" alt="" />
        </div>

        <div className="card-content">
          <p className="tag">SERVICE RANGE 04</p>
          <h2 className="title">Motor Vehicle Importation</h2>

          <p className="desc">
            Our customs clearing and forwarding services simplify international trade by handling 
documentation, customs procedures, and logistics. We ensure your cargo moves quickly 
and efficiently through ports and borders.
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

          <button className="btn-dark">Get Clearing Assistance →</button>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h1>Ready to Start Your Project ?</h1>
        <p>Contact us today and get a personalised quote.</p>

        <div className="cta-buttons">
          <button className="btn-orange">Request a Quotation →</button>
          <button className="btn-outline">Contact Us</button>
        </div>
      </div>

    </div>
  );
};

export default Services;