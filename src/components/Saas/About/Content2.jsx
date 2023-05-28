import Link from "next/link";

const Content = ({ list, rtl }) => {
  return (
    <div className="content pt-100">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="section-head mb-30 style-5">
              <h5 style={{ color: "#3a9fe3ff" }}>
                <span>
                  ¿Cuántas horas al día pasa una persona conectada a su
                  teléfono?
                </span>
              </h5>
            </div>
            <p>
              La Argentina ocupa el quinto lugar, con un promedio de 9 horas y
              39 minutos al día y un total de 147 días al año Se estima que el
              usuario promedio de Internet consagra 155 minutos al día en las
              redes sociales. <br />
              <spna style={{ fontWeight: "bold" }}>
                La Argentina, con una de las puntuaciones más elevadas, llega a
                unas 3 h y 45 m, lo que equivale a 55 días al año.
              </spna>{" "}
              <br />
              Así, quienes están más de dos horas mirando publicaciones en
              Instagram, Twitter, Facebook, YouTube o TikTok, recorren unas 17
              horas a la semana, o tres días al mes con su pantalla activa. En
              el transcurso de un año entero, corresponde a un mes de 30 días.
              Es ahora de despertar….{" "}
              <span style={{ color: "#e73f7fff", fontWeight: "bold" }}>
                AVIVATE!
              </span>
            </p>
          </div>
          <div className="col-lg-8">
            <div className="img main-img2">
              <img
                src="/assets/img/about/tiempo.png"
                alt=""
                className="img-body"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
