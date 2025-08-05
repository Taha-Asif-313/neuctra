import React from "react";
type AlertType = "success" | "error" | "warning" | "info";
type AlertPosition = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
interface AlertProps {
    title?: string;
    description?: string;
    type?: AlertType;
    dismissible?: boolean;
    onClose?: () => void;
    duration?: number;
    icon?: React.ReactNode;
    actionButton?: React.ReactNode;
    position?: AlertPosition;
    className?: string;
    style?: React.CSSProperties;
}
export declare const Alert: React.FC<AlertProps>;
export {};
