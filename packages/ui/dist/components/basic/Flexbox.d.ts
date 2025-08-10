import { default as React } from 'react';
type ScreenSize = "sm" | "md" | "lg";
interface FlexboxProps {
    direction?: "row" | "column" | Partial<Record<ScreenSize, "row" | "column">>;
    align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    gap?: number | string;
    padding?: number | string;
    backgroundColor?: string;
    width?: string;
    maxWidth?: string;
    height?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}
export declare const Flexbox: React.FC<FlexboxProps>;
export {};
