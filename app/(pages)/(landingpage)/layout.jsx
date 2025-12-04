import Footer from "@/app/components/HeaderFooter/Footer";
import Navbar from "@/app/components/HeaderFooter/Navbar";

export default function SiteLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
