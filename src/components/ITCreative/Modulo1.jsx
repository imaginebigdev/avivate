import features3 from "@data/DataAnalysis/features3";

const Modulo1 = () => {
  return (
    <div className="content sec-content" id="modulo1">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 order-2 order-lg-0">
            <div className="info">
              <div className="section-head style-4">
                <span>Módulo 1</span>
                <h2 className="mb-30">
                  <span> Fundamentos </span> del desarrollo web
                </h2>
              </div>
              <p className="text mb-40">
                El módulo "Fundamentos del desarrollo web" es el primer paso en
                el curso de Full- Stack y sienta las bases sólidas para
                comprender los conceptos fundamentales deldesarrollo web.
                Durante este módulo, los estudiantes adquirirán conocimientos
                esenciales sobre cómo funciona la web, los lenguajes de
                programación web y los conceptos clave relacionados con el
                diseño y la arquitectura de aplicaciones web.
              </p>
              <div className="faq style-3 style-4">
                <div className="accordion" id="accordionExample">
                  {features3.map((accordion, index) => (
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
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/fundamentos.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/*    <div className="content pt-80">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="">
              <div className="text-center">
                <h6>
                  El módulo de Fundamentos del desarrollo web proporciona una
                  base sólida para comprender los conceptos esenciales
                  necesarios en el desarrollo web. A lo largo del módulo, los
                  estudiantes aprendieron sobre HTML y CSS, que son los
                  lenguajes fundamentales para crear la estructura y dar estilo
                  alas páginas web. Estos conocimientos les permitirán construir
                  sitios web estáticos y comprender la estructura básica de una
                  aplicación web.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Modulo1;
