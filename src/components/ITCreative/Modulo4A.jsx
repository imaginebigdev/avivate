import features4 from "@data/DataAnalysis/features4";

const Modulo4A = () => {
  return (
    <div className="content sec-content pt-100" id="modulo2">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 order-lg-2">
            {" "}
            {/* Cambiado el tamaño a col-lg-6 */}
            <div className="info">
              <div className="section-head style-4">
                <small>Etapa 4</small>
                <h2 className="mb-30">
                  <span> Lanzamiento </span>
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
                  <h6 className="fw-bold">
                    Técnicas y Tecnologías para Expandir un Mensaje en Internet
                  </h6>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">Viralización</h6>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">Ingeniería Social</h6>
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
                      Esta última etapa del entrenamiento es la clave en lo que
                      implica visionar en Internet un proyecto o emprendimiento.
                      Lo que incorpores de conocimiento en este módulo lo podrás
                      aplicar en tu ámbito personal como también profesional.
                      Vas a poder unir todo lo aprendido en una orquesta final
                      de tu perfil digital optimizado y encontrarte con el poder
                      de la viralización. Esto es, un conjunto de técnicas, y
                      tecnología para expandir un mensaje o contenido en
                      Internet. Es la etapa del lanzamiento de tu proyecto, o
                      emprendimiento con ingeniería social para que tu idea
                      pueda ser conocida. Conocerás las técnicas de persuasión
                      digital de las principales marcas líderes en el mundo
                      haciendo uso de las redes sociales e internet.
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
              <img src="/assets/img/about/about04.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modulo4A;
