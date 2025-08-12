import React from "react";
interface AccordationItem {
    title: string;
    content: React.ReactNode;
}
interface AccordationProps {
    items: AccordationItem[];
    allowMultiple?: boolean;
    defaultOpenIndex?: number[];
    borderColor?: string;
    backgroundColor?: string;
    textColor?: string;
    hoverBgColor?: string;
    hoverTextColor?: string;
    paddingVertical?: string;
    paddingHorizontal?: string;
    margin?: string;
    iconOpen?: React.ReactNode;
    iconClose?: React.ReactNode;
    transitionDuration?: string;
    borderRadius?: string;
    shadow?: string;
    contentPadding?: string;
    fontSize?: string;
    fontWeight?: string;
    iconSize?: string;
    contentFontSize?: string;
    contentFontWeight?: string;
    contentBackgroundColor?: string;
    contentTextColor?: string;
    className?: string;
    style?: React.CSSProperties;
}
export declare const Accordation: React.FC<AccordationProps>;
export {};
