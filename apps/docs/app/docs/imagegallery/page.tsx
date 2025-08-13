"use client";

import React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import CodeBlock from "@/app/components/docs/CodeBlock";
import CodePreviewBlock from "@/app/components/docs/CodePreviewBlock";
import { ImageGallery } from "@neuctra/ui";

const ImageGalleryDocs: React.FC = () => {
  // Define columns for the props table
  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description", sortable: false },
  ];

  // Data for ImageGallery component props
  const data = [
    {
      prop: "images",
      type: `{ src: string; alt?: string }[]`,
      default: "—",
      description: "Array of image objects with `src` and optional `alt` text.",
    },
    {
      prop: "columns",
      type: "number",
      default: "3",
      description: "Number of columns to display in the grid layout.",
    },
    {
      prop: "gap",
      type: "string",
      default: `"10px"`,
      description: "CSS gap between grid items (e.g. '10px', '1rem').",
    },
    {
      prop: "layout",
      type: `"grid" | "masonry"`,
      default: `"grid"`,
      description: "Layout style of the gallery. 'grid' creates uniform rows and columns; 'masonry' allows uneven item heights.",
    },
    {
      prop: "lightbox",
      type: "boolean",
      default: "true",
      description: "Enables/disables the lightbox modal for image preview.",
    },
    {
      prop: "className",
      type: "string",
      default: `""`,
      description: "Additional CSS classes to apply to the gallery container.",
    },
  ];

  return (
    <div className="py-10 max-w-5xl font-primary mx-auto bg-zinc-950 text-gray-100">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8">
        <span className="text-primary">ImageGallery</span> Component Documentation
      </h1>

      {/* Import Statement */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Import</h2>
        <CodeBlock
          language="javascript"
          code={`import { ImageGallery } from "@neuctra/ui";`}
        />
      </section>

      {/* Basic Usage Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage Example</h2>
        <CodePreviewBlock
          language="tsx"
          code={`<ImageGallery
  images={[
    { src: "/img1.jpg", alt: "Image 1" },
    { src: "/img2.jpg", alt: "Image 2" },
    { src: "/img3.jpg" },
  ]}
  columns={4}
  gap="12px"
  layout="grid"
  lightbox={true}
/>`}
          previewContent={
            <ImageGallery
              images={[
                { src: "https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg", alt: "Image 1" },
                { src: "https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg", alt: "Image 2" },
                { src: "https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg" },
              ]}
              columns={4}
              gap="12px"
              layout="grid"
              lightbox={true}
            />
          }
        />
      </section>

      {/* Component Description */}
      <section className="mb-16">
        <p className="leading-relaxed text-gray-300">
          The <code>ImageGallery</code> component displays a collection of images in either a grid or masonry layout.
          It supports customization of columns, spacing, and an optional lightbox modal for previewing images in full screen with navigation controls.
          Images can be clicked to open the lightbox, where users can navigate between images using previous and next buttons or close the modal.
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
          language="tsx"
          code={`// Masonry layout with 2 columns and no lightbox
<ImageGallery
  images={[
    { src: "/img1.jpg" },
    { src: "/img2.jpg" },
    { src: "/img3.jpg" },
    { src: "/img4.jpg" }
  ]}
  columns={2}
  gap="8px"
  layout="masonry"
  lightbox={false}
/>`}
          previewContent={
            <ImageGallery
              images={[
                { src: "https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg" },
                { src: "https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg" },
                { src: "https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg" },
                { src: "https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg" }
              ]}
              columns={2}
              gap="8px"
              layout="masonry"
              lightbox={false}
            />
          }
          className="mb-8"
        />

        <CodePreviewBlock
          language="tsx"
          code={`// Grid layout with 5 columns and custom gap
<ImageGallery
  images={[
    { src: "/img1.jpg" },
    { src: "/img2.jpg" },
    { src: "/img3.jpg" },
    { src: "/img4.jpg" },
    { src: "/img5.jpg" }
  ]}
  columns={5}
  gap="16px"
  layout="grid"
/>`}
          previewContent={
            <ImageGallery
              images={[
                { src: "https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg" },
                { src: "https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg" },
                { src: "https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg" },
                { src: "https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg" },
                { src: "https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg" }
              ]}
              columns={5}
              lightbox
              gap="16px"
              layout="masonry"
            />
          }
        />
      </section>

      {/* Behavior Details */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Behavior Details</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Clicking an image opens the lightbox modal (if enabled) showing the selected image in full screen.</li>
          <li>Lightbox modal has previous and next buttons for cycling through images circularly.</li>
          <li>Clicking outside the image or on the close button closes the lightbox modal.</li>
          <li>The masonry layout arranges images with variable heights in a dense column flow.</li>
          <li>The grid layout arranges images evenly into rows and columns.</li>
          <li>Supports custom gaps between images using any valid CSS spacing string.</li>
        </ul>
      </section>
    </div>
  );
};

export default ImageGalleryDocs;
