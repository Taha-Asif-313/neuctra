import React, { CSSProperties, ReactNode } from "react";
interface ListItemType {
    text: string;
    icon?: ReactNode;
    onClick?: () => void;
    subItems?: ListItemType[];
}
interface ListProps {
    title?: string;
    titleIcon?: ReactNode;
    items: ListItemType[];
    type?: "unordered" | "ordered" | "inline";
    bulletColor?: string;
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    fontSize?: string;
    fontWeight?: string | number;
    borderRadius?: string;
    padding?: string;
    spacing?: string;
    className?: string;
    style?: CSSProperties;
}
export declare const List: React.FC<ListProps>;
export {};
