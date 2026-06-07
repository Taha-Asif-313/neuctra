import NeuctraSpaceProviders from "./NeuctraSpaceProviders";

export const metadata = {
  title: "Neuctra Space - Developer Knowledge & Spark Platform",
  description:
    "Neuctra Space is a platform for creators, developers, founders, and writers to publish structured content called Sparks. Share tutorials, SaaS products, documentation, and ideas using rich content blocks like text, code, images, and tables.",

  openGraph: {
    title: "Neuctra Space",
    description:
      "Publish structured content called Sparks — tutorials, SaaS products, documentation, and knowledge using rich blocks like code, images, and tables.",
    type: "website",
    siteName: "Neuctra Space",
  },

  twitter: {
    card: "summary_large_image",
    title: "Neuctra Space",
    description:
      "A platform for creators & developers to publish structured content (Sparks) like tutorials, SaaS docs, and knowledge posts.",
  },
};

const NeuctraSpaceLayout = ({ children }) => {
  return <NeuctraSpaceProviders>{children}</NeuctraSpaceProviders>;
};

export default NeuctraSpaceLayout;
