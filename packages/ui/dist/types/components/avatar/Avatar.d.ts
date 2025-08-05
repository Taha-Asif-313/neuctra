import React from "react";
interface AvatarProps {
    src: string;
    alt?: string;
    size?: "small" | "medium" | "large";
    className?: string;
}
export declare const Avatar: React.FC<AvatarProps>;
export {};
