import React from "react";
import { serviceData } from "../../data";
import "./Services.css";

const Services = () => {
  return (
    <section className="service" id="service">
      <div className="sectionContainer">
        <div data-aos="fade-up" data-aos-duration={500} className="serviceUpperPart">
          <h2 className="sectionSubHeader">OUR CORE SERVICES</h2>
          <h1 className="sectionHeader">Trusted Trucking & Road Freight</h1>
          <p className="sectionIntro">
            Yaseen Amin Transport L.L.C specializes in moving your goods across the GCC 
            with a modern fleet of trucks and expert drivers.
          </p>
        </div>

        <div className="serviceContainer">
          {serviceData.map((srv, i) => (
            <div className="serviceBox" key={i} data-aos="zoom-in" data-aos-duration={500}>
              <div className="serviceIconBox">
                <i className={srv.icon}></i>
              </div>
              <h2>
                <span>{srv.sl}</span>
                <span>{srv.title}</span>
              </h2>
              <p>{srv.desc}</p>
              <a href="#contact" className="viewDetail">Get a Quote</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;