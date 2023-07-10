import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import features2 from "@data/DataAnalysis/features2";
import { Link } from "react-scroll";

const ChooseUs2 = () => {
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
              <div className="section-head style-4 mb-20">
                <span>CURSO FULL-STACK</span>
                <div className="top-title"></div>
                <h2>
                  BECA <span>DIGITAL WORK</span>
                </h2>
              </div>
              <h5 className="text-justify fz-20">
                Aprende desarrollo web completo en 6 meses con el stack{" "}
                <span style={{ color: "#3a9fe3ff" }}>M.E.R.N.</span>
                <div className="nav-side pt-10 text-center">
                  <img src="/assets/img/digitalwork.png" alt="" />
                </div>
              </h5>
            </div>
            <div className="nav-side pt-20 text-center pb-40">
              <a
                className="butn bg-orange2 border-0 rounded-pill hover-shadow flex-shrink-0"
                href="/Fullstack"
              >
                <span style={{ color: "#000" }}>
                  {" "}
                  Beca Digital Work{" "}
                  <i className="fal fa-long-arrow-right ms-2"></i>{" "}
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="/assets/img/fullstack2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs2;
