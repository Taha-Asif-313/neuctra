"use client";

import React from "react";
import { VideoPlayer } from "@neuctra/ui"; // Adjust import path as needed
import CodeBlock from "@/app/components/docs/CodeBlock";
import CodePreviewBlock from "@/app/components/docs/CodePreviewBlock";

const VideoPlayerDocs: React.FC = () => {
  // Define columns for the props table
  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description", sortable: false },
  ];

  // Props data for VideoPlayer component
  const data = [
    {
      prop: "src",
      type: "string",
      default: "—",
      description: "The video source URL.",
    },
    {
      prop: "poster",
      type: "string",
      default: "undefined",
      description: "Optional image URL to show before the video plays.",
    },
    {
      prop: "autoPlay",
      type: "boolean",
      default: "false",
      description: "Whether the video should start playing automatically.",
    },
    {
      prop: "loop",
      type: "boolean",
      default: "false",
      description: "Whether the video should loop when ended.",
    },
    {
      prop: "controls",
      type: "boolean",
      default: "false",
      description: "Show native video controls (custom controls are used by default).",
    },
    {
      prop: "muted",
      type: "boolean",
      default: "false",
      description: "Whether the video is muted initially.",
    },
    {
      prop: "width",
      type: "string",
      default: '"100%"',
      description: "Width of the video player container.",
    },
    {
      prop: "height",
      type: "string",
      default: '"150px"',
      description: "Height of the video element.",
    },
    {
      prop: "borderRadius",
      type: "string",
      default: '"12px"',
      description: "Border radius applied to the video player container and video element.",
    },
    {
      prop: "backgroundColor",
      type: "string",
      default: '"#1e1e1e"',
      description: "Background color of the video player container.",
    },
    {
      prop: "primaryColor",
      type: "string",
      default: '"#ff4081"',
      description: "Primary color used for controls and progress bar.",
    },
    {
      prop: "padding",
      type: "string",
      default: '"16px"',
      description: "Padding inside the video player container.",
    },
    {
      prop: "className",
      type: "string",
      default: "undefined",
      description: "Optional CSS class for the outer container.",
    },
  ];

  return (
    <div className="py-10 max-w-5xl font-primary mx-auto bg-zinc-950">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8">
        <span className="text-primary">VideoPlayer</span> Component Documentation
      </h1>

      {/* Import Statement */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Import</h2>
        <CodeBlock language="javascript" code={`import { VideoPlayer } from "@neuctra/ui";`} />
      </section>

      {/* Basic Usage Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage Example</h2>
        <CodePreviewBlock
          language="tsx"
          code={`<VideoPlayer
  src="https://www.w3schools.com/html/mov_bbb.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  autoPlay={false}
  loop={false}
  muted={false}
  width="100%"
  height="200px"
  primaryColor="#007bff"
/>`}
          previewContent={
            <div style={{ maxWidth: 600 }}>
              <VideoPlayer
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
                autoPlay={false}
                loop={false}
                muted={false}
                width="100%"
                height="200px"
                primaryColor="#007bff"
              />
            </div>
          }
        />
      </section>

      {/* Component Description */}
      <section className="mb-16">
        <p className="text-gray-300 leading-relaxed">
          The <code>VideoPlayer</code> component provides a customizable video player
          with play/pause, skip, mute, loop, and fullscreen controls. It supports
          custom styling via props such as <code>primaryColor</code>, <code>backgroundColor</code>,
          and <code>borderRadius</code>. The player handles video time updates, seeking,
          and volume control internally.
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
          code={`<VideoPlayer
  src="https://www.w3schools.com/html/mov_bbb.mp4"
  autoPlay
  muted
  width="100%"
  height="250px"
  primaryColor="#10b981"
/>`}
          previewContent={
            <div style={{ maxWidth: 600 }}>
              <VideoPlayer
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                autoPlay
                muted
                width="100%"
                height="250px"
                primaryColor="#10b981"
              />
            </div>
          }
          className="mb-8"
        />

        <CodePreviewBlock
          language="tsx"
          code={`<VideoPlayer
  src="https://www.w3schools.com/html/movie.mp4"
  poster="https://via.placeholder.com/640x360.png?text=Sample+Video"
  loop
  controls={false}
  borderRadius="20px"
  backgroundColor="#000"
  primaryColor="#ef4444"
  padding="24px"
/>`}
          previewContent={
            <div style={{ maxWidth: 600 }}>
              <VideoPlayer
                src="https://www.w3schools.com/html/movie.mp4"
                poster="https://via.placeholder.com/640x360.png?text=Sample+Video"
                loop
                controls={false}
                borderRadius="20px"
                backgroundColor="#000"
                primaryColor="#ef4444"
                padding="24px"
              />
            </div>
          }
        />
      </section>

      {/* Behavior Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Behavior Details</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Supports play/pause toggle with a large centered button.</li>
          <li>Allows skipping forward and backward by 10 seconds.</li>
          <li>Shows current time and total duration with a clickable seek bar.</li>
          <li>Supports mute/unmute and volume control starting at 50% volume.</li>
          <li>Supports toggling looping of the video.</li>
          <li>Supports fullscreen mode with toggle button.</li>
          <li>Customizable styling via <code>primaryColor</code>, <code>backgroundColor</code>, <code>borderRadius</code>, and padding.</li>
          <li>Fully responsive and styled with clean UI and intuitive controls.</li>
        </ul>
      </section>
    </div>
  );
};

export default VideoPlayerDocs;
