import features5 from "@data/DataAnalysis/features5A";

const Modulo4A = () => {
  return (
    <div className="content sec-content pt-100" id="modulo4">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 order-lg-6">
            {" "}
            <div className="info">
              <div className="section-head style-4">
                <span>Tramo 4</span>
                <h2 className="mb-30">
                  <span> Lanzamiento </span>
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
                Esta última etapa del entrenamiento es la clave en lo que
                implica visionar en Internet un proyecto o emprendimiento. Lo
                que incorpores de conocimiento en este módulo lo podrás aplicar
                en tu ámbito personal como también profesional. Vas a poder unir
                todo lo aprendido en una orquesta final de tu perfil digital
                optimizado y encontrarte con el poder de la viralización. Esto
                es, un conjunto de técnicas, y tecnología para expandir un
                mensaje o contenido en Internet. Es la etapa del lanzamiento de
                tu proyecto, o emprendimiento con ingeniería social para que tu
                idea pueda ser conocida. Conocerás las técnicas de persuasión
                digital de las principales marcas líderes en el mundo haciendo
                uso de las redes sociales e internet.
              </p>
              {/* <div className="faq style-3 style-4">
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
              </div> */}
            </div>
          </div>
          <div className="col-lg-5 order-lg-5">
            {" "}
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/lan.png" alt="" />
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

export default Modulo4A;
