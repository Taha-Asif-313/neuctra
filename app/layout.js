import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/app/contexts/ThemeContext";

export const metadata = {
  title: "Neuctra – Empowering Modern SaaS Innovation",
  description:
    "Neuctra builds modern SaaS solutions for authentication, design systems, and AI-powered productivity. Explore Authix, UI, and Notlix.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}