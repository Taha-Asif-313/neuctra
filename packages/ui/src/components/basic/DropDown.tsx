import React, { useState, useRef, useEffect } from "react";

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

  // Custom styling props
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverColor?: string;
  padding?: string;
  margin?: string;
  dropdownWidth?: string;
  dropdownHeight?: string;
  borderRadius?: string;
  boxShadow?: string;
  optionPadding?: string;
  optionGap?: string;
  transitionDuration?: string;

  // Custom class/style
  className?: string;
  dropdownStyle?: React.CSSProperties;
  dropdownClassName?: string;
  optionStyle?: React.CSSProperties;
  optionClassName?: string;

  // Icons and animations
  iconPrefix?: React.ReactNode;
  iconSuffix?: React.ReactNode;
  openAnimation?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  defaultValue,
  onChange,
  placeholder = "Select an option",
  disabled = false,

  borderColor = "#ccc",
  backgroundColor = "#fff",
  textColor = "#333",
  hoverColor = "#f0f0f0",
  padding = "12px 16px",
  margin = "0 0 1rem 0",
  dropdownWidth = "100%",
  dropdownHeight = "200px",
  borderRadius = "8px",
  boxShadow = "0 4px 8px rgba(0,0,0,0.1)",
  optionPadding = "10px 12px",
  optionGap = "8px",
  transitionDuration = "0.25s",

  className = "",
  dropdownStyle,
  dropdownClassName = "",
  optionStyle,
  optionClassName = "",

  iconPrefix,
  iconSuffix,
}) => {
  const [selected, setSelected] = useState<string | undefined>(defaultValue);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    setSelected(val);
    setOpen(false);
    if (onChange) onChange(val);
  };

  const baseText = value ?? selected;
  const selectedOption = options.find((o) => o.value === baseText);

  return (
    <div
      ref={dropdownRef}
      className={className}
      style={{
        position: "relative",
        width: dropdownWidth,
        margin,
        fontFamily: "sans-serif",
        userSelect: "none",
      }}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          width: "100%",
          padding,
          backgroundColor,
          color: textColor,
          border: `1px solid ${borderColor}`,
          borderRadius,
          boxShadow: disabled ? "none" : boxShadow,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.6 : 1,
          transition: `all ${transitionDuration} ease-in-out`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: optionGap }}>
          {iconPrefix && <span>{iconPrefix}</span>}
          <span>{selectedOption?.label || placeholder}</span>
        </div>
        {iconSuffix || <span style={{ marginLeft: "8px" }}>▼</span>}
      </button>

      {open && (
        <ul
          role="listbox"
          className={dropdownClassName}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 1000,
            width: "100%",
            maxHeight: dropdownHeight,
            overflowY: "auto",
            backgroundColor,
            border: `1px solid ${borderColor}`,
            borderRadius,
            boxShadow,
            marginTop: "4px",
            transition: `all ${transitionDuration} ease`,
            ...dropdownStyle,
          }}
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              role="option"
              className={optionClassName}
              style={{
                display: "flex",
                alignItems: "center",
                gap: optionGap,
                padding: optionPadding,
                cursor: "pointer",
                backgroundColor:
                  selected === option.value ? hoverColor : backgroundColor,
                transition: `background ${transitionDuration}`,
                ...optionStyle,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = hoverColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  selected === option.value ? hoverColor : backgroundColor)
              }
            >
              {option.icon && <span>{option.icon}</span>}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
