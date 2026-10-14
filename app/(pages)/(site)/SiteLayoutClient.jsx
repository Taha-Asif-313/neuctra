"use client";

import Footer from "@/app/components/HeaderFooter/Footer";
import Navbar from "@/app/components/HeaderFooter/Navbar";

export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 mb-5 mx-auto">{children}</main>
      <Footer />
    </>
  );
}
