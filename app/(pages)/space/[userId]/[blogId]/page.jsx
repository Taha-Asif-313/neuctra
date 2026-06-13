"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Tag,
  Heart,
  MessageCircle,
  Send,
  Share2,
  BadgeCheck,
  MessageCircleQuestion,
  Hash,
} from "lucide-react";

import {
  addCommentToSpark,
  getSingleSpark,
  toggleLike,
} from "@/app/services/spark";

import { Button } from "@neuctra/ui";

import dynamic from "next/dynamic";
import { useAdmin } from "@/app/contexts/AdminContext";
import NeuctraSpaceHeader from "@/app/components/space/NeuctraSpaceHeader";
import LoadingSpinner from "@/app/components/utils/LoadingSpinner";
import Link from "next/link";
import ScrollToTopButton from "@/app/components/utils/ScrollToTopButton";
import Head from "next/head";
const NeuctraEditorPreview = dynamic(
  () => import("@neuctra/cms-core").then((mod) => mod.NeuctraEditorPreview),
  {
    ssr: false,
  },
);

const SparkViewPage = () => {
  const router = useRouter();
  const params = useParams();

  const { user } = useAdmin();

  const userId = params?.userId;
  const sparkId = params?.blogId;

  const [spark, setSpark] = useState(null);
  const [loading, setLoading] = useState(true);

  // LIKE STATE
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  // COMMENTS STATE
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // LOADING STATES
  const [liking, setLiking] = useState(false);

  // FETCH SPARK
  useEffect(() => {
    const fetchSpark = async () => {
      try {
        setLoading(true);

        const response = await getSingleSpark(userId, sparkId);

        if (response.success) {
          setSpark(response.data);

          setLikes(response.data?.likes?.length || 0);

          setLiked(response.data?.likes?.includes(user?.id) || false);
          setComments(response.data?.comments || []);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpark();
  }, [userId, sparkId]); // Added user?.id to dependencies

  // Update liked when user changes
  useEffect(() => {
    if (!spark) return;

    setLiked(spark?.likes?.includes(user?.id) || false);
  }, [spark, user?.id]);

  useEffect(() => {
    if (!spark) return;

    const coverImage = spark.coverImage; // your cover image URL

    const setPropertyMeta = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    };

    setPropertyMeta("og:title", spark.title);
    setPropertyMeta("og:description", spark.seoDescription || "");
    setPropertyMeta("og:image", coverImage);
    setPropertyMeta("og:url", window.location.href);
    setPropertyMeta("og:type", "article");
    setPropertyMeta("og:site_name", "Neuctra");

    setPropertyMeta("twitter:card", "summary_large_image");
    setPropertyMeta("twitter:title", spark.title);
    setPropertyMeta("twitter:description", spark.seoDescription || "");
    setPropertyMeta("twitter:image", coverImage);
  }, [spark]);

  const handleLike = async () => {
    if (!user?.id) {
      router.push("/space/login");
      return;
    }
    if (!user?.id || liking) return; // Prevent if no user or already liking

    const wasLiked = liked;

    // Optimistic update
    setLiked(!wasLiked);
    setLikes((prev) => (wasLiked ? prev - 1 : prev + 1));
    setLiking(true);

    try {
      const result = await toggleLike({
        spark,
        likedBuyUserId: user.id,
      });

      if (result.success) {
        // Update spark state with the actual data from response
        if (result.data) {
          setSpark((prev) => ({
            ...prev,
            likes: result.data.likes,
          }));
        }

        // Optional: Show success toast/notification
        console.log(`Successfully ${result.action}`);
      } else {
        // Revert on error
        setLiked(wasLiked);
        setLikes((prev) => (wasLiked ? prev + 1 : prev - 1));
        console.error("Failed to toggle like:", result.error);
      }
    } catch (error) {
      // Revert on error
      setLiked(wasLiked);
      setLikes((prev) => (wasLiked ? prev + 1 : prev - 1));
      console.error("Error toggling like:", error);
    } finally {
      setLiking(false);
    }
  };

  const handleAddComment = async () => {
    if (!user?.id) {
      router.push("/space/login");
      return;
    }
    if (!comment.trim() || !user) return;

    const response = await addCommentToSpark({
      spark,
      user,
      comment,
    });

    if (response.success) {
      setComments(response.comments);
      setComment("");

      setSpark((prev) => ({
        ...prev,
        comments: response.comments,
      }));
    }
  };

  // Helper function for relative time (e.g., "2h ago", "3d ago")
  const formatRelativeTime = (date) => {
    const now = new Date();
    const diff = Math.floor((now - new Date(date)) / 1000);

    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
    return new Date(date).toLocaleDateString();
  };

  // LOADING
  if (loading) {
    return <LoadingSpinner message="Loading spark..." />;
  }

  // NOT FOUND
  if (!spark) {
    return (
      <div className="min-h-screen  flex items-center justify-center">
        <div className="max-w-sm flex flex-col justify-center items-center text-center">
          <MessageCircleQuestion size={80} className="mb-6" />
          <h1 className="text-3xl font-semibold mb-3">Spark not found!</h1>

          <p className="text-zinc-300 mb-3">
            The spark you're looking for doesn't exist or was removed.
          </p>

          <button
            onClick={() => router.push("/space")}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-zinc-900 bg-zinc-950 hover:bg-zinc-800 transition"
          >
            <ArrowLeft size={16} />
            Back to Space
          </button>
        </div>
      </div>
    );
  }

  const {
    title,
    author,
    category,
    tags,
    blocks,
    readTime,
    createdAt,
    publishedAt,
  } = spark;

  const displayDate = publishedAt || createdAt;
  console.log(spark);

  return (
    <>
      <div className="min-h-screen text-white">
        <ScrollToTopButton />
        <NeuctraSpaceHeader />

        {/* MAIN GRID */}
        <div className="max-w-7xl mx-auto py-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT COLUMN (SPARK CONTENT) */}
          <main className="lg:col-span-8 space-y-6">
            {/* HERO HEADER */}
            <section className="relative overflow-hidden rounded-b-4xl">
              <div className="relative pb-6">
                {/* BACK BUTTON */}
                <div className="mb-6 flex items-center justify-between gap-3">
                  <Button onClick={() => router.push("/space")} variant="ghost">
                    <ArrowLeft size={20} />
                  </Button>

                  <div className="flex items-center justify-between gap-3">
                    {/* LIKE */}
                    <button
                      onClick={handleLike}
                      disabled={liking}
                      className={`flex flex-1 items-center justify-center gap-1.5 rounded-full border px-3.5 py-1.5 transition-all ${
                        liked
                          ? "border-red-600/20 bg-red-600/10 text-red-600"
                          : "border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-red-600/20 hover:bg-red-600/10 hover:text-red-500"
                      } ${liking ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      <Heart
                        size={15}
                        className={liked ? "fill-red-600" : ""}
                      />
                      <span className="text-[13px] font-medium text-white">
                        {likes.toLocaleString()}
                      </span>
                    </button>

                    {/* COMMENTS */}
                    <button
                      onClick={() =>
                        document.getElementById("comment-input")?.focus()
                      }
                      className="
                      flex flex-1 items-center justify-center gap-1.5
                      rounded-full border
                      px-3.5 py-1.5
                      transition-all
                      border-primary/20
                      bg-primary/10
                      text-primary"
                    >
                      <MessageCircle size={15} />
                      <span className="text-[13px] text-white font-medium">
                        {comments.length.toLocaleString()}
                      </span>
                    </button>

                    {/* SHARE */}
                    <button
                      onClick={() => {
                        navigator
                          .share?.({
                            title: spark.title,
                            text: `Check out "${spark.title}" on Neuctra`,
                            url: window.location.href,
                          })
                          .catch(() => {
                            navigator.clipboard.writeText(window.location.href);
                          });
                      }}
                      className="
                      flex items-center justify-center gap-1.5
                      rounded-full
                      px-1.5
                    text-white transition-all"
                    >
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>

                {/* CATEGORY */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  {category && (
                    <span className="px-4 py-1.5 rounded-full bg-primary/90 text-xs font-medium text-white">
                      {category}
                    </span>
                  )}
                </div>

                {/* TITLE */}
                <div className="max-w-5xl">
                  <h1 className="text-4xl sm:text-6xl font-semibold leading-[1.05] tracking-[-0.04em] text-white">
                    {title}
                  </h1>
                </div>
              </div>
            </section>

            {/* CONTENT */}
            <article className="min-w-0">
              {blocks?.length > 0 ? (
                <NeuctraEditorPreview blocks={blocks} className="px-0! py-0!" />
              ) : (
                <p className="text-zinc-300">No content available.</p>
              )}
            </article>
          </main>

          {/* RIGHT COLUMN (SOCIAL MEDIA STYLE) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-6 space-y-6">
              {/* AUTHOR CARD - Instagram Story Style */}
              <div className="rounded-3xl border border-zinc-900 bg-gradient-to-br from-zinc-950 to-black p-5">
                <div className="flex items-center gap-4">
                  {/* Story Ring */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00FF88] to-cyan-500 animate-pulse" />
                    <div className="absolute inset-[2px] rounded-full bg-black" />

                    <div className="relative h-14 w-14 rounded-full bg-black flex items-center justify-center border-2 border-primary">
                      <User size={24} className="text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="font-semibold text-white flex items-center gap-1">
                      {author?.name}{" "}
                      <BadgeCheck size={16} className="text-primary -mt-0.5" />
                    </p>

                    <p className="text-xs text-zinc-400">
                      @{author?.username || "creator"}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[10px] text-zinc-500">
                        {new Date(displayDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-[10px] text-zinc-500">•</span>
                      <span className="text-[10px] text-zinc-500">
                        {readTime}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/space/spark/authors/profile/${spark?.authorId}`}
                    className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition"
                  >
                    Visit Profile
                  </Link>
                </div>
              </div>

              {/* TAGS SECTION - Twitter Hashtag Style */}
              {tags?.length > 0 && (
                <div className="rounded-3xl border border-zinc-900 bg-zinc-950/50 p-5">
                  <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                    Trending Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <button
                        key={index}
                        onClick={() => router.push(`/space?tag=${tag}`)}
                        className="px-3 py-1.5 rounded-full bg-zinc-900/50 hover:bg-zinc-800 text-xs text-zinc-300 hover:text-[#00FF88] transition-all duration-300 flex items-center gap-1.5 group"
                      >
                        <Hash
                          size={10}
                          className="text-zinc-500 group-hover:text-[#00FF88]"
                        />
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* COMMENTS SECTION - Reddit/Discord Style */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MessageCircle size={18} className="text-primary" />
                    <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                      Comments
                    </h3>
                  </div>
                </div>

                {/* ADD COMMENT - Social Media Style */}
                <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-md mb-6 overflow-hidden transition">
                  <div className="flex gap-3 p-4">
                    {/* INPUT AREA */}
                    <div className="flex-1">
                      <textarea
                        id="comment-input"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add to the discussion..."
                        rows={comment ? 3 : 1}
                        className="w-full bg-transparent text-[13px] text-white outline-none resize-none placeholder:text-zinc-600 leading-relaxed"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleAddComment();
                          }
                        }}
                      />

                      {/* ACTION BAR */}
                      {comment && (
                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-zinc-900">
                          <p className="text-[11px] text-zinc-500">
                            Shift + Enter for new line
                          </p>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setComment("")}
                              className="px-3 py-1.5 rounded-lg text-xs text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 transition"
                            >
                              Cancel
                            </button>

                            <button
                              onClick={handleAddComment}
                              className="px-4 py-1.5 rounded-lg bg-primary text-xs font-semibold hover:bg-primary/90 transition active:scale-[0.98]"
                            >
                              Post
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* COMMENT LIST - Instagram Style */}
                <div className="space-y-4 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-800">
                  {comments.length > 0 ? (
                    comments.map((item, idx) => (
                      <div
                        key={item.id}
                        className="group animate-fadeInUp"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        <div className="flex gap-3">
                          {item.avatar ? (
                            <img
                              src={item.avatar}
                              alt={item.name}
                              className="h-9 w-9 rounded-full object-cover"
                            />
                          ) : (
                            <div className="h-9 w-9 rounded-full bg-black border-2 border-primary border-dashed flex items-center justify-center text-xs font-semibold flex-shrink-0">
                              {item.name?.charAt(0)}
                            </div>
                          )}

                          <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <p className="text-sm font-semibold text-white">
                                {item.name}
                              </p>
                              <p className="text-xs text-zinc-500">
                                @{item.username}
                              </p>
                              <span className="text-[10px] text-zinc-600">
                                •
                              </span>
                              <p className="text-[10px] text-zinc-600">
                                {formatRelativeTime(item.createdAt)}
                              </p>
                            </div>

                            <p className="text-sm text-zinc-300 mt-1 leading-relaxed">
                              {item.comment}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <div className="inline-flex p-4 rounded-full bg-zinc-900/50 mb-3">
                        <MessageCircle size={32} className="text-zinc-700" />
                      </div>
                      <p className="text-sm text-zinc-500">No comments yet</p>
                      <p className="text-xs text-zinc-600 mt-1">
                        Start the conversation!
                      </p>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default SparkViewPage;
