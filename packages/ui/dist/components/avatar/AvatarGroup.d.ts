import { default as React } from 'react';
interface AvatarGroupProps {
    avatars: string[];
    size?: "small" | "medium" | "large";
    maxVisible?: number;
    className?: string;
}
export declare const AvatarGroup: React.FC<AvatarGroupProps>;
export {};
