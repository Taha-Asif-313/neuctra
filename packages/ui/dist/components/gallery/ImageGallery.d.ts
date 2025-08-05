import { default as React } from 'react';
interface ImageGalleryProps {
    images: {
        src: string;
        alt?: string;
    }[];
    columns?: number;
    gap?: string;
    layout?: "grid" | "masonry";
    lightbox?: boolean;
    className?: string;
}
export declare const ImageGallery: React.FC<ImageGalleryProps>;
export {};
