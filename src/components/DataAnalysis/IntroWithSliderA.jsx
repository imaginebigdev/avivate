import React from "react";
/* import Link from "next/link"; */
import introData from "../../data/App/introA.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";
import fadeWhenScroll from "../../common/fadeWhenScroll";
import { Link } from "react-scroll";
import Navbar2A from "../Navbars/Navbar2A";

SwiperCore.use([Navigation, Pagination, Parallax]);

const IntroWithSliderA = ({ sliderRef }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
    setTimeout(() => {
      removeSlashFromPagination();
      setLoad(false);
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <header ref={sliderRef} id="arch-slider" className="slider arch-slider">
      <Navbar2A />
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={1000}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              type: "fraction",
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                }

                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {introData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div
                  className="bg-img valign"
                  style={{
                    backgroundImage: `url(${
                      isMobile ? slide.mobileimage : slide.image
                    })`,
                  }}
                  data-overlay-dark="2"
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
        <div className="setone setwo">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-right"></i>
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div ref={paginationRef} className="swiper-pagination top botm"></div>

        <div className="social-icon">
          <a
            href="https://www.snapchat.com/add/avivateok"
            target="_blank"
            rel="noreferrer"
            className="icon-40 sm-butn btn border rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center"
          >
            <i className="fab fa-snapchat"></i>
          </a>
          <a
            href="https://www.youtube.com/@AVIVATE"
            target="_blank"
            rel="noreferrer"
            className="icon-40 sm-butn btn border rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.instagram.com/avivate.ar/"
            target="_blank"
            rel="noreferrer"
            className="icon-40 sm-butn btn border rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.tiktok.com/@avivate.ar"
            target="_blank"
            rel="noreferrer"
            className="icon-40 sm-butn btn border rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center"
          >
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default IntroWithSliderA;
