import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Keyboard, Navigation } from "swiper";
import projects from "@data/DataAnalysis/projectsA.json";

SwiperCore.use([Autoplay, Keyboard, Navigation]);

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/navigation";

const Ejes = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    });
  }, []);

  return (
    <section className="projects style-8 section-padding" id="ejes">
      <div className="container">
        <div className="section-head style-8 mb-80 wow fadeInUp">
          <h3 style={{ color: "#3a9fe3" }}>Ejes superadores</h3>
          <div className="arrows">
            <div className="swiper-button-next">
              <i className="fal fa-long-arrow-right"></i>
            </div>
            <div className="swiper-button-prev">
              <i className="fal fa-long-arrow-left"></i>
            </div>
          </div>
        </div>
        <div className="content wow fadeIn">
          <div className="projects-slider8">
            {load && (
              <Swiper
                className="swiper-container"
                slidesPerView={1}
                spaceBetween={0}
                speed={1200}
                pagination={false}
                navigation={{
                  nextEl: ".projects.style-8 .swiper-button-next",
                  prevEl: ".projects.style-8 .swiper-button-prev",
                }}
                mousewheel={false}
                keyboard={true}
                autoplay={{
                  delay: 4000,
                }}
                loop={false}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="project-card">
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="info">
                            <h4
                              className="title"
                              style={{ color: "#e73f7fff" }}
                            >
                              {" "}
                              {project.title}{" "}
                            </h4>
                            <p> {project.text} </p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="img">
                            <img
                              src={project.image}
                              alt=""
                              className="main-img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ejes;