import React, { ReactNode } from "react";
interface Column {
    key: string;
    label: string;
    sortable?: boolean;
    icon?: ReactNode;
}
interface TableProps {
    columns: Column[];
    data: Record<string, any>[];
    className?: string;
    pagination?: boolean;
    rowsPerPage?: number;
    colors?: {
        headerBg?: string;
        headerText?: string;
        rowBg?: string;
        rowText?: string;
        borderColor?: string;
        hoverBg?: string;
        paginationBg?: string;
        paginationText?: string;
    };
    headerBorderRadius?: string;
    tableBorderRadius?: string;
    sortable?: boolean;
    bodyAlign?: "left" | "center" | "right";
}
export declare const Table: React.FC<TableProps>;
export {};
