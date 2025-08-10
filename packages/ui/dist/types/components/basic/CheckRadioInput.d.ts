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
    style?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    iconSize?: number;
    iconCheckedBgColor?: string;
    iconUncheckedBorderColor?: string;
    textColor?: string;
    errorStyle?: React.CSSProperties;
}
export declare const CheckRadio: React.FC<CheckRadioProps>;
export {};
