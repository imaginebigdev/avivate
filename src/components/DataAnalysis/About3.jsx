import React from "react";

const AboutCordoba = () => {
  return (
    <section className="about style-8 section-padding bg-white" id="nosotros">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="info">
              <div
                className="section-head style-8 mb-40"
                style={{ textAlign: "center" }}
              >
                {/*   <h6 className="wow fadeInUp"> about our service </h6> */}
                <h1 className="wow fadeInUp" style={{ color: "#000" }}>
                  {" "}
                  + de 50 <br /> EVENTOS
                </h1>
                <img src="/assets/img/logo_ll.png" alt="" />
                <div className="pt-20">
                  <h4>en ciudades, </h4>
                  <h4>provincias y países de</h4>
                  <h4>América</h4>
                </div>
                <h2 className="pt-20" style={{ color: "#3a9fe3ff" }}>
                  Transformación y Alfabetización Digital{" "}
                  {/* <span style={{ color: "#e73f7fff" }}>Z</span> */}
                </h2>

                <div className="accordion pt-50" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button $`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse`}
                        aria-expanded="true"
                        aria-controls={`collapse`}
                        style={{
                          borderColor: "#e73f7fff",
                          backgroundColor: "#e7f1ff",
                          textAlign: "center",
                        }}
                      >
                        Próximas Fechas
                      </button>
                    </h2>
                    <div
                      id={`collapse`}
                      className={`accordion-collapse collapse `}
                      aria-labelledby={`heading`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <li>
                          <a
                            className="butn bg-orange2 border-0 rounded-pill hover-shadow flex-shrink-0 mt-50"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdWi6jIM3L4lVt4BGItQ7NHJswaSbjc6UftJufCZirPMBmV4A/viewform"
                          >
                            <span style={{ color: "#000" }}>
                              {" "}
                              Incripción Avivate General Roca, Rio Negro{" "}
                              <i className="fal fa-long-arrow-right ms-2"></i>{" "}
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="butn bg-orange2 border-0 rounded-pill hover-shadow flex-shrink-0 mt-50"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSf-X6JlDWkk_A0ebVtFZ5m0qCFK14AX7YslDAA_GoTI3Tw2_g/viewform"
                          >
                            <span style={{ color: "#000" }}>
                              {" "}
                              Incripción Avivate Catamarca{" "}
                              <i className="fal fa-long-arrow-right ms-2"></i>{" "}
                            </span>
                          </a>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img mb-4 mb-lg-0 wow fadeIn pb-30">
              <img src="/assets/img/about/america.png" alt="" />
              <div style={{ textAlign: "center" }}>
                <h1>
                  <span style={{ color: "#e73f7fff" }}>+ de un millón</span>
                </h1>
                <h3>de Jóvenes y Adultos</h3>
                <h4>
                  de habla hispana en América del Norte, Central y del Sur.{" "}
                  {/* <span style={{ color: "#e73f7fff", letterSpacing: "1px" }}>
                    CENTENNIALS
                  </span> */}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCordoba;
