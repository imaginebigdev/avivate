import React from "react";

const About4A = () => {
  return (
    <section className="about style-8 section-padding bg-white" id="nosotros">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head style-8 mb-40">
                {/*   <h6 className="wow fadeInUp"> about our service </h6> */}
                <h3 className="wow fadeInUp"> ¿A quien esta dirigido? </h3>
              </div>
              <p className="color-666 wow fadeInUp">
                {" "}
                Toda persona (PÚBLICO EN GENERAL MAYORES DE 18 AÑOS) que quiera
                derribar barreras de actualización tecnológica, eliminando la
                brecha digital para encontrar las herramientas que te alejarán
                del mal uso de Internet y te acercará al escenario del liderazgo
                digital..{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img mb-4 mb-lg-0 wow fadeIn">
              <img src="/assets/img/aq.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About4A;
