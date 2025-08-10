import React from "react";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: "small" | "medium" | "large";
  isOnline?: boolean;          // online status indicator
  isOffline?: boolean;         // offline status indicator (mutually exclusive)
  className?: string;
  style?: React.CSSProperties; // additional style override
}

interface AvatarGroupProps {
  avatars: AvatarProps[];
  max?: number;               // max avatars to show, rest will be "+N"
  size?: "small" | "medium" | "large";
  className?: string;
  style?: React.CSSProperties;
}

const sizeMap = {
  small: 32,
  medium: 48,
  large: 64,
};

const statusColors = {
  online: "#4ade80", // green-400
  offline: "#f87171", // red-400
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "User Avatar",
  size = "medium",
  isOnline = false,
  isOffline = false,
  className = "",
  style,
}) => {
  const dimension = sizeMap[size];

  return (
    <div
      style={{
        position: "relative",
        width: dimension,
        height: dimension,
        borderRadius: "50%",
        overflow: "hidden",
        display: "inline-block",
        flexShrink: 0,
        ...style,
      }}
      className={className}
      aria-label={alt}
      role="img"
    >
      <img
        src={src}
        alt={alt}
        width={dimension}
        height={dimension}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          borderRadius: "50%",
        }}
      />
      {(isOnline || isOffline) && (
        <span
          aria-label={isOnline ? "Online" : "Offline"}
          title={isOnline ? "Online" : "Offline"}
          style={{
            position: "absolute",
            bottom: 2,
            right: 2,
            width: dimension / 4,
            height: dimension / 4,
            borderRadius: "50%",
            border: "2px solid white",
            backgroundColor: isOnline ? statusColors.online : statusColors.offline,
            boxShadow: "0 0 2px rgba(0,0,0,0.3)",
          }}
        />
      )}
    </div>
  );
};

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  max = 5,
  size = "medium",
  className = "",
  style,
}) => {
  const dimension = sizeMap[size];
  const visibleAvatars = avatars.slice(0, max);
  const extraCount = avatars.length - max;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: dimension / 6,
        ...style,
      }}
      className={className}
      aria-label={`Group avatars, ${avatars.length} members`}
      role="group"
    >
      {visibleAvatars.map(({ src, alt, isOnline, isOffline }, i) => (
        <div
          key={i}
          style={{
            marginLeft: i === 0 ? 0 : -(dimension / 3),
            boxShadow: "0 0 0 2px white",
            borderRadius: "50%",
            flexShrink: 0,
            cursor: "pointer",
          }}
          title={alt}
        >
          <Avatar
            src={src}
            alt={alt}
            size={size}
            isOnline={isOnline}
            isOffline={isOffline}
          />
        </div>
      ))}
      {extraCount > 0 && (
        <div
          style={{
            marginLeft: -(dimension / 3),
            width: dimension,
            height: dimension,
            borderRadius: "50%",
            backgroundColor: "#ccc",
            color: "#444",
            fontSize: dimension / 2.5,
            fontWeight: "600",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 0 0 2px white",
            userSelect: "none",
          }}
          aria-label={`${extraCount} more members`}
          title={`${extraCount} more members`}
        >
          +{extraCount}
        </div>
      )}
    </div>
  );
};
