"use cleint";
import React from "react";
import HeroLanding from "../../components/LandingPage/HeroLanding";
import ProductsSection from "../../components/LandingPage/ProductSection";
import SolutionsSection from "../../components/LandingPage/SolutionsSection";
import ContactSection from "../../components/LandingPage/ContactSection";

const LandingPage = () => {
  return (
    <>
      <HeroLanding />
      <ProductsSection />
      <SolutionsSection/>
      <ContactSection/>
    </>
  );
};

export default LandingPage;
