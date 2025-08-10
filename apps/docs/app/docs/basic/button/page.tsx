"use client";
import React from "react";
import { Button } from "@neuctra/ui"; // adjust path as needed
import { ArrowRight, Search } from "lucide-react";

const Page = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Button Component Documentation
      </h1>
      <p style={{ marginBottom: "2rem" }}>
        The <code>Button</code> component is a customizable, reusable button with
        support for inline styles, hover states, loading states, and icons.
      </p>

      {/* Basic Example */}
      <h2>Basic Example</h2>
      <Button onClick={() => alert("Clicked!")}>Click Me</Button>

      {/* Full Width Example */}
      <h2 style={{ marginTop: "2rem" }}>Full Width Button</h2>
      <Button fullWidth onClick={() => alert("Submitted!")}>
        Submit
      </Button>

      {/* Icons Example */}
      <h2 style={{ marginTop: "2rem" }}>Button with Icons</h2>
      <Button iconBefore={<Search />} iconAfter={<ArrowRight />}>
        Search
      </Button>

      {/* Loading Example */}
      <h2 style={{ marginTop: "2rem" }}>Loading State</h2>
      <Button loading loadingText="Processing...">
        Save
      </Button>

      {/* Custom Styling Example */}
      <h2 style={{ marginTop: "2rem" }}>Custom Styling</h2>
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
    </div>
  );
};

export default Page;
