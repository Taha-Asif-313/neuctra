"use client";

import React from "react";
import { Card } from "@neuctra/ui"; // Adjust path if needed
import CodeBlock from "@/app/components/docs/CodeBlock";
import CodePreviewBlock from "@/app/components/docs/CodePreviewBlock";

const CardDocs: React.FC = () => {
  // Props table columns
  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description", sortable: false },
  ];

  // Props data
  const data = [
    {
      prop: "children",
      type: "React.ReactNode",
      default: "—",
      description: "Content inside the Card component.",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS classes for the outer container.",
    },
    {
      prop: "style",
      type: "React.CSSProperties",
      default: "{}",
      description: "Inline styles applied to the container, merged with internal styles.",
    },
    {
      prop: "background",
      type: "string",
      default: '"#fff"',
      description: "Background color fallback if no background image is provided.",
    },
    {
      prop: "backgroundImage",
      type: "string",
      default: "undefined",
      description: "URL of a background image to display behind content.",
    },
    {
      prop: "backgroundSize",
      type: "string",
      default: '"cover"',
      description: "CSS background-size property for background image.",
    },
    {
      prop: "backgroundPosition",
      type: "string",
      default: '"center"',
      description: "CSS background-position property for background image.",
    },
    {
      prop: "backgroundRepeat",
      type: "string",
      default: '"no-repeat"',
      description: "CSS background-repeat property for background image.",
    },
    {
      prop: "textColor",
      type: "string",
      default: '"#000"',
      description: "Text color inside the card.",
    },
    {
      prop: "borderRadius",
      type: "string | number",
      default: "12",
      description: "Border radius of the card container.",
    },
    {
      prop: "padding",
      type: "string | number",
      default: "24",
      description: "Padding inside the card container.",
    },
    {
      prop: "margin",
      type: "string | number",
      default: "0",
      description: "Margin outside the card container.",
    },
    {
      prop: "maxWidth",
      type: "string | number",
      default: '"100%"',
      description: "Maximum width of the card.",
    },
    {
      prop: "boxShadow",
      type: "string",
      default: '"0 4px 12px rgba(0,0,0,0.1)"',
      description: "Box shadow styling of the card.",
    },
    {
      prop: "border",
      type: "string",
      default: '"none"',
      description: "Border styling of the card.",
    },
    {
      prop: "display",
      type: "string",
      default: '"flex"',
      description: "CSS display property for card layout.",
    },
    {
      prop: "flexDirection",
      type: "string",
      default: '"column"',
      description: "Flex direction inside the card container.",
    },
    {
      prop: "justifyContent",
      type: "string",
      default: '"flex-start"',
      description: "Flex justify-content property inside the card.",
    },
    {
      prop: "alignItems",
      type: "string",
      default: '"stretch"',
      description: "Flex align-items property inside the card.",
    },
    {
      prop: "gap",
      type: "string | number",
      default: "16",
      description: "Gap between flex children inside the card.",
    },
  ];

  // Usage example code snippet
  const exampleCode = `import { Card } from "@neuctra/ui";

<Card
  background="#1f2937"
  textColor="#f9fafb"
  padding={24}
  borderRadius={16}
  boxShadow="0 6px 20px rgba(0,0,0,0.3)"
  maxWidth="400px"
  style={{ margin: "auto" }}
>
  <h2>Welcome to the Card</h2>
  <p>This card supports background images, custom padding, colors, and flex layout.</p>
</Card>`;

  return (
    <div className="py-10 max-w-4xl mx-auto bg-zinc-950 text-gray-100 rounded-md p-6 font-primary">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8">
        <span className="text-primary">Card</span> Component Documentation
      </h1>

      {/* Import */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Import</h2>
        <CodeBlock language="tsx" code={`import { Card } from "@neuctra/ui";`} />
      </section>

      {/* Usage Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage Example</h2>
        <CodePreviewBlock
          language="tsx"
          code={exampleCode}
          previewContent={
            <Card
              background="#1f2937"
              textColor="#f9fafb"
              padding={24}
              borderRadius={16}
              boxShadow="0 6px 20px rgba(0,0,0,0.3)"
              maxWidth="400px"
              style={{ margin: "auto" }}
            >
              <h2 className="text-xl font-semibold mb-2">Welcome to the Card</h2>
              <p>This card supports background images, custom padding, colors, and flex layout.</p>
            </Card>
          }
        />
      </section>

      {/* Props Table */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Props</h2>
        <table className="w-full text-left text-xs text-gray-200 border-collapse">
          <thead>
            <tr className="bg-primary text-white">
              {columns.map(({ label, key }) => (
                <th key={key} className="px-3 py-2 border border-primary">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(({ prop, type, default: def, description }) => (
              <tr key={prop} className="even:bg-zinc-800 odd:bg-zinc-900">
                <td className="border border-primary px-3 py-2 font-mono">{prop}</td>
                <td className="border border-primary px-3 py-2 font-mono">{type}</td>
                <td className="border border-primary px-3 py-2 font-mono">{def}</td>
                <td className="border border-primary px-3 py-2">{description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Behavior */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Behavior Details</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            Card is a flexible container supporting background colors or images, text color,
            padding, margin, border radius, shadow, and borders.
          </li>
          <li>Supports CSS flexbox layout with customizable direction, alignment, and gap.</li>
          <li>Background image properties apply only if <code>backgroundImage</code> is provided.</li>
          <li>Inline styles in <code>style</code> prop override default styles if specified.</li>
          <li>Use <code>className</code> for external CSS styling or utility classes.</li>
        </ul>
      </section>
    </div>
  );
};

export default CardDocs;
