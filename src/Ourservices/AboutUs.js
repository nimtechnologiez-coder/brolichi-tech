import React from "react";
import "../Styleour/AboutUs.css";

const AboutPage = () => {
  return (
    <div className="about-wrapper">

      {/* ================= ABOUT SECTION ================= */}
      <section className="about-section">

        <p className="about-tag">OUR STORY</p>

        <h1 className="about-title">About Us</h1>

        <p className="about-subtitle">
          Over a decade of supplying quality building materials with integrity,
          reliability, and care.
        </p>

        {/* CARD */}
        <div className="about-card">

          {/* IMAGE */}
          <div className="about-card-image">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="about"
            />
          </div>

          {/* CONTENT */}
          <div className="about-card-content">

            <div className="about-heritage">
              <div className="about-line"></div>
              <p>OUR HERITAGE</p>
            </div>

            <h2 className="about-card-title">
              A Journey of Vision and Resilience
            </h2>

            <p className="about-text">
             Founded on the principles of integrity and forward-thinking, our journey began with a 
small team of visionaries in 1995. What started as a niche consultancy has evolved into 
a global powerhouse, defining industry standards and empowering businesses to 
reach unprecedented heights.
            </p>

            <p className="about-text">
             We believe that true leadership is not just about staying ahead of the curve; it’s about 
redefining it. Our commitment to excellence is reflected in every partnership we forge 
and every challenge we overcome.
            </p>

            {/* STATS */}
            <div className="about-stats">
              <div>
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>

              <div className="about-divider">
                <h3>450+</h3>
                <p>Global Partners</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STRATEGIC ================= */}
      <section className="strategic-section">

        <h1 className="strategic-title">Strategic Foresight</h1>

        <p className="strategic-subtitle">
          Driving progress through excellence and unwavering dedication.
        </p>

        <div className="strategic-cards">

          {/* MISSION */}
          <div className="strategic-card">
            <div className="icon-box">🎯</div>
            <h2>Our Mission</h2>
            <p>
              To provide premium corporate services that foster 
growth and sustainable success for our global partners 
through innovation and integrity.
            </p>
          </div>

          {/* VISION */}
          <div className="strategic-card">
            <div className="icon-box vision">👁️</div>
            <h2>Our Vision</h2>
            <p>
             To be the world's most trusted partner in professional 
excellence, setting the gold standard for corporate 
integrity and strategic intelligence.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FOUNDATIONS ================= */}
     <section className="foundation-section">

  <div className="foundation-row">
    <div>
      <p className="foundation-tag">FOUNDATIONS</p>
      <h2 className="foundation-title">
        The values that define our character.
      </h2>
    </div>

    <div className="foundation-text">
      <p>
        A framework of principles that guide every decision and
        interaction within our organization.
      </p>
    </div>
  </div>

  {/* NEW VALUES SECTION */}
  <div className="foundation-cards">

    <div className="foundation-card">
      <h1>01</h1>
      <h3>Uncompromising Integrity</h3>
      <p>
        We adhere to the highest ethical standards, ensuring transparency
        and honesty in all our dealings.
      </p>
    </div>

    <div className="foundation-card">
      <h1>02</h1>
      <h3>Radical Innovation</h3>
      <p>
        We embrace change and foster a culture where creative thinking
        leads to groundbreaking solutions.
      </p>
    </div>

    <div className="foundation-card">
      <h1>03</h1>
      <h3>Collective Excellence</h3>
      <p>
        Our success is built on the diverse talents of our team and the
        synergy of our collaborative efforts.
      </p>
    </div>

  </div>

</section>

<section className="milestone-section">
  <h2 className="milestone-title">Key Milestones</h2>

  <div className="timeline">

    <div className="timeline-line"></div>

    <div className="timeline-item active">
      <div className="dot"></div>
      <h3 className="year active">1995</h3>
      <h4>Genesis</h4>
      <p>Founded in Zurich with a mission to revolutionize financial advisory.</p>
    </div>

    <div className="timeline-item">
      <div className="dot"></div>
      <h3 className="year">2008</h3>
      <h4>Global Expansion</h4>
      <p>Established headquarters in London and Singapore.</p>
    </div>

    <div className="timeline-item">
      <div className="dot"></div>
      <h3 className="year">2015</h3>
      <h4>Digital Transformation</h4>
      <p>Launched AI-driven platform for analysis.</p>
    </div>

    <div className="timeline-item">
      <div className="dot"></div>
      <h3 className="year">2023</h3>
      <h4>Sustainability Pledge</h4>
      <p>Achieved Carbon Neutral status globally.</p>
    </div>

  </div>
</section>

<section className="leadership-section">

  <h1 className="lead-title">Our Leadership</h1>

  <p className="lead-subtitle">
    Our executive team combines decades of experience across diverse industries to steer our vision into the future.
  </p>

  <div className="lead-row">

    <div className="lead-card">
      <img src="https://via.placeholder.com/300" alt="" />
      <h3>Alexander Sterling</h3>
      <p className="role">CHIEF EXECUTIVE OFFICER</p>
      <div className="icons">
        <span>🔗</span>
        <span>✉️</span>
      </div>
    </div>

    <div className="lead-card">
      <img src="https://via.placeholder.com/300" alt="" />
      <h3>Sarah Jenkins</h3>
      <p className="role">CHIEF OPERATIONS OFFICER</p>
      <div className="icons">
        <span>🔗</span>
        <span>✉️</span>
      </div>
    </div>

    <div className="lead-card">
      <img src="https://via.placeholder.com/300" alt="" />
      <h3>Marcus Thorne</h3>
      <p className="role">HEAD OF INNOVATION</p>
      <div className="icons">
        <span>🔗</span>
        <span>✉️</span>
      </div>
    </div>

    <div className="lead-card">
      <img src="https://imresizer.com/_next/image?url=%2Fimages%2Fsample-photo-1.jpg&w=1080&q=75" alt="" />
      <h3>Elena Vance</h3>
      <p className="role">CHIEF STRATEGY OFFICER</p>
      <div className="icons">
        <span>🔗</span>
        <span>✉️</span>
      </div>
    </div>

  </div>

</section>
    </div>
  );
};

export default AboutPage;