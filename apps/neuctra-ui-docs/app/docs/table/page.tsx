"use client";

import React from "react";
import { Table } from "@neuctra/ui"; // Adjust the import path as needed
import { ChevronLeft, ChevronRight } from "lucide-react";
import CodeBlock from "@/app/components/docs/CodeBlock";
import CodePreviewBlock from "@/app/components/docs/CodePreviewBlock";

const TableDocs: React.FC = () => {
  // Define columns for props table
  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description", sortable: false },
  ];

  // Data for Table component props
  const data = [
    {
      prop: "columns",
      type: `Array<{ key: string; label: string; sortable?: boolean; icon?: React.ReactNode }>`,
      default: "—",
      description: "Array defining table columns with keys, labels, optional icons, and per-column sorting.",
    },
    {
      prop: "data",
      type: "Array<Record<string, any>>",
      default: "—",
      description: "Array of row data objects keyed by column keys.",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS classes for the table container.",
    },
    {
      prop: "pagination",
      type: "boolean",
      default: "true",
      description: "Enable or disable pagination.",
    },
    {
      prop: "rowsPerPage",
      type: "number",
      default: "5",
      description: "Number of rows displayed per page if pagination is enabled.",
    },
    {
      prop: "colors",
      type: `{
        headerBg?: string;
        headerText?: string;
        rowBg?: string;
        rowText?: string;
        borderColor?: string;
        hoverBg?: string;
        paginationBg?: string;
        paginationText?: string;
      }`,
      default: `{
        headerBg: "#3b82f6",
        headerText: "#ffffff",
        rowBg: "#ffffff",
        rowText: "#000000",
        borderColor: "#d1d5db",
        hoverBg: "#e5e7eb",
        paginationBg: "#d1d5db",
        paginationText: "#000000"
      }`,
      description: "Customize colors for table elements.",
    },
    {
      prop: "headerBorderRadius",
      type: "string",
      default: `"8px"`,
      description: "Border radius for the top corners of the header row.",
    },
    {
      prop: "tableBorderRadius",
      type: "string",
      default: `"8px"`,
      description: "Border radius for the entire table.",
    },
    {
      prop: "sortable",
      type: "boolean",
      default: "true",
      description: "Global toggle to enable or disable sorting for all columns.",
    },
    {
      prop: "bodyAlign",
      type: `"left" | "center" | "right"`,
      default: `"left"`,
      description: "Text alignment for table body cells.",
    },
    {
      prop: "headerAlign",
      type: `"left" | "center" | "right"`,
      default: `"left"`,
      description: "Text alignment for table header cells.",
    },
  ];

  // Example usage code snippet
  const exampleCode = `const columns = [
  { key: "id", label: "ID", sortable: true },
  { key: "name", label: "Name", sortable: true },
  { key: "email", label: "Email" },
];

const data = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" },
  { id: 4, name: "Bob Brown", email: "bob@example.com" },
  { id: 5, name: "Charlie Green", email: "charlie@example.com" },
  { id: 6, name: "David Wilson", email: "david@example.com" },
];

<Table
  columns={columns}
  data={data}
  pagination
  rowsPerPage={3}
  colors={{
    headerBg: "#1f2937",
    headerText: "#f9fafb",
    rowBg: "#374151",
    rowText: "#e5e7eb",
    borderColor: "#4b5563",
    hoverBg: "#4b5563",
    paginationBg: "#2563eb",
    paginationText: "#ffffff",
  }}
  headerBorderRadius="8px"
  tableBorderRadius="8px"
  sortable
  bodyAlign="left"
  headerAlign="left"
/>`;

  // Example columns and data for preview (dark style)
  const previewColumns = [
    { key: "id", label: "ID", sortable: true },
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email" },
  ];

  const previewData = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Bob Brown", email: "bob@example.com" },
    { id: 5, name: "Charlie Green", email: "charlie@example.com" },
    { id: 6, name: "David Wilson", email: "david@example.com" },
  ];

  return (
    <div className="py-10 max-w-6xl font-primary mx-auto bg-zinc-950 text-gray-100 rounded-md p-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8">
        <span className="text-primary">Table</span> Component Documentation
      </h1>

      {/* Import Statement */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Import</h2>
        <CodeBlock language="tsx" code={`import { Table } from "@neuctra/ui";`} />
      </section>

      {/* Live Demo with Code */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage Example</h2>
        <CodePreviewBlock language="tsx" code={exampleCode} previewContent={
          <div style={{ backgroundColor: "#1f2937", padding: "1rem", borderRadius: "8px" }}>
            <Table
              columns={previewColumns}
              data={previewData}
              pagination
              rowsPerPage={3}
              colors={{
                headerBg: "#1f2937",
                headerText: "#f9fafb",
                rowBg: "#374151",
                rowText: "#e5e7eb",
                borderColor: "#4b5563",
                hoverBg: "#4b5563",
                paginationBg: "#2563eb",
                paginationText: "#ffffff",
              }}
              headerBorderRadius="8px"
              tableBorderRadius="8px"
              sortable
              bodyAlign="left"
              headerAlign="left"
            />
          </div>
        } />
      </section>

      {/* Component Description */}
      <section className="mb-16">
        <p className="text-gray-300 leading-relaxed">
          The <code>Table</code> component renders sortable and paginated data in a customizable tabular format.
          It supports per-column sorting, configurable pagination, and extensive styling options via the <code>colors</code> prop.
          You can control text alignment in both header and body cells, and customize border radius for the header row and entire table.
          It handles large datasets efficiently by allowing pagination with customizable rows per page.
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

      {/* Behavior Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Behavior Details</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Click on sortable column headers to toggle ascending/descending sort.</li>
          <li>Pagination controls allow navigation through pages when enabled.</li>
          <li>Row background color changes on hover to improve readability.</li>
          <li>Customizable colors allow full theming for headers, rows, borders, and pagination controls.</li>
          <li>Keyboard accessible sorting via Enter or Space key on column headers.</li>
          <li>Responsive table with horizontal scroll on narrow containers.</li>
        </ul>
      </section>
    </div>
  );
};

export default TableDocs;
