import React from "react";
interface AvatarWithStatusProps {
    src: string;
    alt?: string;
    status?: "online" | "offline" | "away" | "busy";
    size?: "small" | "medium" | "large";
    className?: string;
}
export declare const AvatarWithStatus: React.FC<AvatarWithStatusProps>;
export {};
