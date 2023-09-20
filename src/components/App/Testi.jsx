/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Testi extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section
        id="testimonials-arch"
        className="testimonials section-padding position-re"
        style={{ backgroundColor: "#fff", paddingTop: "-1000px" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head  text-center">
                <h3>Entrenador</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid position-re">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-lg-12">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,

                  centerMode: false,

                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 1,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                  ],
                }}
              >
                <div className="item">
                  <div className="info inf-lrg valign">
                    <div className="cont">
                      <div className="author">
                        <div
                          className="img"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <img src="/assets/img/nel.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Nelson Fuentes.
                        </h6>
                        <span className="author-details">
                          Consultor tecnológico
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="valign">
                    <p className="fz-20 fw-200">
                      Director de IMAGINE BIG (Empresa IT De desarrollo y
                      Software Factory). www.imaginebig.dev Creador y fundador
                      del programa AVIVATE. (Aprender a Vivir con Valores
                      Tecnológicos). www.avivate.ar Desde el año 2003 asesorando
                      empresas y organizaciones, creando modelos de innovaciòn
                      tecnológica, aportando para el desarrollo de ONGs,
                      generando difusión de proyectos culturales y sostenibles
                      en Latinoamérica y USA.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="line-v top"></div>
        <div className="line-v bottom"></div>
      </section>
    );
  }
}

export default Testi;
