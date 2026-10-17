"use cleint";
import React from "react";
import { Accordion } from "@neuctra/ui";
import HeroLanding from "@/app/components/LandingPage/HeroLanding";
import EcosystemOverviewSection from "@/app/components/LandingPage/EcosystemOverviewSection";
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

const faqItems = [
  {
    title: "What is Neuctra?",
    content:
      "Neuctra is a software products and technology solutions company building practical digital products and custom technology systems for real-world problems.",
  },
  {
    title: "What is Neuctra Lab?",
    content:
      "Neuctra Lab is the educational platform within Neuctra. It teaches technology, software development, and business problem-solving through practical education and product-driven learning.",
  },
  {
    title: "What products does Neuctra offer?",
    content:
      "Neuctra offers Authix, UI, Notlix, Tools, and a growing ecosystem of future products and digital services.",
  },
  {
    title: "What kinds of services does Neuctra provide?",
    content:
      "Neuctra helps clients with custom software development, SaaS products, web applications, internal systems, and tailored technology solutions built around real business needs.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://neuctra.com/#organization",
      name: "Neuctra",
      url: "https://neuctra.com/",
      logo: "https://neuctra.com/logo.png",
      sameAs: ["https://www.linkedin.com/company/neuctra", "https://github.com/neuctra"],
    },
    {
      "@type": "WebSite",
      "@id": "https://neuctra.com/#website",
      url: "https://neuctra.com/",
      name: "Neuctra",
      publisher: { "@id": "https://neuctra.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": "https://neuctra.com/#webpage",
      url: "https://neuctra.com/",
      name: "Neuctra | Software Products and Technology Solutions",
      description:
        "Neuctra builds practical software products and custom technology solutions for businesses, founders, developers, and everyday users.",
      isPartOf: { "@id": "https://neuctra.com/#website" },
      inLanguage: "en",
      about: { "@id": "https://neuctra.com/#organization" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://neuctra.com/#faq",
      isPartOf: { "@id": "https://neuctra.com/#webpage" },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Neuctra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Neuctra is a software products and technology solutions company building practical digital products and custom technology systems for real-world problems.",
          },
        },
        {
          "@type": "Question",
          name: "What does Neuctra Lab do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Neuctra Lab teaches technology, software development, and business problem-solving through practical education and product-driven learning.",
          },
        },
        {
          "@type": "Question",
          name: "What products does Neuctra offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Neuctra offers Authix, UI, Notlix, Tools, and a growing ecosystem of future products and digital services.",
          },
        },
      ],
    },
  ],
};

const LandingPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroLanding />
      <EcosystemOverviewSection />
      <ProductsSection />
      <BrandMetricsSection />
      <FeatureShowcaseSection />
      <SolutionsSection />
      <WhyNeuctra />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            FAQs
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion itemClassName="bg-card!" items={faqItems} allowMultiple={false} />
        </div>
      </section>
      <ContactSection />
    </>
  );
};

export default LandingPage;
