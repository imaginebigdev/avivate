import features3 from "@data/DataAnalysis/features3";

const Modulo1A = () => {
  return (
    <div className="content sec-content" id="modulo1">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 order-2 order-lg-0">
            <div className="info">
              <div className="section-head style-4">
                <span>Tramo 1</span>
                <h2 className="mb-30">
                  <span> Tecnovida </span>
                </h2>
              </div>
              <p className="text mb-40">
                Es una etapa en donde experimentarás una óptima relación con los
                aspectos que definen tu persona y marca digital frente al mundo
                infinito que te brinda la tecnología. Experimentarás una potente
                relación con elementos potenciadores que te facilitarán
                comprender la realidad y la cultura digital. A través de este
                módulo podrás visualizarte en un mundo de posibilidades que te
                esperan haciendo un buen uso de Internet y las Redes Sociales.
                Apalancarás con un nuevo concepto renovado de expansión el
                conectarte con aquello que te apasiona. Aprendederás lo que es
                un mercado objetivo, clientes potenciales y venta online.
                También haremos un test personal, orientado a conocer tu
                propósito y tu visión de lo significativo que quieras
                desarrollar en tu vida haciendo uso de Internet.
              </p>
              {/* <div className="faq style-3 style-4">
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
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/tec.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modulo1A;
