import React, { useState, useEffect } from "react";
import { Image } from "./Image";
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
  const [responsiveCols, setResponsiveCols] = useState(columns);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const [animKey, setAnimKey] = useState(0); // force animation reset

  // Handle responsive column count
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setResponsiveCols(1);
      } else if (window.innerWidth < 1024) {
        setResponsiveCols(Math.min(2, columns));
      } else {
        setResponsiveCols(columns);
      }
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, [columns]);

  const closeLightbox = () => setSelectedIndex(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setDirection("prev");
    setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
    setAnimKey((k) => k + 1);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setDirection("next");
    setSelectedIndex((prev) => (prev! + 1) % images.length);
    setAnimKey((k) => k + 1);
  };

  return (
    <div style={{ width: "100%" }} className={className}>
      {/* Gallery */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${responsiveCols}, 1fr)`,
          gap,
          gridAutoFlow: layout === "masonry" ? "dense" : "row",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "8px",
              cursor: lightbox ? "pointer" : "default",
            }}
            onClick={() => {
              setSelectedIndex(index);
              setDirection(null);
            }}
          >
            <Image
              src={image.src}
              alt={image.alt || "Gallery Image"}
              lazyLoad={true}
              hoverScale={1.05}
              transitionDuration="0.3s"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        ))}
      </div>

   {/* Lightbox */}
{lightbox && selectedIndex !== null && (
  <div
    onClick={closeLightbox}
    style={{
      position: "fixed",
      inset: "0",
      background: "rgba(0,0,0,0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    }}
    role="dialog"
    aria-modal="true"
  >
    {/* Container for image + nav buttons */}
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "90%",
        maxHeight: "90%",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Prev Button - over image */}
      <button
        onClick={prevImage}
        aria-label="Previous image"
        style={{
          position: "absolute",
          left: "-50px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          background: "rgba(0,0,0,0.5)",
          border: "none",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        <ChevronLeft size={32} />
      </button>

      {/* Animated Image */}
      <div
        key={animKey}
        style={{
          animation:
            direction === "next"
              ? "slideInFromRight 0.4s ease"
              : direction === "prev"
              ? "slideInFromLeft 0.4s ease"
              : "fadeIn 0.3s ease",
        }}
      >
        <Image
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt || "Preview"}
          lazyLoad={true}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Next Button - over image */}
      <button
        onClick={nextImage}
        aria-label="Next image"
        style={{
          position: "absolute",
          right: "0px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          background: "rgba(0,0,0,0.5)",
          border: "none",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        <ChevronRight size={28} />
      </button>
    </div>

    {/* Close Button */}
    <button
      onClick={closeLightbox}
      aria-label="Close preview"
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        color: "white",
        background: "rgba(0,0,0,0.5)",
        border: "none",
        padding: "10px",
        borderRadius: "50%",
        cursor: "pointer",
      }}
    >
      <X size={28} />
    </button>

    {/* Keyframes */}
    <style>{`
      @keyframes slideInFromRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideInFromLeft {
        from { transform: translateX(-100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `}</style>
  </div>
)}

    </div>
  );
};

// Reusable styles
const navButtonStyle = (side: "left" | "right"): React.CSSProperties => ({
  position: "absolute",
  [side]: "20px",
  top: "50%",
  transform: "translateY(-50%)",
  color: "white",
  background: "rgba(0,0,0,0.5)",
  border: "none",
  padding: "10px",
  borderRadius: "50%",
  cursor: "pointer",
});

const closeButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "20px",
  right: "20px",
  color: "white",
  background: "rgba(0,0,0,0.5)",
  border: "none",
  padding: "10px",
  borderRadius: "50%",
  cursor: "pointer",
};
