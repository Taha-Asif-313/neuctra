// app/components/CodeBlockServer.tsx
import { codeToHtml } from "shiki";
import type { BundledLanguage } from "shiki";
import CopyButton from "./CopyButton"; // Client component
import CodeBlockClient from "./CodeBlockClient"; // Also client

interface Props {
  children: string;
  lang: BundledLanguage;
  className?: string;
}

export default async function CodeBlockServer({ children, lang, className }: Props) {
  const html = await codeToHtml(children, {
    lang,
    theme: "night-owl",
  });

  return (
    <CodeBlockClient html={html} rawCode={children} className={className} />
  );
}
