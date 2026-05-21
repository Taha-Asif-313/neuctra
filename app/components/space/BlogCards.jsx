"use client";

import React from "react";
import {
  CalendarDays,
  Clock3,
  ArrowUpRight,
  Newspaper,
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
  if (!textBlock?.content) return "Read this article.";
  return stripHtml(textBlock.content).slice(0, 120);
};

const getCoverImage = (blog) => {
  if (blog.coverImage) return blog.coverImage;
  const imageBlock = blog.blocks?.find((b) => b.type === "image");
  return imageBlock?.url || null;
};

export default function BlogCards({ blogs = [] }) {
  return (
    <section className="w-full">
      {/* Grid */}
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog) => {
          const cover = getCoverImage(blog);

          return (
            <Link
              key={blog.id}
              href={`/blog/${blog.userId}/${blog.id}`}
              className="block h-full"
            >
              <article
                className="
                  group relative flex flex-col h-full overflow-hidden rounded-2xl
                  bg-zinc-950
                  border border-zinc-900
                  transition-all duration-300
                "
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-[#000d05] shrink-0">
                  {cover ? (
                    <div
                      className="
                        w-full h-full bg-cover bg-center
                        transition-transform duration-700
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
                        size={28}
                        className="text-[rgba(0,255,120,0.2)]"
                      />
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,8,3,0.92)] to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-5 flex gap-1.5 z-10">
                    {blog.featured && (
                      <span
                        className="
                          text-[10px] uppercase tracking-[0.5px]
                          px-2 py-[3px] rounded-full
                          border border-[rgba(245,166,35,0.4)]
                          bg-[rgba(30,20,0,0.9)]
                          text-[#f5a623]
                          font-medium
                        "
                      >
                        ⭐ Featured
                      </span>
                    )}

                    <span
                      className="
                        text-[10px] Capitalize
                        px-2 py-[3px] rounded-full
                        bg-primary
                        font-medium
                      "
                    >
                      {blog.category || "Blog"}
                    </span>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-[10px] h-[10px] border-t border-l border-[rgba(0,255,120,0.4)]" />
                  <div className="absolute top-2 right-2 w-[10px] h-[10px] border-t border-r border-[rgba(0,255,120,0.4)]" />

                  {/* Scan line */}
                  <div
                    className="
                      absolute bottom-0 left-0 right-0 h-px
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      bg-gradient-to-r from-transparent via-primary to-transparent
                    "
                  />
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-3.5">
                  {/* Meta */}
                  <div className="flex gap-2.5 mb-2">
                    {[
                      {
                        Icon: CalendarDays,
                        text: formatDate(blog.createdAt),
                      },
                      {
                        Icon: Clock3,
                        text: blog.readTime || "1 min read",
                      },
                    ].map(({ Icon, text }) => (
                      <span
                        key={text}
                        className="
                          flex items-center gap-1
                          text-[11px] font-bold
                        "
                      >
                        <Icon size={12} />
                        {text}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-xl leading-[1.45] font-bold
                      mb-1.5 transition-colors duration-200
                    "
                  >
                    {blog.title}
                  </h3>

                  {/* Product */}
                  {blog.productName && (
                    <p className="text-xs flex items-center font-bold text-primary mb-1.5">
                      <span className="w-[8px] h-[8px] rounded-full bg-primary mr-[5px]" />

                      {blog.productName}
                    </p>
                  )}

                  {/* Excerpt */}
                  <p
                    className="
                      text-[12px] leading-[1.65]
                      text-zinc-100
                      flex-1 line-clamp-3
                    "
                  >
                    {getExcerpt(blog.blocks)}
                  </p>

                  {/* Footer */}
                  <div
                    className="
                      mt-3 pt-2.5
                      border-t border-[rgba(0,255,120,0.12)]
                      flex items-center justify-between
                    "
                  >
                    <span
                      className="
                        text-[11px]
                        tracking-[0.3px]
                        text-white group-hover:text-primary font-medium
                      "
                    >
                      Read article
                    </span>

                    <div
                      className="
                        w-8 h-8 rounded-lg
                        border border-primary
                        flex items-center justify-center
                        transition-all duration-200
                        group-hover:bg-primary
                        
                      "
                    >
                      <ArrowUpRight
                        size={14}
                        className="text-primary group-hover:text-white"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>

      {/* Empty State */}
      {!blogs.length && (
        <div
          className="
            min-h-[280px]
            rounded-2xl
            border border-dashed border-[rgba(0,255,120,0.2)]
            bg-[rgba(0,10,5,0.6)]

            flex flex-col items-center justify-center
            text-center
          "
        >
          <Newspaper size={48} className="text-[rgba(0,255,120,0.2)]" />

          <h3 className="mt-5 text-lg font-medium text-[rgba(200,255,230,0.7)]">
            No blogs found
          </h3>

          <p className="mt-2 text-[13px] text-[rgba(0,255,120,0.4)]">
            Start publishing your first article.
          </p>
        </div>
      )}
    </section>
  );
}
