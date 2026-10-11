"use cleint";
import React from "react";
import HeroLanding from "@/app/components/LandingPage/HeroLanding";
import ProductsSection from "@/app/components/LandingPage/ProductSection";
import BrandMetricsSection from "@/app/components/LandingPage/BrandMetricsSection";
import FeatureShowcaseSection from "@/app/components/LandingPage/FeatureShowcaseSection";
import SolutionsSection from "@/app/components/LandingPage/SolutionsSection";
import ContactSection from "@/app/components/LandingPage/ContactSection";
import WhyNeuctra from "@/app/components/LandingPage/WhyNeuctra";
import ServicesSection from "@/app/components/LandingPage/ServicesSection";
import ProcessSection from "@/app/components/LandingPage/ProcessSection";
import TestimonialsSection from "@/app/components/LandingPage/TestimonialsSection";
import CTASection from "@/app/components/LandingPage/CTASection";

const LandingPage = () => {
  return (
    <>
      <HeroLanding />
      <ProductsSection />
      <BrandMetricsSection />
      <FeatureShowcaseSection />
      <SolutionsSection />
      <WhyNeuctra />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </>
  );
};

export default LandingPage;
