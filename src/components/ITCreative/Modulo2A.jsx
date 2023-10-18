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
                <small>Etapa 2</small>
                <h2 className="mb-30">
                  <span> Optimización </span>
                  <div
                    style={{
                      backgroundColor: "#ffed4fff",
                      color: "#000",
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
              <ul>
                <li className="d-flex align-items-center">
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">Optimización Perfil Digital</h6>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">Chat GPT</h6>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">Inteligencia Artificial</h6>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">Billeteras Digitales</h6>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">Google Aplicaciones</h6>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">Editores de Imágenes y Videos</h6>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">Redes Sociales</h6>
                </li>
              </ul>
              <div className="accordion pt-50" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse`}
                      aria-expanded="true"
                      aria-controls={`collapse`}
                      style={{
                        borderColor: "#e73f7fff",
                        backgroundColor: "#e7f1ff",
                      }}
                    >
                      Mas Info ...
                    </button>
                  </h2>
                  <div
                    id={`collapse`}
                    className={`accordion-collapse collapse `}
                    aria-labelledby={`heading`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      En esta etapa podrás conectarte con la potencia de la
                      optimización en cada red social. Veremos los aspectos
                      fundamentales de la comunicación digital. También haremos
                      una revisión e inducción sistemática de aplicaciones que
                      te harán exponenciar en tu performance digital. Es un
                      espacio de conexión con las nuevas tecnologías de la
                      información que están disponibles para crear.. En este
                      sprint vemos la introducción a Chat GPT, Inteligencia
                      Artificial aplicada a la vida diaria , billeteras
                      digitales, Google aplicaciones, Editores de Imagenes,
                      Editores de Video, Redes Sociales . Dentro del módulo
                      aprenderás a optimizar tu perfil digital en Redes
                      Sociales.
                    </div>
                  </div>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button $`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#calendario2`}
                      aria-expanded="true"
                      aria-controls={`collapse`}
                      style={{
                        borderColor: "#e73f7fff",
                        backgroundColor: "#e7f1ff",
                        textAlign: "center",
                      }}
                    >
                      Calendarios
                    </button>
                  </h2>
                  <div
                    id={`calendario2`}
                    className={`accordion-collapse collapse `}
                    aria-labelledby={`heading`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <li>
                        <span
                          className="butn bg-orange2 border-0 rounded-pill hover-shadow flex-shrink-0 mt-50"
                          style={{ color: "#000", fontSize: "12px" }}
                        >
                          {" "}
                          26 DE NOVIEMBRE - AVIVATE + - TRAMO 2 - 20 HS{" "}
                        </span>
                      </li>
                      <li>
                        <span
                          className="butn bg-orange2 border-0 rounded-pill hover-shadow flex-shrink-0 mt-50"
                          style={{ color: "#000", fontSize: "10px" }}
                        >
                          {" "}
                          27 DE NOVIEMBRE AVIVATE + - TRAMO 2 - 21 HS - POST
                          TRAINING{" "}
                        </span>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text mb-40"></p>
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
              <img src="/assets/img/about/about02.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modulo2A;
