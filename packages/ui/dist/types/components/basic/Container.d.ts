import React from "react";
interface ResponsiveProps<T> {
    sm?: T;
    md?: T;
    lg?: T;
}
interface ContainerProps {
    display?: ResponsiveProps<"block" | "flex" | "grid" | "inline-block">;
    flexDirection?: ResponsiveProps<"row" | "column" | "row-reverse" | "column-reverse">;
    justifyContent?: ResponsiveProps<"flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly">;
    alignItems?: ResponsiveProps<"flex-start" | "center" | "flex-end" | "stretch" | "baseline">;
    gridTemplateColumns?: ResponsiveProps<string>;
    gridTemplateRows?: ResponsiveProps<string>;
    gap?: ResponsiveProps<string>;
    rowGap?: ResponsiveProps<string>;
    columnGap?: ResponsiveProps<string>;
    width?: ResponsiveProps<string>;
    maxWidth?: ResponsiveProps<string>;
    height?: ResponsiveProps<string>;
    padding?: ResponsiveProps<string>;
    margin?: ResponsiveProps<string>;
    textAlign?: ResponsiveProps<"left" | "center" | "right">;
    backgroundColor?: string;
    border?: ResponsiveProps<string>;
    borderRadius?: ResponsiveProps<string>;
    boxShadow?: ResponsiveProps<string>;
    overflow?: ResponsiveProps<"visible" | "hidden" | "scroll" | "auto">;
    children: React.ReactNode;
    className?: string;
}
declare const Container: React.FC<ContainerProps>;
export default Container;
