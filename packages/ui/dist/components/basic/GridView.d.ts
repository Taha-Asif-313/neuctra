import { default as React } from 'react';
interface ResponsiveProps<T> {
    sm?: T;
    md?: T;
    lg?: T;
}
interface GridViewProps {
    columns?: ResponsiveProps<number>;
    rows?: ResponsiveProps<number>;
    gap?: ResponsiveProps<string>;
    rowGap?: ResponsiveProps<string>;
    columnGap?: ResponsiveProps<string>;
    padding?: ResponsiveProps<string>;
    alignItems?: ResponsiveProps<"start" | "center" | "end" | "stretch">;
    justifyItems?: ResponsiveProps<"start" | "center" | "end" | "stretch">;
    backgroundColor?: string;
    children: React.ReactNode;
    className?: string;
    width?: ResponsiveProps<string>;
    maxWidth?: ResponsiveProps<string>;
    height?: ResponsiveProps<string>;
}
declare const GridView: React.FC<GridViewProps>;
export default GridView;
