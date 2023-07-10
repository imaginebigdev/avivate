import { React, useEffect, useRef } from "react";
import Head from "next/head";
//= Layout
import MainLayout from "@layouts/Main";
//= Components

import About from "@components/DataAnalysis/About";
import Projects from "@components/DataAnalysis/Projects";
import Testimonials from "@components/ITCreative/Testimonials";
import ChooseUs from "@components/ITCreative/ChooseUs";
import aboutData from "@data/Saas/about.json";
import Content from "@components/Saas/About/Content2";
import About2 from "@components/App/About";
import Footer from "@components/IT/Footer";
import Form from "@components/Contact/Form";
import AboutCordoba from "@components/DataAnalysis/About3";
import ChooseUs2 from "@components/ITCreative/ChoseUs2";
import Swal from "sweetalert2";
import Navbar from "@components/Navbars/DataAnalysis";
import IntroWithSlider from "@components/DataAnalysis/IntroWithSlider";

const HomeDataAnalysis = () => {
  const fixedSlider = useRef(null);
  /*   const MainLayout = useRef(null); */
  const navbarRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("home-style-8");

    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainLayout.current) {
        MainLayout.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    return () => document.body.classList.remove("home-style-8");
  }, [fixedSlider, MainLayout, navbarRef]);

  return (
    <>
      <Head>
        <title>Avivate</title>
        {/*  <link rel="stylesheet" defer href="/css/arch-skin-light.css" /> */}
      </Head>

      <MainLayout>
        <Navbar />
        {/* <Header />  */}
        <IntroWithSlider />
        <main>
          <ChooseUs2 />
          <Projects />
          <AboutCordoba />
          <About />
          <ChooseUs />
          <Testimonials />
          <Content list={aboutData.list} />
          <About2 noWave noIntegration />
          <Form style="5" />
        </main>
        <Footer />
      </MainLayout>
    </>
  );
};

export default HomeDataAnalysis;
