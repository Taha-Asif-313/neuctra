import SiteLayoutClient from "./SiteLayoutClient";

export const metadata = {
  title: "Neuctra – Empowering Modern SaaS Innovation",
  description:
    "Neuctra builds modern SaaS solutions for authentication, design systems, and AI-powered productivity. Explore Authix, UI, and Notlix.",
};

export default function SiteLayout({ children }) {
  return <SiteLayoutClient children={children} />;
}
