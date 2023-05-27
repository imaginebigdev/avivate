import React from "react";

const About = () => {
  return (
    <section className="about style-8 section-padding bg-gray2" id="nosotros">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="img mb-4 mb-lg-0 wow fadeIn">
              <img src="/assets/img/about/about1.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head style-8 mb-40">
                {/*   <h6 className="wow fadeInUp"> about our service </h6> */}
                <h3 className="wow fadeInUp"> ¿Quienes Somos? </h3>
              </div>
              <p className="color-666 wow fadeInUp">
                {" "}
                Somos una organización que promueve la responsabilidad digital .
                Facilitamos a través de vivencias enriquecedoras
                ,concientización con el uso responsable de las redes sociales y
                los dispositivos móviles. Creamos valor hacia la reputación
                online que beneficia el futuro, y estimulamos a las personas
                para que fortalezcan su conexión con la realidad. Creamos un
                programa de TRANSFORMACIÓN DIGITAL, para activar la juventud en
                la innovación de la sociedad del conocimiento.{" "}
              </p>
              {/* <ul className="mt-30">
                <li className="wow fadeInUp">
                  <img
                    src="/assets/img/about/icon3.svg"
                    alt=""
                    className="icon"
                  />
                  <p> Various AI Data Analysis Options </p>
                </li>
                <li className="wow fadeInUp">
                  <img
                    src="/assets/img/about/icon3.svg"
                    alt=""
                    className="icon"
                  />
                  <p> Auto Generate AI Content </p>
                </li>
              </ul> */}
              {/*  <div className="d-flex align-items-center mt-40 wow fadeInUp">
                <div className="author">
                  <div className="img icon-60 rounded-circle overflow-hidden img-cover me-3 flex-shrink-0">
                    <img src="/assets/img/testimonials/user7.png" alt="" />
                  </div>
                  <div className="inf">
                    <p> Certified By </p>
                    <h6> Alonso D.Dowson </h6>
                  </div>
                </div>
                <img
                  src="/assets/img/about/signature.svg"
                  alt=""
                  className="signature ms-5"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
