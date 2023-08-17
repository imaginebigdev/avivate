import { useEffect, useRef } from "react";
import Link2 from "next/link";
import blogApp from "../../../fb";
import { Button } from "react-bootstrap";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(blogApp);

import navbarScrollEffect from "@common/navbarScrollEffect";

const Navbar4 = () => {
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
          <Link2 className="navbar-brand" href="/">
            <img className="logo" src="/assets/img/logo_home8.png" alt="" />
          </Link2>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 ps-4">
              {/* ... Otros elementos de la barra de navegación ... 
            </ul>
          </div> */}
          {/*  <ul className="navbar-nav ml-auto mb-2 mb-lg-0 pe-4">
            <li className="nav-item">
              <button
                className="butn bg-orange2 border-0 rounded-pill hover-shadow flex-shrink-0"
                onClick={() => signOut(auth)}
              >
                Cerrar sesión
              </button>
            </li>
          </ul> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar4;
