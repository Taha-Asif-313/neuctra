"use cleint";
import React from "react";
import HeroLanding from "@/app/components/LandingPage/HeroLanding";
import ProductsSection from "@/app/components/LandingPage/ProductSection";
import SolutionsSection from "@/app/components/LandingPage/SolutionsSection";
import ContactSection from "@/app/components/LandingPage/ContactSection";

const LandingPage = () => {
  return (
    <>
      <HeroLanding />
      <ProductsSection />
      <SolutionsSection />
      <ContactSection />
    </>
  );
};

export default LandingPage;
