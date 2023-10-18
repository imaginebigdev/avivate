import features5 from "@data/DataAnalysis/features5A";
import React, { useState } from "react";

const Modulo3A = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeAccordion === index) {
      // Clicking the currently active accordion, so close it
      setActiveAccordion(null);
    } else {
      // Clicking a different accordion, open it
      setActiveAccordion(index);
    }
  };
  return (
    <div className="content sec-content pt-100" id="modulo3">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 order-lg-6">
            {" "}
            <div className="info">
              <div className="section-head style-4">
                <span>Etapa 3</span>
                <h2 className="mb-30">
                  <span> Maratón </span>
                  <div
                    style={{
                      backgroundColor: "#e51872ff",
                      color: "white",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      float: "right",
                      marginRight: "10px",
                    }}
                  >
                    Presencial
                  </div>
                </h2>
              </div>

              <ul>
                <li className="d-flex align-items-center">
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">Taller de Buenas Prácticas</h6>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">Reconversión Tecnológica</h6>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">Configuración de Dispositivos</h6>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">Técnicas Persuasivas</h6>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">Comunidad Digital</h6>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">
                    Ciudadanía Responsable en Internet
                  </h6>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-dot fs-2 me-2 lh-1 color-red2"></i>
                  <h6 className="fw-bold">Seguridad Cibernética</h6>
                </li>
              </ul>
              <div className="accordion pt-50">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button`}
                      type="button"
                      onClick={() => handleAccordionClick(1)}
                      aria-expanded={activeAccordion === 1}
                    >
                      Día 1
                    </button>
                  </h2>
                  <div
                    id={`collapse1`}
                    className={`accordion-collapse collapse ${
                      activeAccordion === 1 ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      En este momento histórico de la era de la
                      superinformación, desinformación, hacktivismo, fakenews y
                      el avance tecnológico de todo el mundo, cada uno elige en
                      que lado de la grieta se posiciona para ser protagonista
                      de la transformación digital. En este tramo de alta
                      performance, el gran reto es entrenarte en todos los
                      aspectos de seguridad, comunicación digital, prevención y
                      actualización tecnológica desde un escenario de liderazgo
                      digital. Podremos configurar tus dispositivos móvil y
                      laptop. Es un tramo de alto compromiso para hackear todos
                      los aspectos limitantes y lograr tu alfabetización
                      digital.
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion pt-5">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button`}
                      type="button"
                      onClick={() => handleAccordionClick(2)}
                      aria-expanded={activeAccordion === 2}
                    >
                      Día 2
                    </button>
                  </h2>
                  <div
                    id={`collapse2`}
                    className={`accordion-collapse collapse ${
                      activeAccordion === 2 ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      El DÍA 2 Presencial, es un programa que te llevará a
                      entender tu grado de compromiso con el mundo, creando
                      comunidades sustentables en redes sociales, para impactar
                      en todos los aspectos de tu vida personal y profesional
                      desde una ciudadanía digital responsable.Conocerás
                      poderosas herramientas que otros líderes e influencers de
                      internet lograron hacer en espacios de gran relevancia
                      mundial. Te encontrarás con herramientas poderosas de
                      comunicación para que puedas resaltar todas tus
                      habilidades. Tendrás la oportunidad de convertirte en un
                      agente de expansión que amplifica todas las cualidades que
                      pueden mejorar el mundo desde tu espacio en Internet.
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button $`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#calendario3`}
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
                    id={`calendario3`}
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
                          2 Y 3 DE DICIEMBRE TRAMO 3 - AVIVATE + PRESENCIAL{" "}
                        </span>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-lg-5">
            {" "}
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/about03.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modulo3A;
