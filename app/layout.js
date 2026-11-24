import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/app/contexts/ThemeContext";

export const metadata = {
  metadataBase: new URL("https://neuctra.com"),
  title: {
    default: "Neuctra | Software Products & Custom Solutions",
    template: "%s | Neuctra",
  },
  description:
    "Neuctra builds software products and custom websites, SaaS, CRM, POS, e-commerce, and workflow solutions for businesses and product teams.",
  applicationName: "Neuctra",
  openGraph: {
    type: "website",
    siteName: "Neuctra",
    locale: "en_US",
    url: "https://neuctra.com/",
    title: "Neuctra | Software Products & Custom Solutions",
    description:
      "Software products and practical custom technology solutions for businesses, founders, developers, and everyday users.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Neuctra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuctra | Software Products & Custom Solutions",
    description:
      "Software products and practical custom technology solutions for businesses, founders, developers, and everyday users.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
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
