import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    pickup: "",
    destination: "",
    details: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    
    // Your primary WhatsApp number from the card
    const myNumber = "971563070694"; 

    const message = `*New Transport Inquiry*%0A` +
      `--------------------------%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Company:* ${formData.company}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*From:* ${formData.pickup}%0A` +
      `*To:* ${formData.destination}%0A` +
      `*Cargo Details:* ${formData.details}`;

    window.open(`https://wa.me/${myNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="contact" id="contact">
      <div className="sectionContainer">
        <div className="contactUpper" data-aos="fade-up">
          <h2 className="sectionSubHeader">CONTACT US</h2>
          <h1 className="sectionHeader">Get in Touch with Yaseen Amin Transport</h1>
          <p className="sectionIntro">
            Contact us for reliable road freight and logistics services from UAE 
            to Saudi Arabia and across the GCC.
          </p>
        </div>

        <div className="contactGrid">
          {/* ALL BUSINESS DETAILS FROM YOUR CARD */}
          <div className="contactInfo" data-aos="fade-right">
            <div className="infoBox">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h3>Our Office</h3>
                <p>Al Qouz First, Office No F-48, Dubai, U.A.E</p>
              </div>
            </div>

            <div className="infoBox">
              <i className="fa-solid fa-phone-volume"></i>
              <div>
                <h3>Call / WhatsApp</h3>
                <p>+971 56 307 0694</p>
                <p>+971 58 684 2344</p>
              </div>
            </div>

            <div className="infoBox">
              <i className="fa-solid fa-envelope-open-text"></i>
              <div>
                <h3>Email Address</h3>
                <p>yaseenbhutta71@gmail.com</p>
              </div>
            </div>

            <div className="infoBox">
              <i className="fa-solid fa-clock"></i>
              <div>
                <h3>Business Hours</h3>
                <p>Mon - Sat: 08:00 AM - 08:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* THE WHATSAPP FORM */}
          <div className="contactForm" data-aos="fade-left">
            <form onSubmit={handleWhatsApp}>
              <div className="formGroup">
                <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
                <input type="text" name="company" placeholder="Company Name" onChange={handleChange} />
              </div>
              <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
              
              <div className="formGroup">
                <input type="text" name="pickup" placeholder="Pickup (e.g. Dubai)" onChange={handleChange} required />
                <input type="text" name="destination" placeholder="Destination (e.g. Riyadh)" onChange={handleChange} required />
              </div>

              <textarea name="details" placeholder="Cargo Details (Type of goods, weight, number of trucks...)" rows="5" onChange={handleChange}></textarea>
              
              <button type="submit" className="secBtn whatsappBtn">
                <i className="fa-brands fa-whatsapp"></i> Send Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;