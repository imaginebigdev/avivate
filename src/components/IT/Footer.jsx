import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer className="style-2 pt-80 pb-60 bg-darkBlue border-top brd-light text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-sm-6">
            <div className="foot_logo">
              <img src="/assets/img/logo_ll.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6" style={{ textAlign: "center" }}>
            <div className="foot_links text-uppercase text-center small">
              <Link to="inicio" smooth="true" duration={100}>
                <a className="mx-4">Inicio </a>
              </Link>
              <Link to="ejes" smooth="true" duration={100}>
                <a className="mx-4">Ejes </a>
              </Link>
              <Link to="nosotros" smooth="true" duration={100}>
                <a className="mx-4">Nosotros </a>
              </Link>
              <Link to="problematica" smooth="true" duration={100}>
                <a className="mx-4">Problematica </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 text-end">
            <div className="socail-icons">
              <a
                href="#"
                className="icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-30">
          <div className="small">
            <span className="op-6">© 2022 Copyrights by </span>
            <a href="#" className="mx-1">
              Iteck Co.
            </a>
            <span className="op-6"> All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
