import React from "react";
import hshape from "../../assets/images/hero-shape.png";
import "./Hero.css";
import { Link } from "@chakra-ui/react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="heroShape heroShape1">
          <img src={hshape} alt="" />
        </div>
        <div data-aos="fade-up" data-aos-duration={500} className="heroContent">
          <h1 className="hl">to every</h1>
          <h1 className="dir">direction</h1>

          <p>
            we are your trusted partner in seamless, reliable, <br /> and
            eco-friendly transportation solutions....
          </p>

         <a href="#service"><button >View Services</button> </a>
        </div>

        <div className="heroShape heroShape2">
          <img src={hshape} alt="" />
        </div>
      </section>
    </>
  );
};

export default Hero;
