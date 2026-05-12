import React from "react";
import { projectData } from "../../data";
import "./Project.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Projects = () => {
  return (
    <>
      <section className="projects" id="projects">
        <div className="sectionContainer">
          <div
            className="projectInit"
            data-aos="fade-up"
            data-aos-duration={500}
          >
            <h2 className="sectionSubHeader">PROJECTS</h2>
            <h1 className="sectionHeader">Featured Projects</h1>
            <p className="sectionIntro">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the standard dummy text ever since the when an printer
              took.
            </p>
          </div>
          <Swiper
            data-aos="zoom-in"
            data-aos-duration={500}
            loop={true}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              650: {
                slidesPerView: 2,
              },

              900: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            className="projectContainer mySwiper"
          >
            {projectData.map((prz, i) => (
              <SwiperSlide className="projectBox" key={i}>
                <div className="fullScreen">
                  <i className="fa-solid fa-maximize"></i>
                </div>
                <img src={prz.pic} alt="" />
                <div className="projectContent">
                  <p className="cat">{prz.cat}</p>
                  <h3 className="title">{prz.title}</h3>
                  <a href="#">Read More</a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Projects;
