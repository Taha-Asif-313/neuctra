import SiteLayoutClient from "./SiteLayoutClient";

export const metadata = {
  title: "Neuctra",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://neuctra.com/#organization",
      name: "Neuctra",
      url: "https://neuctra.com/",
      logo: "https://neuctra.com/logo.png",
      email: "support@neuctra.com",
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
  ],
};

export default function SiteLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteLayoutClient>{children}</SiteLayoutClient>
    </>
  );
}
