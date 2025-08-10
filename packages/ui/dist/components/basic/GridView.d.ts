import { default as React } from 'react';
type ScreenSize = "sm" | "md" | "lg";
interface GridViewProps {
    columns?: number | Partial<Record<ScreenSize, number>>;
    gap?: string;
    padding?: string;
    alignItems?: "start" | "center" | "end" | "stretch";
    justifyItems?: "start" | "center" | "end" | "stretch";
    backgroundColor?: string;
    width?: string;
    maxWidth?: string;
    height?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}
export declare const GridView: React.FC<GridViewProps>;
export {};
