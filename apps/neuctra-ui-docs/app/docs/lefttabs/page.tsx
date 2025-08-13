"use client";

import React from "react";
import { LeftTabs } from "@neuctra/ui"; // Adjust import path as needed
import CodeBlock from "@/app/components/docs/CodeBlock";
import CodePreviewBlock from "@/app/components/docs/CodePreviewBlock";
import { Calendar, Mail, User } from "lucide-react";

const LeftTabsDocs: React.FC = () => {
  // Define columns for the props table
  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description", sortable: false },
  ];

  // Data for LeftTabs component props (inherited from TabsBaseProps)
  const data = [
    {
      prop: "tabs",
      type: "TabItem[]",
      default: "—",
      description: `Array of tab objects. Each tab should have:
        - label: ReactNode (tab label)
        - content: ReactNode (tab panel content)
        - icon?: ReactNode (optional icon)`,
    },
    {
      prop: "defaultActive",
      type: "number",
      default: "0",
      description: "Index of the tab to be active initially.",
    },
    {
      prop: "activeTabClassName",
      type: "string",
      default: '""',
      description: "CSS class applied to the active tab button.",
    },
    {
      prop: "inactiveTabClassName",
      type: "string",
      default: '""',
      description: "CSS class applied to inactive tab buttons.",
    },
    {
      prop: "tabContainerClassName",
      type: "string",
      default: '""',
      description: "CSS class applied to the tabs container.",
    },
    {
      prop: "contentContainerClassName",
      type: "string",
      default: '""',
      description: "CSS class applied to the content container.",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "CSS class applied to the outer wrapper div.",
    },
    {
      prop: "activeTabStyle",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Inline styles applied to the active tab.",
    },
    {
      prop: "inactiveTabStyle",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Inline styles applied to inactive tabs.",
    },
    {
      prop: "tabContainerStyle",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Inline styles applied to the tabs container.",
    },
    {
      prop: "contentContainerStyle",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Inline styles applied to the content container.",
    },
    {
      prop: "style",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Inline styles applied to the outer wrapper div.",
    },
    {
      prop: "tabsWidth",
      type: "string | number",
      default: '"240px"',
      description: "Width of the tabs container (for vertical tabs).",
    },
    {
      prop: "tabGap",
      type: "number",
      default: "8",
      description: "Gap between tabs in pixels.",
    },
    {
      prop: "tabPadding",
      type: "string",
      default: '"12px 16px"',
      description: "Padding inside each tab button.",
    },
    {
      prop: "tabBorderRadius",
      type: "number",
      default: "12",
      description: "Border radius for tab buttons.",
    },
    {
      prop: "primaryColor",
      type: "string",
      default: '"#2563eb"',
      description: "Primary color used for active tab background and shadows.",
    },
    {
      prop: "textColor",
      type: "string",
      default: '"#374151"',
      description: "Text color of inactive tabs.",
    },
    {
      prop: "backgroundColor",
      type: "string",
      default: '"#ffffff"',
      description: "Background color of the tabs container.",
    },
    {
      prop: "hoverTextColor",
      type: "string",
      default: '"#1e40af"',
      description: "Text color when hovering inactive tabs.",
    },
    {
      prop: "responsiveBreakpoint",
      type: "number",
      default: "768",
      description: "Viewport width in px to switch to mobile drawer mode.",
    },
    {
      prop: "showDrawerLabel",
      type: "string",
      default: '"Select Tab"',
      description: "Label shown on drawer button in mobile vertical tabs.",
    },
  ];

  return (
    <div className="py-10 max-w-5xl font-primary mx-auto bg-zinc-950">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8">
        <span className="text-primary">LeftTabs</span> Component Documentation
      </h1>

      {/* Import Statement */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Import</h2>
        <CodeBlock language="javascript" code={`import { LeftTabs } from "@neuctra/ui";`} />
      </section>

      {/* Basic Usage Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage Example</h2>
        <CodePreviewBlock
          language="tsx"
          code={`<LeftTabs
  tabs={[
    { label: "Profile", icon: <User />, content: <div>Your profile content</div> },
    { label: "Messages", icon: <Mail />, content: <div>Your messages content</div> },
    { label: "Calendar", icon: <Calendar />, content: <div>Calendar events here</div> },
  ]}
  defaultActive={0}
  tabsWidth="250px"
  primaryColor="#007bff"
  textColor="#444"
  hoverTextColor="#0056b3"
  tabGap={12}
/>`}
          previewContent={
            <div style={{ maxWidth: 600, height: 300 }}>
              <LeftTabs
                tabs={[
                  { label: "Profile", icon: <User />, content: <div>Your profile content</div> },
                  { label: "Messages", icon: <Mail />, content: <div>Your messages content</div> },
                  { label: "Calendar", icon: <Calendar />, content: <div>Calendar events here</div> },
                ]}
                defaultActive={0}
                tabsWidth="250px"
                primaryColor="#007bff"
                textColor="#444"
                hoverTextColor="#0056b3"
                tabGap={12}
              />
            </div>
          }
        />
      </section>

      {/* Component Description */}
      <section className="mb-16">
        <p className="text-gray-300 leading-relaxed">
          The <code>LeftTabs</code> component provides a vertical tab navigation
          UI positioned on the left side of the container. It supports icons,
          custom styling via classNames and inline styles, and is responsive —
          collapsing into a drawer menu on smaller screens.
        </p>
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

      {/* Usage Examples Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Usage Examples</h2>

        <CodePreviewBlock
          language="tsx"
          code={`<LeftTabs
  tabs={[
    { label: "Tab 1", content: <div>Content 1</div> },
    { label: "Tab 2", content: <div>Content 2</div> },
  ]}
  defaultActive={1}
/>`}
          previewContent={
            <div style={{ maxWidth: 400, height: 180 }}>
              <LeftTabs
                tabs={[
                  { label: "Tab 1", content: <div>Content 1</div> },
                  { label: "Tab 2", content: <div>Content 2</div> },
                ]}
                defaultActive={1}
              />
            </div>
          }
          className="mb-8"
        />

        <CodePreviewBlock
          language="tsx"
          code={`<LeftTabs
  tabs={[
    { label: "Home", icon: <User />, content: <div>Home content</div> },
    { label: "Inbox", icon: <Mail />, content: <div>Inbox content</div> },
  ]}
  primaryColor="#16a34a"
  tabGap={10}
  tabsWidth="220px"
/>`}
          previewContent={
            <div style={{ maxWidth: 400, height: 180 }}>
              <LeftTabs
                tabs={[
                  { label: "Home", icon: <User />, content: <div>Home content</div> },
                  { label: "Inbox", icon: <Mail />, content: <div>Inbox content</div> },
                ]}
                primaryColor="#16a34a"
                tabGap={10}
                tabsWidth="220px"
              />
            </div>
          }
        />
      </section>

      {/* Behavior Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Behavior Details</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>The component automatically detects screen size to switch to a drawer menu on mobile.</li>
          <li>Tabs support optional icons displayed next to labels.</li>
          <li>Active tabs highlight with a customizable primary color background and box shadow.</li>
          <li>Hovering inactive tabs changes their background and text color.</li>
          <li>Supports full styling customization via classNames and inline styles.</li>
        </ul>
      </section>
    </div>
  );
};

export default LeftTabsDocs;
