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
                <a
                  className="butn bg-orange2 border-0 rounded-pill hover-shadow flex-shrink-0 mt-50"
                  download
                  href="/assets/files/DOSSIER-AVIVATE 2023.pdf"
                >
                  <span style={{ color: "#000" }}>
                    {" "}
                    Descargar PDF{" "}
                    <i className="fal fa-long-arrow-right ms-2"></i>{" "}
                  </span>
                </a>
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
                <h3>Jovenes y Adultos</h3>
                <h4>
                  habla hispana en América Norte, Central y Sur.{" "}
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
