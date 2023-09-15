import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Link2 from "next/link";
import TopNav from "./TopNav";
import navbarScrollEffect from "@common/navbarScrollEffect";

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains("dropdown-toggle")
      ? event.target
      : event.target.querySelector(".dropdown-toggle");
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add("show");
    dropDownMenu?.classList?.add("show");
  };

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains("dropdown")
      ? event.target
      : event.target.closest(".dropdown");
    const dropDownToggler = dropdown.querySelector(".dropdown-toggle");
    const dropDownMenu = dropdown.querySelector(".dropdown-menu");

    dropDownToggler?.classList?.remove("show");
    dropDownMenu?.classList?.remove("show");
  };

  return (
    <div className="navs-container pt-4">
      <nav
        className="navbar navbar-expand-lg navbar-light style-8"
        ref={navbarRef}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/assets/img/logo_home8.png" alt="" />
          </a>
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
                  to="inicio"
                  smooth="true"
                  duration={100}
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="ejes"
                  smooth="true"
                  duration={100}
                >
                  Ejes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="nosotros"
                  smooth="true"
                  duration={100}
                >
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="problematica"
                  smooth="true"
                  duration={100}
                >
                  Problematica
                </Link>
              </li>

              <li className="nav-item">
                <Link2 href={`/Fullstack`} /* className="nav-link" */>
                  <span className="nav-link"> Curso FullStack</span>
                </Link2>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="contacto"
                  smooth="true"
                  duration={100}
                >
                  Contacto
                </Link>
              </li>
            </ul>
            <div className="nav-side">
              <a
                className="butn bg-orange2 border-0 rounded-pill hover-shadow flex-shrink-0"
                href="https://docs.google.com/forms/d/e/1FAIpQLSf-X6JlDWkk_A0ebVtFZ5m0qCFK14AX7YslDAA_GoTI3Tw2_g/viewform"
                download="Avivate2023.pdf"
              >
                <span style={{ color: "#000" }}>
                  {" "}
                  Inscripción AVIVATE Catamarca{" "}
                  <i className="fal fa-long-arrow-right ms-2"></i>{" "}
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
