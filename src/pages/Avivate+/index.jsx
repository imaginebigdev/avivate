import { useEffect, useState } from "react";
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
import Services from "@components/ITCreative/Services";
import Form from "@components/Contact/Form";
import Swal from "sweetalert2";
/* import FormA from "@components/Contact/FormA"; */

const AvivateMas = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    document.body.classList.add("home-style-8");

    const handleScroll = () => {
      if (!hasScrolled) {
        // Mostrar Sweet Alert solo si no se ha hecho scroll antes
        Swal.fire({
          showCloseButton: true,
          buttonsStyling: true,
          showConfirmButton: false,
          imageUrl: "/assets/img/alert2.png",
          imageWidth: "auto",
          imageHeight: "auto",
          imageAlt: "Custom image",
          background: "#23252E",
          color: "#fff",
          html: `
            
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSed3xy-76Eple4rZGGSgF56nfDZvBP_Rb_C3DDNlMKzVFaWgA/viewform" target="_blank" class="btn btn-primary">Anotate Aquí</a>
          `,
        });
        setHasScrolled(true); // Establecer hasScrolled a true para evitar futuras alertas
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.body.classList.remove("home-style-8");
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <>
      <Head>
        <title>Avivate - Avivate+</title>
      </Head>

      <MainLayout>
        <IntroWithSliderA />
        <main>
          <About2A />
          <Services />
          <About5A />
          <Modulo1A />
          <br></br>
          <Modulo2A />
          <br></br>
          <Modulo3A />
          <Modulo4A />
          {/* <About3A /> */}
          {/*     <TestimonialsA /> */}
          <Testi />
          <br></br>
          <Clients />
          <br></br>
          <Form style="5" />
        </main>
        <FooterA />
      </MainLayout>
    </>
  );
};

export default AvivateMas;
