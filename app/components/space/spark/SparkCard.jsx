"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  ArrowUpRight,
  Heart,
  Eye,
  MessageCircle,
  Lightbulb,
  CameraIcon,
} from "lucide-react";
import LoadingSpinner from "../../utils/LoadingSpinner";

const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const stripHtml = (html = "") =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const getExcerpt = (blocks = []) => {
  const textBlock = blocks.find((b) => b.type === "text");

  if (!textBlock?.content) {
    return "Discover this spark and explore new ideas.";
  }

  return stripHtml(textBlock.content).slice(0, 140);
};

const getCoverImage = (spark) => {
  if (spark.coverImage) return spark.coverImage;

  const imageBlock = spark.blocks?.find((b) => b.type === "image");

  return imageBlock?.url || null;
};

const SparkCard = ({ spark }) => {
  if (!spark) return null;

  const [imageLoading, setImageLoading] = useState(true);

  const cover = getCoverImage(spark);

  return (
    <Link
      href={`/space/${spark.authorId}/${spark.id}`}
      className="block h-full"
    >
      <article
        className="
          group relative flex flex-col h-full overflow-hidden
          rounded-[28px]
          border border-white/10
          bg-[#050505]
          transition-all duration-500
          hover:border-primary/40
        "
      >
        {/* Cover */}
        <div className="relative aspect-[4/4] overflow-hidden">
          {cover ? (
            <>
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                  <LoadingSpinner message="Loading image..." />
                </div>
              )}

              <img
                src={cover}
                alt="cover"
                className="
        absolute inset-0 w-full h-full
        object-cover
        transition-transform duration-700"
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)}
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/10 to-transparent" />
            </>
          ) : (
            <div
              className="
      absolute inset-0
      bg-linear-to-br from-[#001a0c] via-black to-[#00150a]
      flex items-center justify-center
    "
            >
              <div className="relative">
                <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full" />

                <div
                  className="
          relative w-20 h-20
          flex items-center justify-center
        "
                >
                  <CameraIcon size={36} className="text-primary/70" />
                </div>
              </div>
            </div>
          )}

          {/* Top Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-20">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="
                  px-3 py-1 rounded-full
                  text-[11px] font-semibold
                  bg-primary text-white
                "
              >
                Spark
              </span>

              {spark.productName && (
                <span
                  className="
                  px-3 py-1 rounded-full
                  text-[11px] font-semibold capitalize
                  bg-primary text-white
                "
                >
                  {spark.productName || "General"}
                </span>
              )}
            </div>
          </div>

          {/* Floating Stats */}
          <div
            className="
              absolute bottom-4 left-4 z-20
              flex items-center gap-2 flex-wrap
            "
          >
            {/* <div
              className="
                flex items-center gap-1.5
                px-3 py-1.5 rounded-full
                bg-black/45 backdrop-blur-md
                border border-white/10
                text-[11px] text-white
              "
            >
              <Eye size={14} className="text-white" />
              {spark.views || 0}
            </div> */}
            <div
              className="
                flex items-center gap-1.5
                px-3 py-1.5 rounded-full
                bg-black/45 backdrop-blur-md
                border border-white/10
                text-[11px] text-white
              "
            >
              <Heart fill=" #fb2c36" size={14} className="text-red-500" />
              {spark.likes.length || 0}
            </div>

            <div
              className="
                flex items-center gap-1.5
                px-3 py-1.5 rounded-full
                bg-black/45 backdrop-blur-md
                border border-white/10
                text-[11px] text-white
              "
            >
              <MessageCircle
                fill="#3B82F6"
                size={14}
                className="text-[#3B82F6]"
              />
              {spark.comments?.length || 0}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-1 flex-col p-5">
          {/* Meta */}
          <div
            className="
              flex items-center gap-4
              text-[12px] text-zinc-400 font-medium
            "
          >
            <span className="flex items-center gap-1.5">
              <CalendarDays size={13} />
              {formatDate(spark.createdAt)}
            </span>

            <span className="flex items-center gap-1.5">
              <Clock3 size={13} />
              {spark.readTime || "1 min read"}
            </span>
          </div>

          {/* Title */}
          <h3
            className="
              mt-4 text-[1.3rem] leading-[1.4]
              font-bold text-white
              transition-colors duration-300
              group-hover:text-primary
              line-clamp-2
            "
          >
            {spark.title}
          </h3>

          {/* Excerpt */}
          <p
            className="
              mt-3 flex-1
              text-sm leading-[1.8]
              text-zinc-400
              line-clamp-3
            "
          >
            {getExcerpt(spark.blocks)}
          </p>

          {/* Tags */}
          {spark.tags?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {spark.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="
                    px-2.5 py-1 rounded-full
                    text-[11px] font-medium
                    bg-white/[0.03]
                    border border-white/[0.06]
                    text-zinc-300
                  "
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer */}
          <div
            className="
              mt-5 pt-4
              border-t border-white/[0.06]
              flex items-center justify-between
            "
          >
            <div className="flex items-center gap-2">
              <div>
                <p className="text-sm font-semibold text-white">Open Spark</p>
                <p className="text-[11px] text-zinc-500">Explore ideas</p>
              </div>
            </div>

            <div
              className="
                w-11 h-11 rounded-2xl
                border border-primary/20
                bg-primary/5
                flex items-center justify-center
                transition-all duration-300
                group-hover:bg-primary
                group-hover:border-primary
                group-hover:rotate-45
              "
            >
              <ArrowUpRight
                size={18}
                className="
                  text-primary
                  transition-colors duration-300
                  group-hover:text-white
                "
              />
            </div>
          </div>
        </div>

        {/* Bottom Glow Line */}
        <div
          className="
            absolute bottom-0 left-0 h-[2px] w-0
            bg-linear-to-r from-transparent via-primary to-transparent
            transition-all duration-500
            group-hover:w-full
          "
        />
      </article>
    </Link>
  );
};

export default SparkCard;
