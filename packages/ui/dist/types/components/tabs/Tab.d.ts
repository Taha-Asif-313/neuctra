import React from "react";
interface TabProps {
    children: React.ReactNode;
    index: number;
    activeTab: number;
    setActiveTab: (index: number) => void;
    className?: string;
}
export declare const Tab: React.FC<TabProps>;
export {};
