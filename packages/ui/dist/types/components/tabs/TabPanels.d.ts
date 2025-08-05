import React, { ReactNode } from "react";
interface TabPanelsProps {
    children: ReactNode;
    className?: string;
    activeTab: number;
}
export declare const TabPanels: React.FC<TabPanelsProps>;
export {};
