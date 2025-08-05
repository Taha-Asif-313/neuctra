import React from "react";
interface ToggleProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    onLabel?: string;
    offLabel?: string;
    onColor?: string;
    offColor?: string;
    size?: "small" | "medium" | "large";
    className?: string;
    onIcon?: React.ReactNode;
    offIcon?: React.ReactNode;
}
export declare const Toggle: React.FC<ToggleProps>;
export {};
