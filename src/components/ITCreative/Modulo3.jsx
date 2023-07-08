import features5 from "@data/DataAnalysis/features5";

const Modulo3 = () => {
  return (
    <div className="content sec-content pt-100" id="modulo3">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 order-lg-6">
            {" "}
            <div className="info">
              <div className="section-head style-4">
                <span>Módulo 3</span>
                <h2 className="mb-30">
                  Desarrollo <span> Back-End </span> Con Node.js y Express.js
                </h2>
              </div>
              <p className="text mb-40">
                El módulo "Desarrollo back-end con Node.js y Express.js" es una
                parte integral del curso Full-Stack y se enfoca en enseñar a los
                estudiantes cómo construir el lado del servidor de las
                aplicaciones web utilizando tecnologías como Node.js y
                Express.js. Durante este módulo, los estudiantes adquirirán los
                conocimientos y habilidades necesarios para desarrollar API
                robustas y escalables, así como para administrar la lógica y los
                datos del lado del servidor.
              </p>
              <div className="faq style-3 style-4">
                <div className="accordion" id="accordionExample">
                  {features5.map((accordion, index) => (
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
          <div className="col-lg-5 order-lg-5">
            {" "}
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/backend.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="content pt-80">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="">
              <div className="text-center">
                <h6>
                  El módulo de Desarrollo back-end con Node.js y Express.js
                  capacita a los estudiantes para crear el lado del servidor de
                  aplicaciones web. Durante este módulo, los estudiantes
                  adquirieron conocimientos sobre Node.js y su arquitectura
                  orientada a eventos. También aprendieron a utilizar
                  Express.js, un marco de aplicación web rápido y minimalista
                  para Node.js. Con estas herramientas, los estudiantes pudieron
                  construir APIs RESTful, interactuar con bases de datos y
                  autenticar usuarios. Este módulo sienta las bases para que los
                  estudiantes se conviertan en desarrolladores Full-Stack y
                  construyan aplicaciones web completas y escalables.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Modulo3;
