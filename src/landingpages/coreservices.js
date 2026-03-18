import React from "react";
import "../style/coreservices.css";

import s1 from "../images/img1.png";
import s2 from "../images/img2.png";
import s3 from "../images/img3.png";
import s4 from "../images/img4.png";
import iconImg from "../images/packageicon.png";

const servicesData = [
  { img: s1, title: "Building Materials Supply" },
  { img: s2, title: "Transport and Logistics Services" },
  { img: s3, title: "Motor Vehicle Importation" },
  { img: s4, title: "Customs Clearing & Forwarding" },
];

const Coreservices = () => {
  return (
    <section className="cs-services">
      <p className="cs-tages">WHO WE ARE</p>

      <h2 className="cs-title">Our Core Services</h2>

      <p className="cs-subtitle">
        We provide a wide range of high-quality construction materials for
        residential, commercial, and industrial projects.
      </p>

      <div className="cs-cards">
        {servicesData.map((item, index) => (
          <div className="cs-card" key={index}>
            <div className="cs-card-img">
              <img src={item.img} alt="" />
              <div className="cs-icon">
                <img src={iconImg} alt="icon" />
              </div>
            </div>

            <div className="cs-card-content">
              <h3>{item.title}</h3>
              <p>
                We provide a wide range of high-quality construction materials
                for residential, commercial, and industrial projects.
              </p>

              <span className="cs-learn">Learn more →</span>
            </div>
          </div>
        ))}
      </div>

      <div className="cs-view-more">
        <button>View more →</button>
      </div>
    </section>
  );
};

export default Coreservices;