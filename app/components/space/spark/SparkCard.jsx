"use client";

import React from "react";
import {
  CalendarDays,
  Clock3,
  ArrowUpRight,
  Terminal,
} from "lucide-react";
import Link from "next/link";

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
    return "Discover this spark.";
  }

  return stripHtml(textBlock.content).slice(0, 110);
};

const getCoverImage = (spark) => {
  if (spark.coverImage) return spark.coverImage;

  const imageBlock = spark.blocks?.find((b) => b.type === "image");

  return imageBlock?.url || null;
};

export default function SparkCard({ spark }) {
  if (!spark) return null;

  const cover = getCoverImage(spark);

  return (
    <Link
      href={`/space/${spark.userId}/${spark.id}`}
      className="block h-full"
    >
      <article
        className="
          group relative flex flex-col h-full overflow-hidden rounded-2xl
          bg-zinc-950 border border-zinc-900
          transition-all duration-300
          hover:border-primary/40
        "
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-[#000d05] shrink-0">
          {cover ? (
            <div
              className="
                w-full h-full bg-cover bg-center
                transition-transform duration-700
                group-hover:scale-105
              "
              style={{
                backgroundImage: `url('${cover}')`,
              }}
            />
          ) : (
            <div
              className="
                w-full h-full flex items-center justify-center
                bg-[#000d05]
              "
            >
              <Terminal
                size={30}
                className="text-[rgba(0,255,120,0.2)]"
              />
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,8,3,0.95)] via-[rgba(0,8,3,0.35)] to-transparent" />

          {/* Top badges */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
            {spark.featured && (
              <span
                className="
                  px-2 py-[4px]
                  rounded-full
                  text-[10px] uppercase tracking-[0.6px]
                  bg-[rgba(255,190,40,0.12)]
                  border border-[rgba(255,190,40,0.35)]
                  text-[#ffbe28]
                  font-semibold
                "
              >
                Featured
              </span>
            )}

            <span
              className="
                px-2 py-[4px]
                rounded-full
                text-[10px]
                capitalize
                bg-primary
                text-white
                font-bold
              "
            >
              {spark.category || "Spark"}
            </span>
          </div>

          {/* Decorative corners */}
          <div className="absolute top-2 left-2 h-[10px] w-[10px] border-l border-t border-primary/50" />
          <div className="absolute top-2 right-2 h-[10px] w-[10px] border-r border-t border-primary/50" />

          {/* Glow line */}
          <div
            className="
              absolute bottom-0 left-0 right-0 h-px
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              bg-gradient-to-r from-transparent via-primary to-transparent
            "
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4">
          {/* Meta */}
          <div className="mb-3 flex items-center gap-3 text-[11px] font-semibold text-zinc-400">
            <span className="flex items-center gap-1">
              <CalendarDays size={12} />
              {formatDate(spark.createdAt)}
            </span>

            <span className="flex items-center gap-1">
              <Clock3 size={12} />
              {spark.readTime || "1 min"}
            </span>
          </div>

          {/* Title */}
          <h3
            className="
              text-lg md:text-xl
              font-bold leading-[1.4]
              text-white
              transition-colors duration-200
              group-hover:text-primary
            "
          >
            {spark.title}
          </h3>

          {/* Product */}
          {spark.productName && (
            <div className="mt-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />

              <p className="text-xs font-semibold text-primary">
                {spark.productName}
              </p>
            </div>
          )}

          {/* Excerpt */}
          <p
            className="
              mt-3 flex-1
              text-[13px] leading-[1.7]
              text-zinc-400
              line-clamp-3
            "
          >
            {getExcerpt(spark.blocks)}
          </p>

          {/* Footer */}
          <div
            className="
              mt-4 pt-3
              border-t border-primary/10
              flex items-center justify-between
            "
          >
            <span
              className="
                text-[12px] font-medium tracking-[0.3px]
                text-zinc-300
                group-hover:text-primary
                transition-colors duration-200
              "
            >
              Open Spark
            </span>

            <div
              className="
                flex items-center justify-center
                w-8 h-8 rounded-xl
                border border-primary/40
                transition-all duration-200
                group-hover:bg-primary
                group-hover:border-primary
              "
            >
              <ArrowUpRight
                size={14}
                className="
                  text-primary
                  transition-colors duration-200
                  group-hover:text-white
                "
              />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}