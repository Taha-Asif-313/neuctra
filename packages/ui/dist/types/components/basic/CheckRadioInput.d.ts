import React from "react";
interface Option {
    label: string;
    value: string;
}
interface CheckRadioProps {
    type: "checkbox" | "radio";
    name?: string;
    options: Option[];
    selectedValues?: string[] | string;
    onChange?: (value: string | string[]) => void;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    error?: string;
    className?: string;
    customIcon?: (checked: boolean) => React.ReactNode;
}
export declare const CheckRadio: React.FC<CheckRadioProps>;
export {};
