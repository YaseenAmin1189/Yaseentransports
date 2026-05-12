import React from "react";
import { estimData } from "../../data";
import "./Estimation.css";

const Estimation = () => {
  return (
    <>
      <section className="estim" id="estimation">
        <div className="sectionContainer">
          <div className="estim1" style={{ overflowX: "hidden" }}>
            <div
              data-aos="fade-right"
              data-aos-duration={500}
              className="estim1Content"
            >
              <h2 className="sectionSubHeader">WHY PARTNER WITH US</h2>
              <h1 className="sectionHeader">Complete GCC Trucking Solutions</h1>
              <p className="sectionIntro">
                From Dubai to the heart of Saudi Arabia, we provide the heavy-duty 
                transport infrastructure your business needs to grow across borders.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration={500}
              className="estim1Btn"
            >
              {/* Changed "Read More" to something that drives sales */}
              <button className="secBtn">Get a Rate Card</button>
            </div>
          </div>
          <div className="estim2">
            {estimData.map((estm, i) => (
              <div
                data-aos="fade-up"
                data-aos-duration={500}
                className="estim2Box"
                key={i}
              >
                <h1>{estm.sl}</h1>
                <div className="estimIcon">
                  {/* Updated from img to i to match your new Font Awesome data */}
                  <i className={estm.icon}></i>
                </div>
                <h2>{estm.title}</h2>
                <p>{estm.desc}</p>
                {/* <span className="arrowLink">
                  <i className="fa-solid fa-angles-right"></i>
                </span> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Estimation;