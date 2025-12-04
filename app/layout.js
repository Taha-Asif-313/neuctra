import { Poppins } from "next/font/google";
import "./globals.css";

// Import Poppins font
const poppins = Poppins({
  subsets: ["latin"],      // Required subset
  weight: ["400", "500", "600", "700"], // Font weights you need
  variable: "--font-poppins", // optional, for CSS variable
});

export const metadata = {
  title: "Neuctra – Empowering Modern SaaS Innovation",
  description:
    "Neuctra builds modern SaaS solutions for authentication, design systems, and AI-powered productivity. Explore Authix, UI, and Notlix.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
