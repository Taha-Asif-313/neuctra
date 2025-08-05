import React, { CSSProperties } from "react";
interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    iconBefore?: React.ReactNode;
    iconAfter?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
    fullWidth?: boolean;
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
    paddingHorizontal?: number;
    paddingVertical?: number;
    fontSize?: string;
    fontWeight?: string | number;
    borderRadius?: number;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    hoverBgColor?: string;
    hoverTextColor?: string;
    hoverBorderColor?: string;
    boxShadow?: string;
}
export declare const Button: React.FC<ButtonProps>;
export {};
