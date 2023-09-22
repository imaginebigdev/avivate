import features4 from "@data/DataAnalysis/features4";

const Modulo2A = () => {
  return (
    <div className="content sec-content pt-100" id="modulo2">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 order-lg-2">
            {" "}
            {/* Cambiado el tamaño a col-lg-6 */}
            <div className="info">
              <div className="section-head style-4">
                <span>Tramo 2</span>
                <h2 className="mb-30">
                  <span> Optimización </span>
                  <div
                    style={{
                      backgroundColor: "yellow",
                      color: "black",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      float: "right",
                      marginRight: "10px",
                    }}
                  >
                    Online
                  </div>
                </h2>
              </div>
              <p className="text mb-40">
                En esta etapa podrás conectarte con la potencia de la
                optimización en cada red social. Veremos los aspectos
                fundamentales de la comunicación digital. También haremos una
                revisión e inducción sistemática de aplicaciones que te harán
                exponenciar en tu performance digital. Es un espacio de conexión
                con las nuevas tecnologías de la información que están
                disponibles para crear.. En este sprint vemos la introducción a
                Chat GPT, Inteligencia Artificial aplicada a la vida diaria ,
                billeteras digitales, Google aplicaciones, Editores de Imagenes,
                Editores de Video, Redes Sociales . Dentro del módulo aprenderás
                a optimizar tu perfil digital en Redes Sociales.
              </p>
              {/* <div className="faq style-3 style-4">
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
              </div> */}
            </div>
          </div>
          <div className="col-lg-5 order-lg-0">
            {" "}
            {/* Cambiado el tamaño a col-lg-5 */}
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/opt.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modulo2A;
