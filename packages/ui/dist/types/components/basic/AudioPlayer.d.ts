import React from "react";
interface AudioPlayerProps {
    src: string;
    thumbnail?: string;
    autoPlay?: boolean;
    loop?: boolean;
    backgroundColor?: string;
    primaryColor?: string;
    secondaryColor?: string;
    borderRadius?: string;
    className?: string;
    padding?: string;
    width?: string;
}
export declare const AudioPlayer: React.FC<AudioPlayerProps>;
export {};
