import features5 from "@data/DataAnalysis/features5A";

const Modulo3A = () => {
  return (
    <div className="content sec-content pt-100" id="modulo3">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 order-lg-6">
            {" "}
            <div className="info">
              <div className="section-head style-4">
                <span>Tramo 3</span>
                <h2 className="mb-30">
                  <span> Maratón </span> Día 1
                </h2>
              </div>
              <p className="text mb-40">
                En este momento histórico de la era de la superinformación,
                desinformación, hacktivismo, fakenews y el avance tecnológico de
                todo el mundo, cada uno elige en que lado de la grieta se
                posiciona para ser protagonista de la transformación digital. En
                este tramo de alta performance, el gran reto es entrenarte en
                todos los aspectos de seguridad, comunicación digital,
                prevención y actualización tecnológica desde un escenario de
                liderazgo digital. Podremos configurar tus dispositivos móvil y
                laptop. Es un tramo de alto compromiso para hackear todos los
                aspectos limitantes y lograr tu alfabetización digital.
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
              <img src="/assets/img/about/mar.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modulo3A;
