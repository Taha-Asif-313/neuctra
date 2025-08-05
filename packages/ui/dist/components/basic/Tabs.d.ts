import { default as React, CSSProperties } from 'react';
interface TabItem {
    label: React.ReactNode;
    content: React.ReactNode;
    icon?: React.ReactNode;
}
interface TabsBaseProps {
    tabs: TabItem[];
    defaultActive?: number;
    activeTabClassName?: string;
    inactiveTabClassName?: string;
    tabContainerClassName?: string;
    contentContainerClassName?: string;
    className?: string;
    activeTabStyle?: CSSProperties;
    inactiveTabStyle?: CSSProperties;
    tabContainerStyle?: CSSProperties;
    contentContainerStyle?: CSSProperties;
    style?: CSSProperties;
    tabsWidth?: string | number;
    tabGap?: number;
    tabPadding?: string;
    tabBorderRadius?: number;
    primaryColor?: string;
    textColor?: string;
    backgroundColor?: string;
    hoverTextColor?: string;
    responsiveBreakpoint?: number;
    showDrawerLabel?: string;
}
export declare const LeftTabs: React.FC<TabsBaseProps>;
export declare const TopTabs: React.FC<TabsBaseProps>;
export declare const RightTabs: React.FC<TabsBaseProps>;
export {};
