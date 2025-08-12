import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Button Component - Neuctra UI",
  description:
    "The Button component in Neuctra UI is a customizable React button with icons, loading states, and styling options.",
  keywords: [
    "React Button Component",
    "Custom Button",
    "UI Library Button",
    "Neuctra UI",
    "React UI Components",
  ],
  openGraph: {
    title: "Button Component - Neuctra UI",
    description:
      "Explore the Button component from Neuctra UI — a modern, customizable button with icons, loading states, and full styling control.",
    url: "https://yourdomain.com/components/button",
    siteName: "Neuctra UI",
    type: "article",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <div>{children}</div>

  );
}
