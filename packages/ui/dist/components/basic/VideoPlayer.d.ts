import { default as React } from 'react';
interface VideoPlayerProps {
    src: string;
    poster?: string;
    autoPlay?: boolean;
    loop?: boolean;
    controls?: boolean;
    muted?: boolean;
    width?: string;
    height?: string;
    borderRadius?: string;
    backgroundColor?: string;
    primaryColor?: string;
    padding?: string;
    className?: string;
}
export declare const VideoPlayer: React.FC<VideoPlayerProps>;
export {};
