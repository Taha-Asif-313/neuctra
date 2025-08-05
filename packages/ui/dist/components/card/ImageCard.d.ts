import { default as React } from 'react';
interface ImageCardProps {
    src: string;
    title: string;
    description?: string;
    className?: string;
    ImageClassName?: string;
    buttonText?: string;
    buttonOnClick?: () => void;
    buttonClassName?: string;
    buttonIcon?: React.ReactNode;
}
export declare const ImageCard: React.FC<ImageCardProps>;
export {};
