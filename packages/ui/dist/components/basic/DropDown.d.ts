import { default as React } from 'react';
interface Option {
    label: string;
    value: string;
    icon?: React.ReactNode;
}
interface DropdownProps {
    options: Option[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    borderColor?: string;
    backgroundColor?: string;
    textColor?: string;
    hoverColor?: string;
    padding?: string;
    margin?: string;
    dropdownWidth?: string;
    dropdownHeight?: string;
    borderRadius?: string;
    shadow?: string;
    className?: string;
    iconPrefix?: React.ReactNode;
    iconSuffix?: React.ReactNode;
    optionPadding?: string;
    optionGap?: string;
    openAnimation?: string;
    closeAnimation?: string;
}
export declare const Dropdown: React.FC<DropdownProps>;
export {};
