import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Workflow from "./WorkFlow";
import Pricing from "./Pricing";
import Testmonial from "./Testmonial";

const index = () => {
  return (
    <div className="home">
      <div className="container">
        <HeroSection />
        <Features />
        <Workflow />
        <Pricing />
        <Testmonial />
      </div>
    </div>
  );
};

export default index;
