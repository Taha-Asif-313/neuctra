"use client";

import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { Copy, CopyCheck } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language: string;
  theme?: string;
  className?:string;
}

export default function CodeBlock({
  code,
  language,
  theme = "night-owl",
  className
}: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const highlight = async () => {
      const html = await codeToHtml(code, { lang: language, theme });
      setHighlightedCode(html);
    };
    highlight();
  }, [code, language, theme]);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`${className} relative w-full rounded-md overflow-hidden bg-[#011627] text-white font-mono text-sm shadow-sm`}>
<button
  onClick={copyCode}
  aria-label="Copy code"
  className="absolute top-3 right-4 flex items-center justify-center gap-1 h-8 rounded text-gray-300 transition-colors select-none"
  type="button"
>
  {copied ? <CopyCheck size={20} /> : <Copy size={20} />}
</button>



      <pre
        className="overflow-auto px-4 py-5"
        dangerouslySetInnerHTML={{ __html: highlightedCode ?? "Loading..." }}
      />
    </div>
  );
}
