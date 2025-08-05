import { default as React } from 'react';
interface DrawerButtonProps {
    label?: string;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    onClick?: () => void;
    style?: React.CSSProperties;
}
interface DrawerProps {
    open: boolean;
    onClose?: () => void;
    position?: "left" | "right" | "top" | "bottom";
    width?: string;
    height?: string;
    backgroundColor?: string;
    transitionDuration?: number;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    showCloseButton?: boolean;
    closeButtonStyle?: React.CSSProperties;
}
declare const DrawerButton: React.FC<DrawerButtonProps>;
declare const Drawer: React.FC<DrawerProps>;
export { Drawer, DrawerButton };
