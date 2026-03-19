import React from "react";
import "../style/readyland.css";

const CTASection = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <h2 className="cta-title">Ready to Start Your Project ?</h2>

        <p className="cta-subtitle">
          Contact Brolichi Creation Enterprises today. Get a personalised<br></br>
          quote for your build.
        </p>

        <div className="cta-buttons">
          <button className="cta-btn primary">
            Request a Quotation →
          </button>

          <button className="cta-btn secondary">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;