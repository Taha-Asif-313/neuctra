"use client";

import React from "react";
import { Dropdown } from "@neuctra/ui"; // Adjust import path as needed
import { Home, Filter } from "lucide-react";
import CodeBlock from "@/app/components/docs/CodeBlock";
import CodePreviewBlock from "@/app/components/docs/CodePreviewBlock";

const DropdownDocs: React.FC = () => {
  // Columns for props table
  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description", sortable: false },
  ];

  // Props data
  const data = [
    {
      prop: "options",
      type: "Option[]",
      default: "—",
      description:
        "Array of option objects with label, value, and optional icon.",
    },
    {
      prop: "value",
      type: "string",
      default: "undefined",
      description: "Controlled selected value.",
    },
    {
      prop: "defaultValue",
      type: "string",
      default: "undefined",
      description: "Initial selected value if uncontrolled.",
    },
    {
      prop: "onChange",
      type: "(value: string) => void",
      default: "undefined",
      description: "Callback triggered when an option is selected.",
    },
    {
      prop: "placeholder",
      type: "string",
      default: `"Select an option"`,
      description: "Text shown when no value is selected.",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the dropdown input.",
    },

    // Styling props
    {
      prop: "borderColor",
      type: "string",
      default: `"#ccc"`,
      description: "Border color of the dropdown.",
    },
    {
      prop: "backgroundColor",
      type: "string",
      default: `"#fff"`,
      description: "Background color of dropdown and options.",
    },
    {
      prop: "textColor",
      type: "string",
      default: `"#333"`,
      description: "Text color inside dropdown button.",
    },
    {
      prop: "hoverColor",
      type: "string",
      default: `"#f0f0f0"`,
      description: "Fallback background color on option hover.",
    },
    {
      prop: "optionHoverStyle",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Custom styles applied to option when hovered.",
    },
    {
      prop: "padding",
      type: "string",
      default: `"12px 16px"`,
      description: "Padding inside dropdown button.",
    },
    {
      prop: "margin",
      type: "string",
      default: `"0 0 1rem 0"`,
      description: "Margin around dropdown container.",
    },
    {
      prop: "dropdownWidth",
      type: "string",
      default: `"100%"`,
      description: "Width of the dropdown container.",
    },
    {
      prop: "dropdownHeight",
      type: "string",
      default: `"200px"`,
      description: "Max height of dropdown options list.",
    },
    {
      prop: "borderRadius",
      type: "string",
      default: `"8px"`,
      description: "Border radius of dropdown and options.",
    },
    {
      prop: "boxShadow",
      type: "string",
      default: `"0 4px 8px rgba(0,0,0,0.1)"`,
      description: "Box shadow for dropdown options list.",
    },
    {
      prop: "optionPadding",
      type: "string",
      default: `"10px 12px"`,
      description: "Padding inside each option.",
    },
    {
      prop: "optionGap",
      type: "string",
      default: `"8px"`,
      description: "Gap between option icon and label.",
    },
    {
      prop: "transitionDuration",
      type: "string",
      default: `"0.25s"`,
      description: "Duration of transition effects.",
    },

    // ClassName & style overrides
    {
      prop: "className",
      type: "string",
      default: `""`,
      description: "Additional CSS classes on the root container.",
    },
    {
      prop: "dropdownStyle",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Inline styles applied to dropdown list container.",
    },
    {
      prop: "dropdownClassName",
      type: "string",
      default: `""`,
      description: "CSS class for dropdown list container.",
    },
    {
      prop: "optionStyle",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Inline styles applied to each option.",
    },
    {
      prop: "optionClassName",
      type: "string",
      default: `""`,
      description: "CSS class for each option.",
    },

    // Icons
    {
      prop: "iconPrefix",
      type: "React.ReactNode",
      default: "undefined",
      description: "Icon or element displayed before selected label.",
    },
    {
      prop: "iconSuffix",
      type: "React.ReactNode",
      default: "undefined",
      description:
        "Icon or element displayed after selected label (default is ▼).",
    },
  ];

  const exampleCode = `
<Dropdown
  options={[
    { label: "Apple", value: "apple", icon: <Home /> },
    { label: "Banana", value: "banana", icon: <Home /> },
    { label: "Mango", value: "mango", icon: <Home /> },
  ]}
  defaultValue="banana"
  onChange={(val) => console.log("Selected:", val)}
  optionHoverStyle={{
    backgroundColor: "#e0f7fa",
    color: "#00796b",
    fontWeight: "600",
  }}
  hoverColor="#ddd"
  padding="10px"
  borderRadius="12px"
  dropdownWidth="600px"
  iconPrefix={<Filter />}
  boxShadow="0 6px 16px rgba(0,0,0,0.15)"
  dropdownStyle={{ maxHeight: "180px", color: "black" }}
  dropdownClassName="custom-dropdown"
  optionClassName="custom-option"
/>
  `;

  return (
    <div className="py-10 max-w-5xl font-primary mx-auto bg-black text-white rounded-lg p-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8">
        <span className="text-primary">Dropdown</span> Component Documentation
      </h1>

      {/* Import */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Dropdown } from "@neuctra/ui";`}
        />
      </section>

      {/* Description */}
      <section className="mb-8">
        <p className="text-gray-300 leading-relaxed">
          The <code>Dropdown</code> component is a fully customizable React
          dropdown menu with support for icons, custom styling, hover effects,
          and controlled or uncontrolled modes.
        </p>
      </section>

      {/* Live Demo with Code */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage Example</h2>
        <CodePreviewBlock
          language="tsx"
          code={exampleCode}
          previewContent={
            <div className="p-6 bg-black rounded">
              <Dropdown
                options={[
                  { label: "Apple", value: "apple", icon: <Home size={16} /> },
                  {
                    label: "Banana",
                    value: "banana",
                    icon: <Home size={16} />,
                  },
                  { label: "Mango", value: "mango", icon: <Home size={16} /> },
                ]}
                defaultValue="banana"
                onChange={(val) => console.log("Selected:", val)}
                optionHoverStyle={{
                  backgroundColor: "#e0f7fa",
                  color: "#00796b",
                }}
                hoverColor="#ddd"
                padding="10px"
                borderRadius="12px"
                dropdownWidth="600px"
                iconPrefix={<Filter size={16} />}
                boxShadow="0 6px 16px rgba(0,0,0,0.15)"
                dropdownStyle={{ maxHeight: "180px", color: "black" }}
                dropdownClassName="custom-dropdown"
                optionClassName="custom-option"
              />
            </div>
          }
        />
      </section>

      {/* Props Table */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Props</h2>
        <table className="w-full text-left text-xs text-white border-collapse">
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
                <td className="border border-primary px-3 py-2 font-mono">
                  {prop}
                </td>
                <td className="border border-primary px-3 py-2 font-mono">
                  {type}
                </td>
                <td className="border border-primary px-3 py-2 font-mono">
                  {def}
                </td>
                <td className="border border-primary px-3 py-2">
                  {description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Usage Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Usage Examples</h2>

        <CodePreviewBlock
          language="tsx"
          code={`<Dropdown
  options={[
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Mango", value: "mango" },
  ]}
  defaultValue="banana"
  onChange={(val) => alert("Selected: " + val)}
/>`}
          previewContent={
            <div className="p-6 bg-black rounded">
              <Dropdown
                options={[
                  { label: "Apple", value: "apple" },
                  { label: "Banana", value: "banana" },
                  { label: "Mango", value: "mango" },
                ]}
                defaultValue="banana"
                onChange={(val) => alert("Selected: " + val)}
              />
            </div>
          }
          className="mb-8"
        />

        <CodePreviewBlock
          language="tsx"
          code={`<Dropdown
  options={[
    { label: "Item 1", value: "item1", icon: <Home /> },
    { label: "Item 2", value: "item2", icon: <Home /> },
  ]}
  iconPrefix={<Filter />}
  borderRadius="16px"
  optionStyle={{ color: "black" }}
  dropdownWidth="400px"
  optionHoverStyle={{
    backgroundColor: "#333",
    color: "#fff",
    fontWeight: "bold",
  }}
/>`}
          previewContent={
            <div className="p-6 bg-black rounded">
              <Dropdown
                options={[
                  { label: "Item 1", value: "item1", icon: <Home size={16} /> },
                  { label: "Item 2", value: "item2", icon: <Home size={16} /> },
                ]}
                iconPrefix={<Filter size={16} />}
                borderRadius="16px"
                optionStyle={{ color: "black" }}
                dropdownWidth="400px"
                optionHoverStyle={{
                  backgroundColor: "#333",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              />
            </div>
          }
        />
      </section>

      {/* Behavior Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Behavior Details</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            Supports controlled (via <code>value</code>) and uncontrolled (via{" "}
            <code>defaultValue</code>) modes.
          </li>
          <li>Options display optional icons next to labels.</li>
          <li>
            Hover styles can be customized via <code>optionHoverStyle</code> or{" "}
            <code>hoverColor</code>.
          </li>
          <li>Dropdown closes when clicking outside or selecting an option.</li>
          <li>
            Supports custom icons before and after selected label via{" "}
            <code>iconPrefix</code> and <code>iconSuffix</code>.
          </li>
          <li>Fully customizable styling via props and className overrides.</li>
        </ul>
      </section>
    </div>
  );
};

export default DropdownDocs;
