import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import features2 from "@data/DataAnalysis/features2";

const ChooseUs = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <section className="choose-us style-7 section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="info">
              <div className="section-head style-4 mb-40">
                <div className="top-title mb-10">
                  {/* <img src="/assets/img/line_l.png" alt="" /> */}
                  <h5> ¿ Por qué AVIVATE ? </h5>
                  {/*  <img src="/assets/img/line_l.png" alt="" /> */}
                </div>
                <h2>
                  <span>A</span>prender a <span>VI</span>vir con <br />{" "}
                  <span>VA</span>
                  lores <span>TE</span>
                  cnológicos
                </h2>

                <h3 style={{ textAlign: "center" }}></h3>
              </div>
              <ul>
                {features2.map((feature, index) => (
                  <li
                    className={`d-flex align-items-center ${
                      feature.active ? "" : "op-4"
                    }`}
                    key={index}
                  >
                    <i className="bi bi-dot fs-2 me-2 lh-1 color-blue4"></i>
                    <h6 className="fw-bold">{feature.title}</h6>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="/assets/img/video01.png" alt="" />
              <a
                href="https://www.youtube.com/watch?v=71kkSWyCY3w"
                className="play_btn"
                onClick={openVideo}
              >
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        src="/assets/img/about/about_s4_wave.png"
        alt=""
        className="top-wave"
      />
      <img
        src="/assets/img/about/about_s4_wave.png"
        alt=""
        className="bottom-wave"
      />
      <img
        src="/assets/img/choose_us/choose7_circe.png"
        alt=""
        className="choose-circle rotate-center"
      /> */}
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="71kkSWyCY3w"
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
};

export default ChooseUs;
