import React, { ReactNode } from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    overlayClass?: string;
    modalClass?: string;
    closeButtonClass?: string;
}
export declare const Modal: React.FC<ModalProps>;
export {};
