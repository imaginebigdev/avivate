import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
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
            </ul>
            <div className="nav-side">
              <button
                className="butn bg-transparent border-main border-2 rounded-pill hover-orange1 color-main hover-shadow"
                type="submit"
              >
                <span className="">
                  {" "}
                  Descargar PDF <i className="fal fa-long-arrow-right ms-2"></i>{" "}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
