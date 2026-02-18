"use client";

import Footer from "@/app/components/HeaderFooter/Footer";
import Navbar from "@/app/components/HeaderFooter/Navbar";


export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen mb-5 max-w-7xl mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
}
