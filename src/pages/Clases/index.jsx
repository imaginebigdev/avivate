import { useEffect } from "react";
import Head from "next/head";
//= Layout
import MainLayout from "@layouts/Main";
//= Components

import About2 from "@components/ITCreative/About2";
import Modulo1 from "@components/ITCreative/Modulo1";
import Header3 from "@components/DataAnalysis/Header3";
import Modulo2 from "@components/ITCreative/Modulo2";
import Modulo3 from "@components/ITCreative/Modulo3";
import Footer3 from "@components/IT/Footer3";
import Abales from "@components/ITCreative/Abales";
import Clases from "@components/App/Clases";
import Blogs from "@components/Blog/AllNews/Blogs";
import Blogs2 from "@components/App/Clases";
import AllNews from "@components/Blog/AllNews";
import { getFirestore } from "firebase/firestore";

const FullStack = ({ correoUsuario }) => {
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
        <title>Avivate - FullStack - Clases</title>
      </Head>

      <MainLayout>
        <Header3 />

        <main>
          <AllNews />
        </main>
        <Footer3 />
      </MainLayout>
    </>
  );
};

export default FullStack;
