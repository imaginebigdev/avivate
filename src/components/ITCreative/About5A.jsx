import React from "react";

const About5A = () => {
  return (
    <section className="about style-8 section-padding bg-white" id="nosotros">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="img mb-4 mb-lg-0 wow fadeIn">
              <img src="/assets/img/com.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head style-8 mb-40">
                {/*   <h6 className="wow fadeInUp"> about our service </h6> */}
                <h3 className="wow fadeInUp"> ¿Que aprendo? </h3>
              </div>
              <p className="color-666 wow fadeInUp">
                {" "}
                Todos los aspectos de reputación online y prevención digital
                para contar con las armas de defensa informática frente a los
                peligros de internet (cyberetafas, cybercrimen, cyber malware).
                Herramientas de mercadeo para crear un mundo de posibilidades
                frente al escenario de alta competencia. Herramientas de
                branding personal, marketing digital, viralización, inteligencia
                artificial e industria 4.0. Como usar la tecnología sin que la
                tecnología me use. Herramientas de control parental y seguridad
                informática para evitar ciberacoso, cyberodio, grooming y
                cyberbullying.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About5A;
