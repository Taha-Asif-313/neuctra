import React from "react";
interface FullScreenModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}
export declare const FullScreenModal: React.FC<FullScreenModalProps>;
export {};
