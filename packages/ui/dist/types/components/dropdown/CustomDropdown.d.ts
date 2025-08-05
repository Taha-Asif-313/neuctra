import React from "react";
interface DropdownProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}
export declare const CustomDropdown: React.FC<DropdownProps>;
export {};
