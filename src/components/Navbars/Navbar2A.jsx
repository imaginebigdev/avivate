import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import Link2 from "next/link";

import navbarScrollEffect from "@common/navbarScrollEffect";

const Navbar2 = () => {
  const navbarRef = useRef(null);
  const [isEtapaMenuOpen, setIsEtapaMenuOpen] = useState(false);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  const toggleEtapaMenu = () => {
    setIsEtapaMenuOpen(!isEtapaMenuOpen);
  };

  const closeEtapaMenu = () => {
    setIsEtapaMenuOpen(false);
  };

  return (
    <div className="navs-container pt-4">
      <nav
        className="navbar navbar-expand-lg navbar-light style-8"
        ref={navbarRef}
      >
        <div className="container">
          <Link2 className="navbar-brand" href="/">
            <img
              className="logo"
              src="/assets/img/logo_home8.png"
              alt=""
              style={{ cursor: "pointer" }}
            />
          </Link2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 ps-4">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="arch-slider"
                  smooth={true}
                  duration={100}
                >
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="nosotros"
                  smooth={true}
                  duration={100}
                >
                  De Qué Trata
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="contacto"
                  smooth={true}
                  duration={100}
                >
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <li
                  className={`nav-link ${isEtapaMenuOpen ? "active" : ""}`}
                  onClick={toggleEtapaMenu}
                >
                  Etapas <i className="fas fa-caret-down"></i>
                </li>
                {isEtapaMenuOpen && (
                  <ul className="sub-menu">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="modulo1"
                        smooth={true}
                        duration={100}
                        onClick={closeEtapaMenu}
                      >
                        Etapa 1
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="modulo2"
                        smooth={true}
                        duration={100}
                        onClick={closeEtapaMenu}
                      >
                        Etapa 2
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="modulo3"
                        smooth={true}
                        duration={100}
                        onClick={closeEtapaMenu}
                      >
                        Etapa 3
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="modulo4"
                        smooth={true}
                        duration={100}
                        onClick={closeEtapaMenu}
                      >
                        Etapa 4
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
            <div className="nav-side">
              <button
                className="butn bg-orange2 border-0 rounded-pill hover-shadow flex-shrink-0"
                onClick={() => {
                  window.location.href =
                    "https://docs.google.com/forms/d/e/1FAIpQLSf-X6JlDWkk_A0ebVtFZ5m0qCFK14AX7YslDAA_GoTI3Tw2_g/viewform";
                }}
              >
                <span style={{ color: "#000" }}>
                  {" "}
                  Anotate aquí <i className="fal fa-long-arrow-right ms-2"></i>{" "}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
