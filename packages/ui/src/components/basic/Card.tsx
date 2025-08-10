import React, { CSSProperties } from "react";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;

  background?: string; // fallback background color
  backgroundImage?: string; // URL for bg image
  backgroundSize?: CSSProperties["backgroundSize"];
  backgroundPosition?: CSSProperties["backgroundPosition"];
  backgroundRepeat?: CSSProperties["backgroundRepeat"];

  textColor?: string;
  borderRadius?: string | number;
  padding?: string | number;
  margin?: string | number;
  maxWidth?: string | number;
  boxShadow?: string;
  border?: string;

  display?: CSSProperties["display"];
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: string | number;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  style = {},

  background = "#fff",
  backgroundImage,
  backgroundSize = "cover",
  backgroundPosition = "center",
  backgroundRepeat = "no-repeat",

  textColor = "#000",
  borderRadius = 12,
  padding = 24,
  margin = 0,
  maxWidth = "100%",
  boxShadow = "0 4px 12px rgba(0,0,0,0.1)",
  border = "none",

  display = "flex",
  flexDirection = "column",
  justifyContent = "flex-start",
  alignItems = "stretch",
  gap = 16,
}) => {
  const cardStyle: CSSProperties = {
    background,
    color: textColor,
    borderRadius,
    padding,
    margin,
    maxWidth,
    boxShadow,
    border,
    display,
    flexDirection,
    justifyContent,
    alignItems,
    gap,
    boxSizing: "border-box",

    // Background image styles if provided
    ...(backgroundImage
      ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize,
          backgroundPosition,
          backgroundRepeat,
        }
      : {}),

    ...style,
  };

  return (
    <div className={className} style={cardStyle}>
      {children}
    </div>
  );
};


