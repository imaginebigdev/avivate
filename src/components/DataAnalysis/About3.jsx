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
                  26 <br /> EVENTOS
                </h1>
                <img src="/assets/img/logo_ll.png" alt="" />
                <div className="pt-20">
                  <h4>26 ciudades</h4>
                  <h4>Cabeceras</h4>
                  <h4>Departamentales</h4>
                </div>
                <h2 className="pt-20" style={{ color: "#3a9fe3ff" }}>
                  Transformación digital generación{" "}
                  <span style={{ color: "#e73f7fff" }}>Z</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img mb-4 mb-lg-0 wow fadeIn pb-30">
              <img src="/assets/img/about/cordoba.png" alt="" />
              <div style={{ textAlign: "center" }}>
                <h1>
                  <span style={{ color: "#e73f7fff" }}>350.000</span>
                </h1>
                <h3>Jóvenes de la Provincia de Córdoba</h3>
                <h4>
                  Entre 15 y 18 años{" "}
                  <span style={{ color: "#e73f7fff", letterSpacing: "1px" }}>
                    CENTENNIALS
                  </span>
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
