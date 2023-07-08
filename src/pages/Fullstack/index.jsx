import { useEffect } from "react";
import Head from "next/head";
//= Layout
import MainLayout from "@layouts/Main";
//= Components

import About2 from "@components/ITCreative/About2";
import Modulo1 from "@components/ITCreative/Modulo1";
import Header2 from "@components/DataAnalysis/Header2";
import Modulo2 from "@components/ITCreative/Modulo2";
import Modulo3 from "@components/ITCreative/Modulo3";
import Footer2 from "@components/IT/Footer2";
import Abales from "@components/ITCreative/Abales";

const FullStack = () => {
  useEffect(() => {
    document.body.classList.add("home-style-8");

    let firstScroll = true;

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
        <Header2 />
        <main>
          <About2 />
          {/* <ChooseUs2 /> */}
          <Modulo1 />
          <br></br>
          <Modulo2 />
          <br></br>
          <Modulo3 />
          <br></br>
          {/*  <Form style="5" /> */}
          {/*  <Abales /> */}
        </main>
        <Footer2 />
      </MainLayout>
    </>
  );
};

export default FullStack;
