import { useEffect } from "react";
import Head from "next/head";
import HomeDataAnalysis from "./home-data-analysis";

const LandingPreview = () => {
  useEffect(() => {
    document.body.classList.add("index-main");
    return () => document.body.classList.remove("index-main");
  }, []);

  return (
    <>
      <HomeDataAnalysis />
    </>
  );
};

export default LandingPreview;
