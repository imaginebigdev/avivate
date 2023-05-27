import Navbar from "@components/Navbars/DataAnalysis";

const Header = () => {
  return (
    <header className="style-8 bg-gray2" id="inicio">
      <Navbar />
      <div className="container">
        <div className="content section-padding">
          <div className="row align-items-center gx-0">
            <div className="col-lg-6">
              <div className="info">
                <h1 className="wow fadeInUp">
                  {" "}
                  Sábado 3 de junio <br />{" "}
                </h1>
                <div className="form wow fadeInUp">
                  <button
                    className="butn bg-orange2 border-0 rounded-pill hover-shadow flex-shrink-0"
                    type="submit"
                  >
                    <span style={{ color: "#000" }}>
                      {" "}
                      Inscribite aqui{" "}
                      <i className="fal fa-long-arrow-right ms-2"></i>{" "}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img mt-4 mt-lg-0 wow fadeIn">
                <img src="/assets/img/header/header1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
