import React from "react";
import nws from "../../assets/images/newsletter-banner.png"; 
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <>
      <div className="newsl" id="newsl">
        <div className="sectionContainer">
          <div className="newslContainer staticBanner">
            {/* Top decorative icon or image */}
            <div
              className="newslImage"
              data-aos="fade-down"
              data-aos-duration={800}
            >
              <img src={nws} alt="Yaseen Amin Transport" />
            </div>

            {/* A bold, beautiful statement about your company */}
            <h1 data-aos="fade-up" data-aos-duration={800}>
              Leading the Way in <br /> 
              <span>GCC Road Logistics</span>
            </h1>

            {/* Decorative divider instead of an input box */}
            <div className="decorativeDivider" data-aos="zoom-in">
                <span className="line"></span>
                <i className="fa-solid fa-truck"></i>
                <span className="line"></span>
            </div>

            {/* Static badges for a "Beautiful" professional look */}
            <div className="staticBadges" data-aos="fade-up" data-aos-duration={1000}>
                <div className="badgeItem">
                    <i className="fa-solid fa-shield-halved"></i>
                    <p>100% Secure</p>
                </div>
                <div className="badgeItem">
                    <i className="fa-solid fa-clock"></i>
                    <p>On-Time Delivery</p>
                </div>
                <div className="badgeItem">
                    <i className="fa-solid fa-earth-americas"></i>
                    <p>GCC Wide Network</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;