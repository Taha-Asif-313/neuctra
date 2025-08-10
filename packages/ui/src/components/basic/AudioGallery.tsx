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

interface AudioTrack {
  src: string;
  title: string;
  thumbnail?: string;
}

interface AudioGalleryProps {
  tracks: AudioTrack[];
  className?: string;
  primaryColor?: string; // replaces theme.primary
  backgroundColor?: string; // replaces theme.bg
  textColor?: string; // replaces theme.text
  secondaryColor?: string; // replaces theme.secondary
  autoplay?: boolean;
  loop?: boolean;
}

export const AudioGallery: React.FC<AudioGalleryProps> = ({
  tracks,
  className = "",
  primaryColor = "#3b82f6", // default blue
  backgroundColor = "#fff",
  textColor = "#222",
  secondaryColor = "#e5e7eb",
  autoplay = false,
  loop = false,
}) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLooping, setIsLooping] = useState(loop);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.loop = isLooping;
  }, [isLooping]);

  useEffect(() => {
    if (currentTrackIndex === null && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
    }
  }, [currentTrackIndex]);

  const playPauseTrack = (index: number) => {
    if (currentTrackIndex === index) {
      if (!audioRef.current) return;
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      setCurrentTrackIndex(index);
      setTimeout(() => {
        audioRef.current?.play();
        setIsPlaying(true);
      }, 100);
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickPos = e.clientX - rect.left;
    const percent = clickPos / rect.width;
    const seekTime = percent * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const skip = (seconds: number) => {
    if (audioRef.current) {
      let newTime = audioRef.current.currentTime + seconds;
      newTime = Math.min(Math.max(newTime, 0), duration);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
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
    setVolume((prev) => (prev > 0 ? 0 : 0.5));
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <section
      className={className}
      style={{
        maxWidth: "480px",
        margin: "auto",
        backgroundColor,
        color: textColor,
        padding: "16px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        userSelect: "none",
      }}
      aria-label="Audio gallery"
    >
      <h2
        style={{
          marginBottom: "16px",
          fontSize: "1.25rem",
          fontWeight: "700",
        }}
      >
        🎵 Audio Gallery
      </h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {tracks.map(({ src, title, thumbnail }, index) => {
          const isActive = currentTrackIndex === index && isPlaying;

          return (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px",
                borderRadius: "10px",
                backgroundColor: isActive ? primaryColor : secondaryColor,
                color: isActive ? "#fff" : textColor,
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onClick={() => playPauseTrack(index)}
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  playPauseTrack(index);
                }
              }}
              aria-label={`${isActive ? "Pause" : "Play"} ${title}`}
            >
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                {title}
              </span>
              {isActive ? (
                <Pause size={24} aria-hidden="true" />
              ) : (
                <Play size={24} aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ul>

      {currentTrackIndex !== null && (
        <article
          ref={playerRef}
          style={{
            marginTop: "24px",
            padding: "12px",
            borderRadius: "12px",
            backgroundColor: secondaryColor,
            color: textColor,
            boxSizing: "border-box",
          }}
          aria-label={`Audio player for ${tracks[currentTrackIndex].title}`}
        >
          {tracks[currentTrackIndex].thumbnail && (
            <img
              src={tracks[currentTrackIndex].thumbnail}
              alt={`${tracks[currentTrackIndex].title} thumbnail`}
              loading="lazy"
              width="100%"
              style={{
                borderRadius: "12px",
                marginBottom: "12px",
                objectFit: "cover",
                maxHeight: "180px",
              }}
            />
          )}

          <h3
            style={{
              fontWeight: "700",
              fontSize: "1.1rem",
              marginBottom: "8px",
            }}
          >
            {tracks[currentTrackIndex].title}
          </h3>

          <audio
            ref={audioRef}
            src={tracks[currentTrackIndex].src}
            autoPlay={autoplay}
            loop={isLooping}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onLoadedMetadata={handleTimeUpdate}
            style={{ display: "none" }}
            preload="metadata"
          />

          {/* Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => skip(-10)}
              aria-label="Skip back 10 seconds"
              style={buttonStyle(textColor, primaryColor)}
            >
              <SkipBack size={20} />
            </button>

            <button
              onClick={() => {
                if (!audioRef.current) return;
                if (isPlaying) {
                  audioRef.current.pause();
                } else {
                  audioRef.current.play();
                }
                setIsPlaying(!isPlaying);
              }}
              aria-label={isPlaying ? "Pause" : "Play"}
              style={{
                ...buttonStyle("#fff", primaryColor),
                borderRadius: "9999px",
                padding: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isPlaying ? (
                <Pause size={24} color="#fff" />
              ) : (
                <Play size={24} color="#fff" />
              )}
            </button>

            <button
              onClick={() => skip(10)}
              aria-label="Skip forward 10 seconds"
              style={buttonStyle(textColor, primaryColor)}
            >
              <SkipForward size={20} />
            </button>
          </div>

          {/* Time & Seek Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "16px",
              flexWrap: "wrap",
              userSelect: "none",
            }}
          >
            <time
              dateTime={`PT${Math.floor(currentTime / 60)}M${Math.floor(
                currentTime % 60
              )}S`}
              style={{ minWidth: "40px", fontSize: "0.9rem" }}
              aria-label="Current playback time"
            >
              {formatTime(currentTime)}
            </time>

            <div
              onClick={handleSeek}
              role="slider"
              aria-valuemin={0}
              aria-valuemax={duration}
              aria-valuenow={currentTime}
              tabIndex={0}
              onKeyDown={(e) => {
                if (!audioRef.current) return;
                if (e.key === "ArrowRight") {
                  skip(5);
                } else if (e.key === "ArrowLeft") {
                  skip(-5);
                }
              }}
              style={{
                flex: 1,
                height: "8px",
                borderRadius: "8px",
                backgroundColor: "#ccc",
                cursor: "pointer",
                position: "relative",
                minWidth: "120px",
              }}
              aria-label="Seek playback position"
            >
              <div
                style={{
                  width: `${(currentTime / duration) * 100 || 0}%`,
                  height: "100%",
                  backgroundColor: primaryColor,
                  borderRadius: "8px",
                }}
              />
            </div>

            <time
              dateTime={`PT${Math.floor(duration / 60)}M${Math.floor(
                duration % 60
              )}S`}
              style={{ minWidth: "40px", fontSize: "0.9rem", color: "#666" }}
              aria-label="Total duration"
            >
              / {formatTime(duration)}
            </time>
          </div>

          {/* Volume & Extra Controls */}
          <div
            style={{
              marginTop: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setIsLooping(!isLooping)}
              aria-label="Toggle Loop"
              style={buttonStyle(
                isLooping ? primaryColor : textColor,
                isLooping ? "#e0f2fe" : "transparent"
              )}
            >
              <RotateCcw
                size={20}
                color={isLooping ? primaryColor : textColor}
                aria-hidden="true"
              />
            </button>

            <button
              onClick={toggleMute}
              aria-label={volume > 0 ? "Mute" : "Unmute"}
              style={buttonStyle(textColor, "transparent")}
            >
              {volume > 0 ? (
                <Volume2 size={20} aria-hidden="true" />
              ) : (
                <VolumeX size={20} aria-hidden="true" />
              )}
            </button>

            <button
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              style={buttonStyle(textColor, "transparent")}
            >
              {isFullscreen ? (
                <Minimize size={20} aria-hidden="true" />
              ) : (
                <Maximize size={20} aria-hidden="true" />
              )}
            </button>
          </div>
        </article>
      )}
    </section>
  );
};

function buttonStyle(color: string, backgroundColor: string): React.CSSProperties {
  return {
    border: "none",
    backgroundColor,
    color,
    cursor: "pointer",
    padding: "6px 10px",
    borderRadius: "8px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s ease",
  };
}
