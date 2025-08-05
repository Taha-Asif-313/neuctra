import React, { CSSProperties, ReactNode } from "react";
interface BadgeProps {
    text?: string;
    color?: string;
    textColor?: string;
    borderColor?: string;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    rounded?: boolean;
    borderRadius?: string;
    borderWidth?: string;
    fontSize?: string;
    fontWeight?: number | string;
    horizontalPadding?: string;
    verticalPadding?: string;
    margin?: string;
    shadow?: string;
    notificationDot?: boolean;
    dotColor?: string;
    count?: number | string;
    pulse?: boolean;
    style?: CSSProperties;
    onClick?: () => void;
}
export declare const Badge: React.FC<BadgeProps>;
export {};
