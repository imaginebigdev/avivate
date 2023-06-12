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
                <h5>Ampliamos la oportunidad para muchos mas jovenes</h5>
                <div className="top-title"></div>
                <h2>
                  ¡Nueva <span>Fecha!</span>
                </h2>
              </div>
              <ul>
                <li>
                  <h4>¡Ahora son 3 premios!</h4>
                </li>
                <li className={`d-flex align-items-center`}>
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">
                    Primer premio: Capital semilla{" "}
                    <span style={{ color: "rgb(231, 63, 127)" }}>$50.000</span>
                  </h6>
                </li>
                <li className={`d-flex align-items-center`}>
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">
                    Segundo premio: Capital semilla{" "}
                    <span style={{ color: "rgb(231, 63, 127)" }}>$30.000</span>
                  </h6>
                </li>
                <li className={`d-flex align-items-center`}>
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">
                    Tercer premio: Capital semilla{" "}
                    <span style={{ color: "rgb(231, 63, 127)" }}>$20.000</span>
                  </h6>
                </li>
                <li>
                  <h4>¿Como participar?</h4>
                </li>
                <li className={`d-flex align-items-center`}>
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">
                    Inscribiéndote{" "}
                    <Link to="inicio" smooth="true" duration={100}>
                      <span
                        style={{
                          color: "#3a9fe3ff",
                          cursor: "pointer",
                        }}
                      >
                        www.avivate.ar
                      </span>
                    </Link>
                  </h6>
                </li>
                <li className={`d-flex align-items-center`}>
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">
                    Subiendo contenido de AVIVATE.ar a tus redes
                  </h6>
                </li>
                <li className={`d-flex align-items-center`}>
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">ARROBÁNDONOS</h6>
                  <ul>
                    <a
                      href="https://www.snapchat.com/add/avivateok"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-40 sm-butn btn border rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <i className="fab fa-snapchat"></i>
                    </a>
                    <a
                      href="https://www.tiktok.com/@avivate.ar"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-40 sm-butn btn border rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <i className="fab fa-tiktok"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/avivate.ar/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-40 sm-butn btn border rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </ul>
                </li>
                <li>
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">
                    USANDO EL HASH{" "}
                    <span style={{ color: "#3a9fe3ff" }}>#AVIVATE </span>
                  </h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="/assets/img/video03.png" alt="" />
              <a
                href="https://www.youtube.com/shorts/IIGXuCtv-ig"
                className="play_btn"
                onClick={openVideo}
              >
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="IIGXuCtv-ig"
          onClose={() => setOpen(false)}
        />
      )}
      <div className="text-center mt-50">
        <p>
          REQUISITO: Estar presente en el programa de la mañana (10-12Hs) el
          sorteo se hace exclusivamente para los presentes en el AVIVATE. <br />
          AVIVATE Padres / Madres / Familiares : Sabado 8 de JULIO 10 a 12hs.{" "}
          <br />
          SORTEO de 20 Becas en Programación y Desarrollo en Full Stack. <br />
        </p>
      </div>
    </section>
  );
};

export default ChooseUs2;
