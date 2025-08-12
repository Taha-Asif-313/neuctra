"use client";

import React from "react";
import { VideoGallery } from "@neuctra/ui"; // Adjust import path if needed
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  SkipBack,
  SkipForward,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import CodeBlock from "@/app/components/docs/CodeBlock";
import CodePreviewBlock from "@/app/components/docs/CodePreviewBlock";

const VideoGalleryDocs: React.FC = () => {
  // Props table columns
  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description", sortable: false },
  ];

  // Combined props (VideoGallery + VideoPlayer)
  const data = [
    {
      prop: "videos",
      type: "Array<{ src: string; poster?: string }>",
      default: "—",
      description: "List of video objects to display in the gallery.",
    },
    {
      prop: "columns",
      type: "number",
      default: "3",
      description: "Default number of columns when no responsive setting applies.",
    },
    {
      prop: "responsiveColumns",
      type: "{ mobile?: number; tablet?: number; desktop?: number }",
      default: "undefined",
      description: "Responsive columns count based on screen size breakpoints.",
    },
    {
      prop: "gap",
      type: "string",
      default: `"10px"`,
      description: "Spacing between video items.",
    },
    {
      prop: "layout",
      type: `"grid" | "masonry"`,
      default: `"grid"`,
      description: "Display layout type for videos.",
    },
    {
      prop: "lightbox",
      type: "boolean",
      default: "true",
      description: "Enables fullscreen modal preview of videos on click.",
    },
    {
      prop: "autoPlay",
      type: "boolean",
      default: "false",
      description: "Automatically plays videos when rendered.",
    },
    {
      prop: "loop",
      type: "boolean",
      default: "false",
      description: "Loops video playback when finished.",
    },
    {
      prop: "muted",
      type: "boolean",
      default: "false",
      description: "Starts videos muted.",
    },
    {
      prop: "controls",
      type: "boolean",
      default: "true",
      description: "Shows the native HTML video controls.",
    },
    {
      prop: "className",
      type: "string",
      default: `""`,
      description: "Custom CSS classes for the gallery container.",
    },
    // VideoPlayer props
    {
      prop: "width",
      type: "string",
      default: `"100%"`,
      description: "Width of the individual video player.",
    },
    {
      prop: "height",
      type: "string",
      default: `"150px"`,
      description: "Height of the video player.",
    },
    {
      prop: "borderRadius",
      type: "string",
      default: `"12px"`,
      description: "Border radius for the video container.",
    },
    {
      prop: "backgroundColor",
      type: "string",
      default: `"#1e1e1e"`,
      description: "Background color behind the video.",
    },
    {
      prop: "primaryColor",
      type: "string",
      default: `"#ff4081"`,
      description: "Theme color for buttons and progress bar.",
    },
    {
      prop: "padding",
      type: "string",
      default: `"16px"`,
      description: "Padding inside the video container.",
    },
    {
      prop: "onClick",
      type: "(e: React.MouseEvent) => void",
      default: "undefined",
      description: "Custom click handler for the video container.",
    },
  ];

  return (
    <div className="py-10 max-w-6xl font-primary mx-auto bg-zinc-950">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8">
        <span className="text-primary">VideoGallery</span> Component Documentation
      </h1>

      {/* Import Statement */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Import</h2>
        <CodeBlock
          language="javascript"
          code={`import { VideoGallery } from "@neuctra/ui";`}
        />
      </section>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage Example</h2>
        <CodePreviewBlock
          language="javascript"
          code={`<VideoGallery
  videos={[
    { src: "/video1.mp4", poster: "/poster1.jpg" },
    { src: "/video2.mp4", poster: "/poster2.jpg" },
    { src: "/video3.mp4" }
  ]}
/>`}
          previewContent={
            <VideoGallery
              videos={[
                { src: "/sample1.mp4", poster: "/poster1.jpg" },
                { src: "/sample2.mp4", poster: "/poster2.jpg" },
                { src: "/sample3.mp4" }
              ]}
            />
          }
        />
      </section>

      {/* Component Description */}
      <section className="mb-16">
        <p className="text-gray-300 leading-relaxed">
          The <code>VideoGallery</code> component provides a responsive, customizable video
          grid with optional lightbox fullscreen viewing. It supports both grid
          and masonry layouts, custom gaps, responsive columns, autoplay, looping,
          muting, and native video controls. Each video uses a built-in player with
          play/pause, skip, seek, volume, loop toggle, and fullscreen functionality.
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

      {/* Usage Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Usage Examples</h2>

        <CodePreviewBlock
          language="javascript"
          code={`<VideoGallery
  videos={[
    { src: "/video1.mp4" },
    { src: "/video2.mp4" },
    { src: "/video3.mp4" }
  ]}
  columns={4}
  gap="20px"
/>`}
          previewContent={
            <VideoGallery
              videos={[
                { src: "/sample1.mp4" },
                { src: "/sample2.mp4" },
                { src: "/sample3.mp4" }
              ]}
              columns={4}
              gap="20px"
            />
          }
          className="mb-8"
        />

        <CodePreviewBlock
          language="javascript"
          code={`<VideoGallery
  videos={[
    { src: "/video1.mp4" },
    { src: "/video2.mp4" }
  ]}
  responsiveColumns={{ mobile: 1, tablet: 2, desktop: 4 }}
/>`}
          previewContent={
            <VideoGallery
              videos={[
                { src: "/sample1.mp4" },
                { src: "/sample2.mp4" }
              ]}
              responsiveColumns={{ mobile: 1, tablet: 2, desktop: 4 }}
            />
          }
          className="mb-8"
        />

        <CodePreviewBlock
          language="javascript"
          code={`<VideoGallery
  videos={[
    { src: "/video1.mp4" },
    { src: "/video2.mp4" }
  ]}
  lightbox={false}
/>`}
          previewContent={
            <VideoGallery
              videos={[
                { src: "/sample1.mp4" },
                { src: "/sample2.mp4" }
              ]}
              lightbox={false}
            />
          }
          className="mb-8"
        />

        <CodePreviewBlock
          language="javascript"
          code={`<VideoGallery
  videos={[
    { src: "/video1.mp4" }
  ]}
  autoPlay
  loop
  muted
/>`}
          previewContent={
            <VideoGallery
              videos={[{ src: "/sample1.mp4" }]}
              autoPlay
              loop
              muted
            />
          }
        />
      </section>

      {/* Behavior Details */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Behavior Details</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Automatically adjusts number of columns based on screen width when <code>responsiveColumns</code> is provided.</li>
          <li>Clicking a video opens the lightbox (if enabled) for fullscreen viewing.</li>
          <li>Lightbox supports navigation with Previous, Next, and Close buttons.</li>
          <li>VideoPlayer includes controls for play/pause, skip ±10s, seek, loop, mute, and fullscreen toggle.</li>
          <li>Custom styling via <code>className</code> and inline styles for <code>VideoPlayer</code> appearance.</li>
        </ul>
      </section>
    </div>
  );
};

export default VideoGalleryDocs;
