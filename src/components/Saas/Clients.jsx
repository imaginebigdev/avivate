import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import clients from "@data/Saas/clients.json";

import "swiper/css";
import "swiper/css/autoplay";

SwiperCore.use([Autoplay]);

const Clients = ({ padding, rtl }) => {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadSwiper(true);
    }, 0);
  }, []);

  return (
    <section
      className={`clients style-5 ${padding ? "section-padding" : "pb-100"}`}
      data-scroll-index="2"
    >
      <div className="section-head text-center mb-40 style-5 pt-50">
        <h2 className="mb-20" style={{ color: "#3a9fe3ff" }}>
          Algunas empresas y organizaciones que ha asesorado
        </h2>
      </div>
      <div className="content">
        <div className="clients-slider5">
          {loadSwiper && (
            <Swiper
              className="swiper-container"
              spaceBetween={0}
              centeredSlides={true}
              slidesPerView={6}
              speed={6000}
              autoplay={{
                delay: 1,
                disableOnInteraction: true,
              }}
              loop={true}
              allowTouchMove={false}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                480: {
                  slidesPerView: 2,
                },
                787: {
                  slidesPerView: 3,
                },
                991: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 6,
                },
              }}
            >
              {clients.row1.map((client, i) => (
                <SwiperSlide key={i}>
                  <a href="#" className="img">
                    <img src={client} alt="" />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        <div className="clients-slider5" dir="rtl">
          {loadSwiper && (
            <Swiper
              className="swiper-container"
              spaceBetween={0}
              centeredSlides={true}
              slidesPerView={6}
              speed={6000}
              autoplay={{
                delay: 1,
                disableOnInteraction: true,
              }}
              loop={true}
              allowTouchMove={false}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                480: {
                  slidesPerView: 2,
                },
                787: {
                  slidesPerView: 3,
                },
                991: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 6,
                },
              }}
            >
              {clients.row2.map((client, i) => (
                <SwiperSlide key={i}>
                  <a href="" className="img">
                    <img src={client} alt="" />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default Clients;
