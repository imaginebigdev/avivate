import features4 from "@data/DataAnalysis/features4";

const Modulo2 = () => {
  return (
    <div className="content sec-content pt-100" id="modulo2">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 order-lg-2">
            {" "}
            {/* Cambiado el tamaño a col-lg-6 */}
            <div className="info">
              <div className="section-head style-4">
                <span>Módulo 2</span>
                <h2 className="mb-30">
                  Desarrollo <span> Front-End </span> Con React.js
                </h2>
              </div>
              <p className="text mb-40">
                El módulo "Desarrollo front-end con React.js" es una parte
                fundamental del curso Full- Stack y se centra en enseñar a los
                estudiantes cómo crear aplicaciones web interactivas y de alta
                calidad utilizando React.js. Durante este módulo, los
                estudiantes aprenderán los conceptos básicos de React.js, así
                como las mejores prácticas para desarrollar interfaces de
                usuario modernas y reactivas.
              </p>
              <div className="faq style-3 style-4">
                <div className="accordion" id="accordionExample">
                  {features4.map((accordion, index) => (
                    <div className="accordion-item" key={index}>
                      <h2
                        className="accordion-header"
                        id={`heading${accordion.id}`}
                      >
                        <button
                          className={`accordion-button ${
                            index !== 0 ? "collapsed" : ""
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${accordion.id}`}
                          aria-expanded="true"
                          aria-controls={`collapse${accordion.id}`}
                        >
                          {accordion.title}
                        </button>
                      </h2>
                      <div
                        id={`collapse${accordion.id}`}
                        className={`accordion-collapse collapse ${
                          index === 0 ? "show" : ""
                        }`}
                        aria-labelledby={`heading${accordion.id}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">{accordion.title2}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-lg-0">
            {" "}
            {/* Cambiado el tamaño a col-lg-5 */}
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/frontend.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/*  <div className="content pt-80">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="">
              <div className="text-center">
                <h6>
                  El módulo de Desarrollo front-end con React.js brinda a los
                  estudiantes las habilidades necesarias para desarrollar
                  interfaces de usuario interactivas y dinámicas. A través de
                  este módulo, los estudiantes aprendieron los conceptos clave
                  de React.js, como componentes, props y estado. También
                  exploraron cómo utilizar JSX y herramientas adicionales como
                  react-router para crear aplicaciones de página única (SPA). Al
                  finalizar este módulo, los estudiantes están preparados para
                  construir interfaces de usuario modernas y escalables
                  utilizando React.js.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Modulo2;
