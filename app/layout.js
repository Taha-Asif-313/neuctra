import "./globals.css";

export const metadata = {
  title: "Neuctra – Empowering Modern SaaS Innovation",
  description:
    "Neuctra builds modern SaaS solutions for authentication, design systems, and AI-powered productivity. Explore Authix, UI, and Notlix.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
