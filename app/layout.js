// app/layout.js or RootLayout.js
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Neuctra – Empowering Modern SaaS Innovation",
  description:
    "Neuctra builds modern SaaS solutions for authentication, design systems, and AI-powered productivity. Explore Authix, UI, and Notlix.",
};

// Configure Poppins font
const poppins = Poppins({
  subsets: ["latin"],      // Required subset
  weight: ["400", "500", "600", "700"], // Optional: choose weights you need
  variable: "--font-poppins", // optional for CSS variable usage
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}