import React from "react";
interface DropdownItemProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}
export declare const DropdownItem: React.FC<DropdownItemProps>;
export {};
