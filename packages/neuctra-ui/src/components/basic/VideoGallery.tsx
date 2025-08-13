import React, { useState, useRef, useEffect } from "react";
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
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Video {
  src: string;
  poster?: string;
}

interface ResponsiveColumns {
  mobile?: number; // < 640px
  tablet?: number; // 640px to 1024px
  desktop?: number; // > 1024px
}

interface VideoGalleryProps {
  videos: Video[];
  columns?: number; // fallback columns if responsive not provided
  responsiveColumns?: ResponsiveColumns;
  gap?: string;
  layout?: "grid" | "masonry";
  lightbox?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
}

export const VideoGallery: React.FC<VideoGalleryProps> = ({
  videos,
  columns = 3,
  responsiveColumns,
  gap = "10px",
  layout = "grid",
  lightbox = true,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  className = "",
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [currentColumns, setCurrentColumns] = useState(columns);

  // Responsive columns update
  useEffect(() => {
    function updateColumns() {
      const w = window.innerWidth;
      setWindowWidth(w);
      if (!responsiveColumns) {
        setCurrentColumns(columns);
        return;
      }
      if (w < 640) setCurrentColumns(responsiveColumns.mobile ?? columns);
      else if (w < 1024) setCurrentColumns(responsiveColumns.tablet ?? columns);
      else setCurrentColumns(responsiveColumns.desktop ?? columns);
    }
    if (typeof window !== "undefined") {
      updateColumns();
      window.addEventListener("resize", updateColumns);
      return () => window.removeEventListener("resize", updateColumns);
    }
  }, [columns, responsiveColumns]);

  const closeLightbox = () => setSelectedIndex(null);

  const prevVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + videos.length) % videos.length);
  };

  const nextVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % videos.length);
  };

  const VideoPlayer: React.FC<{
    src: string;
    poster?: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
    width?: string;
    height?: string;
    borderRadius?: string;
    backgroundColor?: string;
    primaryColor?: string;
    padding?: string;
    className?: string;
    onClick?: (e: React.MouseEvent) => void;
  }> = ({
    src,
    poster,
    autoPlay = false,
    loop = false,
    muted = false,
    controls = false,
    width = "100%",
    height = "150px",
    borderRadius = "12px",
    backgroundColor = "#1e1e1e",
    primaryColor = "#ff4081",
    padding = "16px",
    className,
    onClick,
  }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const playerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(muted ? 0 : 0.5);
    const [isMuted, setIsMuted] = useState(muted);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isLooping, setIsLooping] = useState(loop);

    // Sync video properties
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.volume = volume;
        videoRef.current.loop = isLooping;
        videoRef.current.muted = isMuted;
      }
    }, [volume, isLooping, isMuted]);

    const togglePlayPause = () => {
      if (!videoRef.current) return;
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
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
      if (isFullscreen) {
        document.exitFullscreen?.();
      } else {
        playerRef.current.requestFullscreen?.();
      }
      setIsFullscreen(!isFullscreen);
    };

    const toggleMute = () => {
      if (isMuted) {
        // unmute
        setIsMuted(false);
        if (volume === 0) setVolume(0.5);
      } else {
        // mute
        setIsMuted(true);
        setVolume(0);
      }
    };

    const formatTime = (time: number) => {
      if (isNaN(time)) return "0:00";
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
      <div
        ref={playerRef}
        onClick={onClick}
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
          cursor: onClick ? "pointer" : "default",
          userSelect: "none",
        }}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
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
          <div
            style={{ flexShrink: 0, minWidth: "60px", textAlign: "center" }}
          >
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
              type="button"
            >
              <RotateCcw
                size={18}
                color={isLooping ? primaryColor : undefined}
              />
            </button>
            <button
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute" : "Mute"}
              type="button"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <button
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              type="button"
            >
              {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Determine video height based on currentColumns to keep aspect ratio nicer
  const getVideoHeight = () => {
    if (windowWidth < 640) return "120px";
    if (windowWidth < 1024) return "150px";
    return "180px";
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Video Grid */}
      <div
        className={`grid ${layout === "masonry" ? "grid-flow-dense" : ""}`}
        style={{
          gridTemplateColumns: `repeat(${currentColumns}, 1fr)`,
          gap,
        }}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 12,
              cursor: lightbox ? "pointer" : "default",
            }}
            onClick={() => lightbox && setSelectedIndex(index)}
          >
            <VideoPlayer
              src={video.src}
              poster={video.poster}
              autoPlay={autoPlay}
              loop={loop}
              muted={muted}
              controls={controls}
              height={getVideoHeight()}
              borderRadius="12px"
              padding="8px"
              primaryColor="#ff4081"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox && selectedIndex !== null && (
        <div
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Video preview"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          {/* Prev Button */}
          <button
            onClick={prevVideo}
            aria-label="Previous video"
            style={{
              position: "absolute",
              left: 20,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 8,
              borderRadius: "50%",
              userSelect: "none",
            }}
            type="button"
          >
            <ChevronLeft size={32} />
          </button>

          <VideoPlayer
            src={videos[selectedIndex].src}
            poster={videos[selectedIndex].poster}
            autoPlay
            controls
            muted={muted}
            width="80vw"
            height="45vw"
            borderRadius="16px"
            padding="16px"
            primaryColor="#ff4081"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next Button */}
          <button
            onClick={nextVideo}
            aria-label="Next video"
            style={{
              position: "absolute",
              right: 20,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 8,
              borderRadius: "50%",
              userSelect: "none",
            }}
            type="button"
          >
            <ChevronRight size={32} />
          </button>

          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close preview"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              color: "white",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 8,
              borderRadius: "50%",
              userSelect: "none",
            }}
            type="button"
          >
            <X size={28} />
          </button>
        </div>
      )}
    </div>
  );
};
