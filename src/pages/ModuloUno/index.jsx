import { useEffect } from "react";
import Head from "next/head";
//= Layout
import MainLayout from "@layouts/Main";
//= Components
import Header3 from "@components/DataAnalysis/Header3";
import Footer3 from "@components/IT/Footer3";

import ModuloUno from "@components/Blog/AllNews/AllNews";
import AllNews from "@components/Blog/AllNews/AllNews";
import Header4 from "@components/DataAnalysis/Header4";

const FullStack = ({ correoUsuario }) => {
  useEffect(() => {
    document.body.classList.add("home-style-8");

    return () => document.body.classList.remove("home-style-8");
  }, []);

  return (
    <>
      <Head>
        <title>Avivate - FullStack - Modulo 2</title>
      </Head>

      <MainLayout>
        <Header4 />

        <main>
          <AllNews />
        </main>
        <Footer3 />
      </MainLayout>
    </>
  );
};

export default FullStack;
