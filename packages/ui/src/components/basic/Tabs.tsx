import React, { useState, CSSProperties, useEffect } from "react";

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
  responsiveBreakpoint?: number; // px (default 768)
  showDrawerLabel?: string; // Optional label for mobile drawer
}

const BaseTabs: React.FC<
  TabsBaseProps & { tabPosition: "left" | "top" | "right" }
> = ({
  tabs,
  defaultActive = 0,
  tabPosition,
  activeTabClassName = "",
  inactiveTabClassName = "",
  tabContainerClassName = "",
  contentContainerClassName = "",
  className = "",
  activeTabStyle,
  inactiveTabStyle,
  tabContainerStyle,
  contentContainerStyle,
  style,
  tabsWidth = "240px",
  tabGap = 8,
  tabPadding = "12px 16px",
  tabBorderRadius = 12,
  primaryColor = "#2563eb",
  textColor = "#374151",
  backgroundColor = "#ffffff",
  hoverTextColor = "#1e40af",
  responsiveBreakpoint = 768,
  showDrawerLabel = "Select Tab",
}) => {
  const [activeTab, setActiveTab] = useState(defaultActive);
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= responsiveBreakpoint);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, [responsiveBreakpoint]);

  const isVertical = tabPosition === "left" || tabPosition === "right";
  const containerDirection = isVertical
    ? isMobile
      ? "column"
      : tabPosition === "left"
      ? "row"
      : "row-reverse"
    : "column";

  const containerStyles: CSSProperties = {
    display: "flex",
    flexDirection: containerDirection,
    width: "100%",
    height: "100%",
    backgroundColor,
    ...(isVertical && !isMobile
      ? {} // No wrap needed in horizontal layout
      : { flexWrap: "wrap" }),
    ...style,
  };

  const tabsContainerStyles: CSSProperties = {
    width: isVertical && !isMobile ? tabsWidth : "100%",
    display: "flex",
    flexDirection: isVertical && !isMobile ? "column" : "row",
    justifyContent: !isVertical && tabPosition === "top" ? "center" : undefined,
    gap: tabGap,
    padding: 8,
    boxSizing: "border-box",
    ...tabContainerStyle,
  };

  const contentStyles: CSSProperties = {
    flexGrow: 1,
    padding: 24,
    background: "#f9fafb",
    boxSizing: "border-box",
    minWidth: 0,
    ...(isVertical && !isMobile
      ? { width: "calc(100% - " + tabsWidth + ")" } // content takes rest of width
      : { width: "100%" }),
    ...contentContainerStyle,
  };

  const baseTabStyles: CSSProperties = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: tabPadding,
    borderRadius: tabBorderRadius,
    border: "none",
    backgroundColor: "transparent",
    fontWeight: 500,
    transition: "all 0.2s ease",
    width: isVertical && !isMobile ? "100%" : "auto",
    marginBottom: isVertical && !isMobile ? tabGap : 0,
    marginRight: !isVertical || isMobile ? tabGap : 0,
    justifyContent: "flex-start",
  };

  const activeStyles: CSSProperties = {
    backgroundColor: primaryColor,
    color: "#fff",
    fontWeight: 700,
    boxShadow: `0 2px 10px ${primaryColor}55`,
    ...activeTabStyle,
  };

  const inactiveStyles: CSSProperties = {
    backgroundColor: "transparent",
    color: textColor,
    ...inactiveTabStyle,
  };

  const hoverStyles: CSSProperties = {
    backgroundColor: `${primaryColor}22`,
    color: hoverTextColor,
  };

  return (
    <div className={className} style={containerStyles}>
      {/* Media Query Styles */}
      <style>
        {`
        @media (max-width: ${responsiveBreakpoint}px) {
          .custom-tab-drawer-button {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
          }
          .custom-tab-mobile-drawer {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-top: 8px;
            width: 100%;
            animation: slideDown 0.3s ease-out;
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        }
        `}
      </style>

      {/* Responsive Drawer for Vertical Tabs */}
      {isMobile && isVertical ? (
        <div style={{ width: "100%", marginBottom: 12 }}>
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            style={{
              ...baseTabStyles,
              ...activeStyles,
              justifyContent: "space-between",
              width: "100%",
            }}
            className="custom-tab-drawer-button"
          >
            <span>{showDrawerLabel}</span>
            <span style={{ fontSize: 18 }}>☰</span>
          </button>
          {drawerOpen && (
            <div className="custom-tab-mobile-drawer">
              {tabs.map((tab, idx) => {
                const isActive = idx === activeTab;
                const isHovered = hoveredTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveTab(idx);
                      setDrawerOpen(false);
                    }}
                    onMouseEnter={() => setHoveredTab(idx)}
                    onMouseLeave={() => setHoveredTab(null)}
                    className={
                      isActive ? activeTabClassName : inactiveTabClassName
                    }
                    style={{
                      ...baseTabStyles,
                      ...(isActive ? activeStyles : inactiveStyles),
                      ...(isHovered && !isActive ? hoverStyles : {}),
                    }}
                  >
                    {tab.icon && <span>{tab.icon}</span>}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <nav
          className={tabContainerClassName}
          style={tabsContainerStyles}
          aria-label="Tabs Navigation"
        >
          {tabs.map((tab, idx) => {
            const isActive = idx === activeTab;
            const isHovered = hoveredTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                onMouseEnter={() => setHoveredTab(idx)}
                onMouseLeave={() => setHoveredTab(null)}
                className={isActive ? activeTabClassName : inactiveTabClassName}
                style={{
                  ...baseTabStyles,
                  ...(isActive ? activeStyles : inactiveStyles),
                  ...(isHovered && !isActive ? hoverStyles : {}),
                }}
              >
                {tab.icon && <span>{tab.icon}</span>}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      )}

      {/* Content */}
      <section
        className={contentContainerClassName}
        style={contentStyles}
        role="tabpanel"
      >
        {tabs[activeTab]?.content}
      </section>
    </div>
  );
};

// Exports
export const LeftTabs: React.FC<TabsBaseProps> = (props) => (
  <BaseTabs {...props} tabPosition="left" />
);

export const TopTabs: React.FC<TabsBaseProps> = (props) => (
  <BaseTabs {...props} tabPosition="top" />
);

export const RightTabs: React.FC<TabsBaseProps> = (props) => (
  <BaseTabs {...props} tabPosition="right" />
);
