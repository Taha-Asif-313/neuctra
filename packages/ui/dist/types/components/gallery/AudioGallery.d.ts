import React from "react";
interface AudioTrack {
    src: string;
    title: string;
}
interface AudioGalleryProps {
    tracks: AudioTrack[];
    className?: string;
    theme?: {
        bg?: string;
        text?: string;
        primary?: string;
        secondary?: string;
    };
    showProgress?: boolean;
    showVolume?: boolean;
    autoplay?: boolean;
    loop?: boolean;
}
export declare const AudioGallery: React.FC<AudioGalleryProps>;
export {};
