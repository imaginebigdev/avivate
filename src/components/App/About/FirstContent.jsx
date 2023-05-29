const FirstContent = ({ features, rtl }) => {
  return (
    <div className="content frs-content" id="about" data-scroll-index="2">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/video01.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head style-4">
                {/* <small className="title_small">Notero - Easy Notes App</small> */}
                <h2 className="mb-30">
                  ¿Cuanta <span> vida </span> nos podes entregar?
                </h2>
              </div>
              <p className="text mb-40">
                <>
                  El modelo de negocio de empresas cómo Facebook, Snapchat,
                  Twitter, Youtube e Instagram, es que la gente no deje de mirar
                  su pantalla, Dicen...Veamos la forma de seducir a esta persona
                  el mayor tiempo posible.{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Cuanto tiempo podemos retenerte?? Cuanta vida podemos lograr
                    que nos entregues?{" "}
                  </span>
                </>
              </p>
              {/*  <ul>
                {features.map((item, index) => (
                  <li className="d-flex align-items-center mb-3" key={index}>
                    <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                      <i className={item.icon}></i>
                    </small>
                    <h6 className="fw-bold">{item.title}</h6>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      </div>
      {/* <img src="/assets/img/about/about_s4_lines.png" alt="" className="lines" />
      <img src="/assets/img/about/about_s4_bubble.png" alt="" className="bubble" /> */}
    </div>
  );
};

export default FirstContent;
