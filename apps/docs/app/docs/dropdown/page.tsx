"use client";

import React, { useState } from "react";
import { Dropdown } from "@neuctra/ui"; // Adjust import path as needed
import { ChevronDown, User, Settings } from "lucide-react";
import CodeBlock from "@/app/components/docs/CodeBlock";
import CodePreviewBlock from "@/app/components/docs/CodePreviewBlock";

const DropdownDocs: React.FC = () => {
  const [selected, setSelected] = useState<string | undefined>();

  const options = [
    { label: "Profile", value: "profile", icon: <User size={16} /> },
    { label: "Settings", value: "settings", icon: <Settings size={16} /> },
    { label: "Logout", value: "logout" },
  ];

  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description", sortable: false },
  ];

  const dropdownProps = [
    { prop: "options", type: "Option[]", default: "—", description: "Array of options with `label`, `value`, and optional `icon`." },
    { prop: "value", type: "string", default: "undefined", description: "Controlled selected value." },
    { prop: "defaultValue", type: "string", default: "undefined", description: "Initial selected value for uncontrolled mode." },
    { prop: "onChange", type: "(value: string) => void", default: "undefined", description: "Callback when selection changes." },
    { prop: "placeholder", type: "string", default: `"Select an option"`, description: "Placeholder text when no option selected." },
    { prop: "disabled", type: "boolean", default: "false", description: "Disable dropdown interaction." },
    // Styling props
    { prop: "borderColor", type: "string", default: `"#ccc"`, description: "Border color of the dropdown." },
    { prop: "backgroundColor", type: "string", default: `"#fff"`, description: "Background color of dropdown and options." },
    { prop: "textColor", type: "string", default: `"#333"`, description: "Text color inside the dropdown button." },
    { prop: "hoverColor", type: "string", default: `"#f0f0f0"`, description: "Background color on option hover or selection." },
    { prop: "padding", type: "string", default: `"12px 16px"`, description: "Padding inside the dropdown button." },
    { prop: "margin", type: "string", default: `"0 0 1rem 0"`, description: "Margin around the dropdown container." },
    { prop: "dropdownWidth", type: "string", default: `"100%"`, description: "Width of the dropdown container." },
    { prop: "dropdownHeight", type: "string", default: `"200px"`, description: "Max height of the options list with vertical scroll." },
    { prop: "borderRadius", type: "string", default: `"8px"`, description: "Border radius for dropdown and options." },
    { prop: "boxShadow", type: "string", default: `"0 4px 8px rgba(0,0,0,0.1)"`, description: "Box shadow for dropdown and options." },
    { prop: "optionPadding", type: "string", default: `"10px 12px"`, description: "Padding for each option item." },
    { prop: "optionGap", type: "string", default: `"8px"`, description: "Gap between icon and label inside options." },
    { prop: "transitionDuration", type: "string", default: `"0.25s"`, description: "Transition duration for hover effects." },
    // Classes and styles
    { prop: "className", type: "string", default: `""`, description: "CSS class for the outer dropdown container." },
    { prop: "dropdownStyle", type: "React.CSSProperties", default: "undefined", description: "Inline style override for the dropdown list." },
    { prop: "dropdownClassName", type: "string", default: `""`, description: "CSS class for the dropdown list." },
    { prop: "optionStyle", type: "React.CSSProperties", default: "undefined", description: "Inline style override for each option item." },
    { prop: "optionClassName", type: "string", default: `""`, description: "CSS class for each option item." },
    // Icons
    { prop: "iconPrefix", type: "React.ReactNode", default: "undefined", description: "Icon displayed before the selected value." },
    { prop: "iconSuffix", type: "React.ReactNode", default: `"▼"`, description: "Icon displayed after the selected value." },
  ];

  const exampleCode = `import React, { useState } from "react";
import { Dropdown } from "@neuctra/ui";
import { User, Settings, ChevronDown } from "lucide-react";

const options = [
  { label: "Profile", value: "profile", icon: <User size={16} /> },
  { label: "Settings", value: "settings", icon: <Settings size={16} /> },
  { label: "Logout", value: "logout" },
];

export default function Example() {
  const [selected, setSelected] = useState();

  return (
    <Dropdown
      options={options}
      value={selected}
      onChange={setSelected}
      placeholder="Choose an option"
      iconPrefix={<User size={16} />}
      iconSuffix={<ChevronDown size={16} />}
    />
  );
}
`;

  return (
    <div className="py-10 max-w-5xl font-primary mx-auto">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8">
        <span className="text-primary">Dropdown</span> Component Documentation
      </h1>

      {/* Import Statement */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Import</h2>
        <CodeBlock language="typescript" code={`import { Dropdown } from "@neuctra/ui";`} />
      </section>

      {/* Live Demo with Code */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage Example</h2>
        <CodePreviewBlock
          language="tsx"
          code={exampleCode}
          previewContent={
            <Dropdown
              options={options}
              value={selected}
              onChange={setSelected}
              optionStyle={{ background: "black" }}
              hoverColor="black"
              placeholder="Choose an option"
              iconPrefix={<User size={16} />}
              iconSuffix={<ChevronDown size={16} />}
            />
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
                <th key={key} className="px-3 py-2 border border-primary">{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dropdownProps.map(({ prop, type, default: def, description }) => (
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

      {/* Description */}
      <section className="mb-16 text-gray-800 leading-relaxed">
        <p>
          The <code>Dropdown</code> component is a customizable select menu allowing users to choose one option from a list.
          It supports controlled and uncontrolled modes, icons on options, and extensive styling customization including colors,
          padding, shadows, and transitions.
        </p>
        <p className="mt-4">
          Clicking the dropdown button toggles the options list, which supports keyboard and mouse navigation with accessible roles.
          Clicking outside closes the list automatically.
        </p>
      </section>
    </div>
  );
};

export default DropdownDocs;
