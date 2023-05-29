import { useEffect } from "react";
import Head from "next/head";
//= Layout
import MainLayout from "@layouts/Main";
//= Components
import Header from "@components/DataAnalysis/Header";
import About from "@components/DataAnalysis/About";
import Projects from "@components/DataAnalysis/Projects";
import Testimonials from "@components/ITCreative/Testimonials";
import ChooseUs from "@components/ITCreative/ChooseUs";
import aboutData from "@data/Saas/about.json";
import Content from "@components/Saas/About/Content2";
import About2 from "@components/App/About";
import Footer from "@components/IT/Footer";
import Form from "@components/Contact/Form";

const HomeDataAnalysis = () => {
  useEffect(() => {
    document.body.classList.add("home-style-8");
    return () => document.body.classList.remove("home-style-8");
  }, []);

  return (
    <>
      <Head>
        <title>Avivate</title>
      </Head>

      <MainLayout>
        <Header />
        <main>
          <Projects />
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
