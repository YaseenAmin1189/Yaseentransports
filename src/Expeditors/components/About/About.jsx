import React from "react";
import aboutBanner from "../../assets/images/sajawal112.png";
import aboutShape1 from "../../assets/images/about-shape-1.png";
import aboutShape2 from "../../assets/images/about-shape-2.png";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="sectionContainer" style={{ overflowX: "hidden" }}>
          <div
            className="aboutImages"
            data-aos="fade-right"
            data-aos-duration={500}
          >
            <img src={aboutShape2} alt="" className="aboutShape2" />
            {/* <img src={aboutShape1} alt="" className="aboutShape1" /> */}
            <img src={aboutBanner} alt="Our Responsible staff picture " className="aboutBanner" />
          </div>

          <div
            className="aboutContent"
            data-aos="fade-left"
            data-aos-duration={500}
          >
            <h2 className="sectionSubHeader">WHY CHOOSE US</h2>

            <h1 className="sectionHeader">
              Trusted UAE To Saudi Arabia Transport & Logistics Company
            </h1>

            <p className="sectionIntro">
              Yaseen Amin Transport L.L.C provides reliable cargo and logistics
              services across the UAE, Saudi Arabia, and GCC countries. We are
              committed to safe transportation, timely delivery, and
              professional logistics solutions for businesses of all sizes.
            </p>

            <ul>
              <li>
                <i className="fa-solid fa-caret-right"></i>
                <span>
                  Professional road freight services between UAE and Saudi
                  Arabia.
                </span>
              </li>

              <li>
                <i className="fa-solid fa-caret-right"></i>
                <span>
                  Safe and secure transportation for commercial and industrial
                  cargo.
                </span>
              </li>

              <li>
                <i className="fa-solid fa-caret-right"></i>
                <span>
                  Experienced logistics team focused on timely deliveries.
                </span>
              </li>

              <li>
                <i className="fa-solid fa-caret-right"></i>
                <span>
                  Reliable cross-border transport solutions across GCC
                  countries.
                </span>
              </li>

              <li>
                <i className="fa-solid fa-caret-right"></i>
                <span>
                  Affordable pricing with quality transportation services.
                </span>
              </li>

              <li>
                <i className="fa-solid fa-caret-right"></i>
                <span>
                  Dedicated customer support for smooth shipment handling.
                </span>
              </li>
            </ul>

           <a href="tel:+971 56 3070694">
             <button className="secBtn">Feel Free to Contact</button>
             </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;