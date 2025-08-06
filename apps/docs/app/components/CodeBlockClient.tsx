// app/components/CodeBlockClient.tsx
"use client";

import React from "react";
import CopyButton from "./CopyButton";

interface Props {
  html: string;
  rawCode: string;
  className?: string;
}

export default function CodeBlockClient({ html, rawCode, className }: Props) {
  return (
    <div className={`relative rounded overflow-hidden text-left px-6 py-5 bg-[#011627] ${className}`}>
      <CopyButton code={rawCode} />
      <div
        className="overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
