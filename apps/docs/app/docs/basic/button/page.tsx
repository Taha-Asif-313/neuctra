"use client";
import React from "react";
import { Button, Table } from "@neuctra/ui"; // adjust import path as needed
import { ArrowRight, Calendar, Mail, Search, User } from "lucide-react";
import CodePreviewBlock from "@/app/components/DocsComponent/CodePreviewBlock";
import CodeBlock from "@/app/components/DocsComponent/CodeBlock";

const ButtonDocs = () => {
  const columns = [
    { key: "id", label: "ID", sortable: true },
    { key: "name", label: "Name", sortable: true, icon: <User size={16} /> },
    {
      key: "dob",
      label: "Date of Birth",
      sortable: true,
      icon: <Calendar size={16} />,
    },
    { key: "email", label: "Email", icon: <Mail size={16} /> },
  ];

  const data = [
    {
      id: 1,
      name: "Alice",
      dob: new Date(1990, 5, 24),
      email: "alice@example.com",
    },
    {
      id: 2,
      name: "Bob",
      dob: new Date(1985, 10, 11),
      email: "bob@example.com",
    },
    {
      id: 3,
      name: "Charlie",
      dob: new Date(2000, 0, 5),
      email: "charlie@example.com",
    },
    {
      id: 4,
      name: "Diana",
      dob: new Date(1995, 3, 30),
      email: "diana@example.com",
    },
    {
      id: 5,
      name: "Ethan",
      dob: new Date(1988, 8, 17),
      email: "ethan@example.com",
    },
    {
      id: 6,
      name: "Fiona",
      dob: new Date(1992, 2, 14),
      email: "fiona@example.com",
    },
  ];

  // Format date before rendering in table cells
  const formattedData = data.map((row) => ({
    ...row,
    dob: row.dob.toLocaleDateString(),
  }));
  return (
    <div className=" px-5">
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        Button Component Documentation
      </h1>

      <CodeBlock
      className="mb-20"
        language="javascript"
        code={`Import { Button } from "@neuctra/ui"`}
      />

      <CodePreviewBlock
        previewContent={
          <Button
            backgroundColor="var(--primary)"
            textColor="white"
            onClick={() => alert("Button Clicked!")}
            borderRadius={6}
            paddingHorizontal={30}
            paddingVertical={8}
            fontSize="14px"
            fontWeight={600}
            iconAfter={<ArrowRight className="h-5 w-5" />}
            hoverBgColor="transparent"
            hoverTextColor="white"
            hoverBorderColor="white"
          >
            Get Started
          </Button>
        }
        code={`  
  <Button
    backgroundColor="var(--primary)"
    textColor="white"
    onClick={() => router.push("/docs")}
    borderRadius={6}
    paddingHorizontal={30}
    paddingVertical={8}
    fontSize="14px"
    fontWeight={600}
    iconAfter={<ArrowRight className="h-5 w-5" />}
    hoverBgColor="transparent"
    hoverTextColor="white"
    hoverBorderColor="white"
  >
    Get Started
  </Button>
  
`}
        language="javascript"
      />

      <p  style={{ marginBottom: "2rem" }}>
        The <code>Button</code> component is a fully customizable, reusable
        React button designed for flexibility and ease of use. It supports
        inline styling, hover effects, loading states, icons before and after
        the button text, and more.
      </p>

      <h2>Props</h2>

      <h1>Users Table</h1>
      <Table
        columns={columns}
        data={formattedData}
        rowsPerPage={10}
        pagination={true}
        tableBorderRadius="12px"
        headerBorderRadius="12px"
        bodyAlign="center"
        sortable={false}
        colors={{
          headerBg: "rgba(0, 255, 0, 0.60)", // blue-600
          headerText: "#fff",
          rowBg: "#011627",
          rowText: "white",
          borderColor: "transparent",
          hoverBg: "none",
          paginationBg: "rgba(0, 255, 0, 0.30)",
          paginationText: "#fff",
        }}
      />

      <h2>Usage Examples</h2>

      <h3>Basic Example</h3>
      <Button onClick={() => alert("Clicked!")}>Click Me</Button>

      <h3 style={{ marginTop: "2rem" }}>Full Width Button</h3>
      <Button fullWidth onClick={() => alert("Submitted!")}>
        Submit
      </Button>

      <h3 style={{ marginTop: "2rem" }}>Button with Icons</h3>
      <Button iconBefore={<Search />} iconAfter={<ArrowRight />}>
        Search
      </Button>

      <h3 style={{ marginTop: "2rem" }}>Loading State</h3>
      <Button loading loadingText="Processing...">
        Save
      </Button>

      <h3 style={{ marginTop: "2rem" }}>Disabled Button</h3>
      <Button disabled onClick={() => alert("Won't fire")}>
        Disabled
      </Button>

      <h3 style={{ marginTop: "2rem" }}>Custom Styling</h3>
      <Button
        backgroundColor="#007bff"
        hoverBgColor="#0056b3"
        paddingHorizontal={40}
        paddingVertical={12}
        borderRadius={50}
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      >
        Custom Button
      </Button>

      <h3 style={{ marginTop: "2rem" }}>
        Using <code>className</code> and <code>style</code> for Extra Styling
      </h3>
      <Button
        className="my-custom-class"
        style={{ letterSpacing: "0.05em", textTransform: "uppercase" }}
      >
        Styled with class and inline styles
      </Button>

      <h2 style={{ marginTop: "3rem" }}>Behavior Details</h2>
      <ul>
        <li>
          When <code>loading</code> is <code>true</code>, the button shows a
          spinner animation and the <code>loadingText</code> instead of the
          children and disables the click.
        </li>
        <li>
          On hover, the button changes background, border, and text color based
          on the hover props.
        </li>
        <li>
          When <code>disabled</code>, the button opacity is reduced, pointer
          events disabled, and no hover effects apply.
        </li>
        <li>
          The inline <code>style</code> prop overrides all other styles,
          allowing final custom tweaks.
        </li>
        <li>
          Supports flexible padding and sizing without external CSS
          dependencies.
        </li>
      </ul>

      <h2>Spinner Animation</h2>
      <pre
        style={{
          background: "#f0f0f0",
          padding: "1rem",
          borderRadius: "4px",
          overflowX: "auto",
          marginBottom: "2rem",
        }}
      >
        <code>{`@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}`}</code>
      </pre>
      <p>It creates a rotating border to indicate loading.</p>
    </div>
  );
};

export default ButtonDocs;
