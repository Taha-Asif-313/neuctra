import React from "react";
interface SortableTableHeaderProps {
    label: string;
    onSort: (order: "asc" | "desc") => void;
}
export declare const SortableTableHeader: React.FC<SortableTableHeaderProps>;
export {};
