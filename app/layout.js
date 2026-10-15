import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/app/contexts/ThemeContext";

export const metadata = {
  title: "Neuctra | Software Products and Technology Solutions",
  description:
    "Neuctra builds practical software products and custom technology solutions for businesses, founders, developers, and everyday users.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const themeScript = `
(function () {
  try {
    var savedTheme = localStorage.getItem("theme");
    var dark = savedTheme ? savedTheme === "dark" : true;

    document.documentElement.classList.toggle("dark", dark);
  } catch (e) {
    document.documentElement.classList.add("dark");
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>

        <Toaster />
      </body>
    </html>
  );
}
