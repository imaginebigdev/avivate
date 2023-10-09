import features from "@data/Saas/features.json";
import Download from "./Download";

const Features = ({ isServices }) => {
  const featuresData = features;

  return (
    <section
      className={`features section-padding style-5 ${
        isServices ? "pt-50" : "bg-gray5"
      }`}
      style={{ backgroundColor: "#fff" }}
      data-scroll-index="3"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-head text-center mb-60 style-5">
              <h2 className="mb-20">
                Explora Nuestros <span>Módulos de Aprendizaje</span>
              </h2>
              <p>
                Descubre una ruta de aprendizaje estructurada y progresiva
                diseñada para impulsar tu carrera.
              </p>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            {featuresData.map((feature, i) => (
              <div className="col-lg-3 col-sm-6" key={i}>
                <a href={feature.url} className="features-card mb-30 style-5">
                  <div className="icon">
                    <img src={feature.image} alt="" />
                  </div>
                  <div className="info">
                    <h5 className="card-title">{feature.title}</h5>
                    <p className="text">{feature.descripition}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <Download />
      </div>
    </section>
  );
};

export default Features;
