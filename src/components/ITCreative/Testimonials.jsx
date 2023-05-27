import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Keyboard } from "swiper";
import testimonials from "@data/ITCreative/testimonials.json";

SwiperCore.use([Autoplay, Keyboard]);

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/keyboard";

const Testimonials = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    });
  }, []);

  return (
    <section className="testimonials style-7 section-padding">
      <div className="container">
        <div className="testimonials-slider7 position-relative overflow-hidden">
          {load && (
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              speed={1000}
              pagination={false}
              navigation={false}
              mousewheel={false}
              keyboard={true}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="content">
                    <div className="row justify-content-center">
                      <div className="col-lg-10">
                        <div className="testi-card">
                          <div className="text">“{testimonial.text}”</div>
                          <div className="author">
                            <div className="img icon-60 rounded-circle overflow-hidden img-cover me-3 flex-shrink-0">
                              <img src={testimonial.image} alt="" />
                            </div>
                            <div className="inf">
                              {/*  <p> Head Of Idea </p> */}
                              <h6>{testimonial.author}</h6>
                            </div>
                          </div>
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
    </section>
  );
};

export default Testimonials;
