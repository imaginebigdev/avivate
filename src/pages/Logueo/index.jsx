/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Head from "next/head";

//= Components
import Footer from "@components/IT/Footer";

import LogueoForm from "@components/DataAnalysis/LogueoForm";

import Navbar3 from "@components/Navbars/Clases";
import MainLayout from "@layouts/Main";
import Navbar4 from "@components/Navbars/Logueo";
import Navbar2 from "@components/Navbars/Fullstack";

const Logueo = () => {
  /*  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null); */

  React.useEffect(
    () => {
      document.querySelector("body").classList.add("contact-page");

      /*  var navbar = navbarRef.current,
      logo = logoRef.current; */
      /* if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    } */
      /*     window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    }); */
      return () => {
        document.querySelector("body").classList.remove("contact-page");
      };
    },
    [
      /* navbarRef */
    ]
  );

  return (
    <>
      <Head>
        <title>Avivate - FullStack - Logueo</title>
      </Head>
      <MainLayout>
        <Navbar4 />
        <main>
          <LogueoForm />
        </main>
        {/*      <Footer /> */}
      </MainLayout>
    </>
  );
};

export default Logueo;
