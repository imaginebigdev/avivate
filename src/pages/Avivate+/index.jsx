import { useEffect } from "react";
import Head from "next/head";
//= Layout
import MainLayout from "@layouts/Main";
//= Components

import Modulo2 from "@components/ITCreative/Modulo2";
import Modulo3 from "@components/ITCreative/Modulo3";
import Footer2 from "@components/IT/Footer2";
import Abales from "@components/ITCreative/Abales";
import IntroWithSliderA from "@components/DataAnalysis/IntroWithSliderA";
import About2A from "@components/ITCreative/About2A";
import Modulo1A from "@components/ITCreative/Modulo1A";
import Modulo2A from "@components/ITCreative/Modulo2A";
import Modulo3A from "@components/ITCreative/Modulo3A";
import Modulo4A from "@components/ITCreative/Modulo4A";
import About3A from "@components/ITCreative/About3A";
import Testimonials from "@components/App/Testimonials";
import TestimonialsA from "@components/App/TestimonialsA";
import Testi from "@components/App/Testi";
import FooterA from "@components/IT/Footer2A";
import About4A from "@components/ITCreative/About4A";
import Ejes from "@components/ITCreative/EjesA";
import About5A from "@components/ITCreative/About5A";
import Clients from "@components/Saas/Clients";
/* import FormA from "@components/Contact/FormA"; */

const FullStack = () => {
  useEffect(() => {
    document.body.classList.add("home-style-8");

    /*   window.addEventListener("scroll", function () {
      if (firstScroll) {
        Swal.fire({
          showCloseButton: true,
          buttonsStyling: true,

          showConfirmButton: false,
          imageUrl: "/assets/img/alert.png",
          imageWidth: "auto",
          imageHeight: "auto",
          imageAlt: "Custom image",
          background: "#23252E",
          color: "#fff",
        });
        firstScroll = false;
      }
    }); */
    return () => document.body.classList.remove("home-style-8");
  }, []);

  return (
    <>
      <Head>
        <title>Avivate - FullStack</title>
      </Head>

      <MainLayout>
        <IntroWithSliderA />
        <main>
          <About2A />
          <About4A />
          <Ejes />
          <About5A />
          <Modulo1A />
          <br></br>
          <Modulo2A />
          <br></br>
          <Modulo3A />
          <Modulo4A />
          <About3A />
          <TestimonialsA />
          <Testi />
          <br></br>
          <Clients />
          <br></br>
         {/*  <FormA style="5"/> */}
          {/*  <Form style="5" /> */}
          {/*  <Abales /> */}
        </main>
        <FooterA />
      </MainLayout>
    </>
  );
};

export default FullStack;
