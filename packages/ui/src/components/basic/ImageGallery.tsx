import React, { useState } from "react";
import { Image } from "./Image"; // adjust path accordingly
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images: { src: string; alt?: string }[];
  columns?: number;
  gap?: string;
  layout?: "grid" | "masonry";
  lightbox?: boolean;
  className?: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  columns = 3,
  gap = "10px",
  layout = "grid",
  lightbox = true,
  className = "",
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = () => setSelectedIndex(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Gallery Grid */}
      <div
        className={`grid ${layout === "masonry" ? "grid-flow-dense" : ""}`}
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => lightbox && setSelectedIndex(index)}
          >
            <Image
              src={image.src}
              alt={image.alt || "Gallery Image"}
              lazyLoad={true}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              style={{ display: "block", width: "100%", height: "auto" }}
              hoverScale={1.05}
              transitionDuration="0.3s"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox && selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          {/* Prev Button */}
          <button
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-black/50"
          >
            <ChevronLeft size={32} />
          </button>

          <Image
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt || "Preview"}
            className="max-w-full max-h-full"
            lazyLoad={true}
            onClick={(e) => e.stopPropagation()} // prevent closing modal on image click
          />

          {/* Next Button */}
          <button
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-black/50"
          >
            <ChevronRight size={32} />
          </button>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-black/50"
            onClick={closeLightbox}
            aria-label="Close preview"
          >
            <X size={28} />
          </button>
        </div>
      )}
    </div>
  );
};
