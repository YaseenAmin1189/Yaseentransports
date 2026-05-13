import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="sectionContainer">
        <div className="footerGrid">
          
          {/* Brand Column */}
          <div className="footerBox">
            <h2 className="footerLogo">Yaseen Amin <span>Transport LLC</span></h2>
            <p className="footerDesc">
              Professional road freight and logistics solutions connecting the UAE 
              to Saudi Arabia, Oman, and the entire GCC region. Safe, fast, and reliable.
            </p>
            <div className="socialIcons">
              {/* Location icon removed from here */}
              <a href="https://wa.me/971563070694" target="_blank" rel="noreferrer" title="WhatsApp Us">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="mailto:yaseenbhutta71@gmail.com" title="Email Us">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footerBox">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">Our Company</a></li>
              <li><a href="#service">Trucking Services</a></li>
              <li><a href="#estimation">Why Choose Us</a></li>
              <li><a href="#contact">Get a Quote</a></li>
            </ul>
          </div>

          {/* Regional Services Column */}
          <div className="footerBox">
            <h3>Main Routes</h3>
            <ul>
              <li><a href="#service">Dubai to Riyadh</a></li>
              <li><a href="#service">UAE to Jeddah</a></li>
              <li><a href="#service">Dubai to Muscat</a></li>
              <li><a href="#service">GCC Cross Border</a></li>
              <li><a href="#service">Heavy Equipment Move</a></li>
            </ul>
          </div>

          {/* Contact Support Column */}
          <div className="footerBox">
            <h3>Contact Support</h3>
            <div className="footerContact">
               <p><i className="fa-solid fa-phone"></i> +971 56 307 0694</p>
               <p><i className="fa-solid fa-phone"></i> +971 58 684 2344</p>
               <p><i className="fa-solid fa-envelope"></i> yaseenbhutta71@gmail.com</p>
               <p className="address">
                 <i className="fa-solid fa-map-pin"></i> 
                 Al Qouz First, Office No F-48, Dubai, U.A.E
               </p>
            </div>
          </div>

        </div>

        <div className="footerBottom">
          <p>© {new Date().getFullYear()} Yaseen Amin Transport LLC. All Rights Reserved.</p>
          <p className="credit">
  Developed with excellence by **Abdullah Naeem** for the Logistics Industry.
</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;