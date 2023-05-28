import Link from "next/link";

const ThirdContent = ({ features, rtl }) => {
  return (
    <div className="content trd-content">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/nenes.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head style-4">
                <small className="title_small">
                  Hormona del Estrés y la corteza prefrontal
                </small>
                <h2 className="mb-30">
                  Si a un <span>niñ@</span> le damos un{" "}
                  <span>dispositivo móvil</span>
                </h2>
              </div>
              <p className="text mb-40">
                Disminumos la capacidad para que su corteza prefrontal se
                asiente. Por lo tanto lanzamos una generación:
              </p>
              <ul className="mb-40">
                {features.map((feature, index) => (
                  <li
                    className={`d-flex align-items-center ${
                      feature.active ? "" : "op-4"
                    }`}
                    key={index}
                  >
                    <i className="bi bi-dot fs-2 me-2 lh-1 color-blue4"></i>
                    <h6 className="fw-bold">{feature.title}</h6>
                  </li>
                ))}
              </ul>
              <p className="text mb-40">
                El mal uso de las redes sociales y celular, pantallas, altera el
                sistema nervioso , generando alto niveles de dopamina y cortisol
                ( hormona del estres ) y sus consecuencias daña regiones
                cerebrales que involucran la creatividad y el procesamiento de
                emociones, atención, toma de decisiones y control cognitivo.
              </p>

              <h5>
                Es hora de despertar…{" "}
                <span style={{ color: "#e73f7f" }}>AVIVATE!</span>
              </h5>
              {/*        <Link href="/page-services-5">
                <a className="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
                  <small>Discovery Now</small>
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      {/* <img
        src="/assets/img/about/about_s4_bubble.png"
        alt=""
        className="bubble"
      /> */}
    </div>
  );
};

export default ThirdContent;
