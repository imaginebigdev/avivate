import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Parallax } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Pagination, Parallax]);

const TestimonialsA = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, [load]);
  const paginationRef = React.useRef(null);
  return (
    <section
      className="app-testim section-padding"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container" style={{ backgroundColor: "#fff" }}>
        <div className="row">
          <div className="col-12">
            <div className="section-head style-8 mb-40">
              <h3 className="wow fadeInUp"> Nestros valores </h3>
            </div>
            <div className="swiper-container">
              {load ? (
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  speed={1000}
                  loop={true}
                  pagination={{
                    clickable: true,
                    el: paginationRef.current,
                  }}
                  className="swiper-wrapper"
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    767: {
                      slidesPerView: 2,
                      centeredSlides: false,
                    },
                    991: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img mb-50">
                        <img src="/assets/img/reco.png" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img mb-50">
                        <img src="/assets/img/alfa.png" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="icon mb-50">
                        <img src="/assets/img/seg.png" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="icon mb-50">
                        <img src="/assets/img/dig.png" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              ) : (
                ""
              )}
              <br style={{ margin: "10" }}></br>
              <div
                ref={paginationRef}
                className="swiper-pagination"
                /* style={{ backgroundColor: "#bce3fdff" }} */
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsA;
