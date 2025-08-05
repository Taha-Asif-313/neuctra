import { default as React } from 'react';
interface ResponsiveProps<T> {
    sm?: T;
    md?: T;
    lg?: T;
}
interface FlexboxProps {
    direction?: ResponsiveProps<"row" | "column">;
    align?: ResponsiveProps<"flex-start" | "flex-end" | "center" | "stretch" | "baseline">;
    justify?: ResponsiveProps<"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">;
    gap?: ResponsiveProps<string>;
    padding?: ResponsiveProps<string>;
    backgroundColor?: string;
    children: React.ReactNode;
    width?: ResponsiveProps<string>;
    maxWidth?: ResponsiveProps<string>;
    height?: ResponsiveProps<string>;
    className?: string;
}
declare const Flexbox: React.FC<FlexboxProps>;
export default Flexbox;
