import Navbar from "@components/Navbars/DataAnalysis";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  return (
    <header className="style-8 bg-gray2" id="inicio">
      <Navbar />
      <div className="container">
        <div className="content section-padding">
          <div className="row align-items-center gx-0">
            <div className="col-lg-6">
              <div className="info">
                <h1 className="wow fadeInUp">
                  Sábado 10 de junio <br />
                  <small>Polideportivo - Villa Del Prado</small>
                </h1>
                <div className="form wow fadeInUp">
                  <a
                    className="butn bg-orange2 border-0 rounded-pill hover-shadow flex-shrink-0"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScsScv7qBxL7FiWu7kauc-8CGw_vmplLgWqFVkoXz-TYxxaZQ/viewform"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span style={{ color: "#000" }}>
                      Inscribite aqui
                      <i className="fal fa-long-arrow-right ms-2"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img">
                <a
                  href="https://www.youtube.com/watch?v=ydlGbK4yQzc"
                  className="play_btn"
                  onClick={openVideo}
                >
                  <img src="/assets/img/about2.png" alt="img" />
                </a>
              </div>
              {typeof window !== "undefined" && (
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="ydlGbK4yQzc"
                  onClose={() => setOpen(false)}
                />
              )}
            </div>
            {/*  <div className="col-lg-6">
              <div className="img mt-4 mt-lg-0 wow fadeIn">
                <img src="/assets/img/about/about1.png" alt="" />
              </div> 
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
