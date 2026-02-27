"use cleint";
import React from "react";
import HeroLanding from "@/app/components/LandingPage/HeroLanding";
import ProductsSection from "@/app/components/LandingPage/ProductSection";
import SolutionsSection from "@/app/components/LandingPage/SolutionsSection";
import ContactSection from "@/app/components/LandingPage/ContactSection";
import WhyNeuctra from "@/app/components/LandingPage/WhyNeuctra";
import ServicesSection from "@/app/components/LandingPage/ServicesSection";
import CTASection from "@/app/components/LandingPage/CTASection";

const LandingPage = () => {
  return (
    <>
      <HeroLanding />
      <ProductsSection />
      <SolutionsSection />
      <WhyNeuctra />
      <ServicesSection />
      <CTASection />
      <ContactSection />
    </>
  );
};

export default LandingPage;
