import React, { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  SkipBack,
  SkipForward,
} from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  controls?: boolean;
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundColor?: string;
  primaryColor?: string;
  padding?: string;
  className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  autoPlay = false,
  loop = false,
  controls = false,
  width = "100%",
  height = "150px",
  borderRadius = "12px",
  backgroundColor = "#1e1e1e",
  primaryColor = "#ff4081",
  padding = "16px",
  className,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLooping, setIsLooping] = useState(loop);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.loop = isLooping;
    }
  }, [volume, isLooping]);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !e.currentTarget) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const time = percent * duration;
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const skip = (seconds: number) => {
    if (videoRef.current) videoRef.current.currentTime += seconds;
  };

  const toggleFullscreen = () => {
    if (!playerRef.current) return;
    isFullscreen
      ? document.exitFullscreen?.()
      : playerRef.current.requestFullscreen?.();
    setIsFullscreen(!isFullscreen);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div
      ref={playerRef}
      className={className}
      style={{
        position: "relative",
        width,
        backgroundColor,
        borderRadius,
        color: "#fff",
        overflow: "hidden",
        padding,
        boxSizing: "border-box",
        maxWidth: "100%",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        controls={controls}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        style={{
          width: "100%",
          height,
          borderRadius,
          objectFit: "cover",
          backgroundColor: "#000",
        }}
      />

      {/* Main Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginTop: "10px",
          flexWrap: "wrap",
        }}
      >
        <button onClick={() => skip(-10)} aria-label="Skip Back 10s">
          <SkipBack size={20} />
        </button>
        <button
          onClick={togglePlayPause}
          style={{
            background: primaryColor,
            borderRadius: "9999px",
            padding: "10px",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button onClick={() => skip(10)} aria-label="Skip Forward 10s">
          <SkipForward size={20} />
        </button>
      </div>

      {/* Time & Seek */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "8px",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flexShrink: 0, minWidth: "60px", textAlign: "center" }}>
          <span style={{ fontSize: "14px" }}>{formatTime(currentTime)}</span>
          <span style={{ fontSize: "14px", color: "#aaa" }}>
            {" "}
            / {formatTime(duration)}
          </span>
        </div>

        <div
          onClick={handleSeek}
          style={{
            flex: 1,
            height: "8px",
            background: "#444",
            borderRadius: "4px",
            cursor: "pointer",
            position: "relative",
            minWidth: "100px",
          }}
        >
          <div
            style={{
              width: `${(currentTime / duration) * 100 || 0}%`,
              height: "100%",
              background: primaryColor,
              borderRadius: "4px",
            }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            onClick={() => setIsLooping(!isLooping)}
            aria-label="Toggle Loop"
          >
            <RotateCcw size={18} color={isLooping ? primaryColor : undefined} />
          </button>
          <button
            onClick={() => setVolume(volume > 0 ? 0 : 0.5)}
            aria-label="Toggle Mute"
          >
            {volume > 0 ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
          <button onClick={toggleFullscreen} aria-label="Toggle Fullscreen">
            {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};
