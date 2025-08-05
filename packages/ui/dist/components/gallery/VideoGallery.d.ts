import { default as React } from 'react';
interface VideoGalleryProps {
    videos: {
        src: string;
        poster?: string;
    }[];
    columns?: number;
    gap?: string;
    layout?: "grid" | "masonry";
    lightbox?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
    className?: string;
}
export declare const VideoGallery: React.FC<VideoGalleryProps>;
export {};
