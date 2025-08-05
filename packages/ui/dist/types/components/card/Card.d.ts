import React from "react";
interface CardProps {
    children?: React.ReactNode;
    className?: string;
    contentClassName?: string;
    background?: string;
    textColor?: string;
    borderRadius?: string;
    padding?: string;
    shadow?: string;
    imageSrc?: string;
    imageAlt?: string;
    imageWidth?: string;
    imageHeight?: string;
    svgIcon?: React.ReactNode;
    useSvgInsteadOfImage?: boolean;
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonOnClick?: () => void;
    buttonClassName?: string;
    buttonIcon?: React.ReactNode;
    margin?: string;
}
export declare const Card: React.FC<CardProps>;
export {};
