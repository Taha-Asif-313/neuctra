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
} from "lucide-react";

import { getSingleSpark } from "@/app/services/spark";
import { Button } from "@neuctra/ui";

import dynamic from "next/dynamic";

const NeuctraEditorPreview = dynamic(
  () => import("@neuctra/cms-core").then((mod) => mod.NeuctraEditorPreview),
  {
    ssr: false,
  },
);

const SparkViewPage = () => {
  const router = useRouter();
  const params = useParams();

  const userId = params?.userId;
  const blogId = params?.blogId;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // LIKE STATE
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  // COMMENTS STATE
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // FETCH BLOG
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);

        const response = await getSingleSpark(userId, blogId);

        if (response.success) {
          setBlog(response.data);

          setLikes(response.data?.likes || 0);
          setComments(response.data?.comments || []);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [userId, blogId]);

  // HANDLE LIKE
  const handleLike = () => {
    if (liked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }

    setLiked(!liked);

    // TODO:
    // await likeSpark(blogId)
  };

  // HANDLE COMMENT
  const handleAddComment = () => {
    if (!comment.trim()) return;

    const newComment = {
      id: Date.now(),
      name: "You",
      text: comment,
      createdAt: new Date().toISOString(),
    };

    setComments((prev) => [newComment, ...prev]);

    setComment("");

    // TODO:
    // await addComment(blogId, comment)
  };

  // LOADING
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <p className="text-white/50">Loading article...</p>
        </div>
      </div>
    );
  }

  // NOT FOUND
  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-semibold mb-3">Post not found</h1>

          <p className="text-zinc-300 mb-6">
            The article you're looking for doesn't exist or was removed.
          </p>

          <button
            onClick={() => router.push("/blog")}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition"
          >
            <ArrowLeft size={16} />
            Back to Blog
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
    featured,
    readTime,
    createdAt,
    publishedAt,
  } = blog;

  const getCoverImage = (blog) => {
    if (blog?.coverImage) return blog.coverImage;

    const imageBlock = blog?.blocks?.find((b) => b.type === "image");

    return imageBlock?.url || null;
  };

  const displayDate = publishedAt || createdAt;
  const heroImage = getCoverImage(blog);

  return (
    <div className="min-h-screen text-white">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-b-4xl">
        {heroImage && (
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt={title}
              className="h-full w-full object-cover opacity-40 scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/30" />
          </div>
        )}

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-14 pb-12">
          <div className="mb-6 flex items-center justify-between gap-3">
            {/* BACK BUTTON */}
            <Button
              onClick={() => router.push("/space")}
              variant="ghost"
              className="h-12 rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 hover:bg-zinc-900"
            >
              <ArrowLeft size={20} />
            </Button>

            {/* ACTIONS */}
            <div className="flex items-center gap-3">
              {/* LIKE BUTTON */}
              <button
                onClick={handleLike}
                className={`group flex h-12 items-center gap-2 rounded-2xl border px-4 transition-all duration-300 ${
                  liked
                    ? "border-red-600/30 bg-red-600/10 text-red-600"
                    : "border-zinc-800 bg-zinc-950/80 text-zinc-300 hover:border-primary/30 hover:text-cyan-400"
                }`}
              >
                <Heart
                  size={18}
                  className={`transition ${liked ? "fill-red-600" : ""}`}
                />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-2">
            {category && (
              <span className="px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-xl text-xs font-medium text-zinc-300">
                {category}
              </span>
            )}

            {featured && (
              <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-xs font-medium text-primary">
                Featured Article
              </span>
            )}
          </div>

          <div className="max-w-5xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.05] tracking-[-0.04em] text-white">
              {title}
            </h1>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {/* LIKE BUTTON */}
            <button
              onClick={handleLike}
              className={`group flex items-center gap-2 rounded-2xl border px-5 py-3 transition-all duration-300 ${
                liked
                  ? "border-[#00FF88]/30 bg-[#00FF88]/10 text-[#00FF88]"
                  : "border-zinc-800 bg-zinc-950/80 text-zinc-300 hover:border-primary/30 hover:text-cyan-400"
              }`}
            >
              <Heart
                size={18}
                className={`transition ${liked ? "fill-[#00FF88]" : ""}`}
              />

              <span className="text-sm font-medium">{likes}</span>
            </button>

            {/* COMMENTS COUNT */}
            <div className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/80 px-5 py-3 text-zinc-300">
              <MessageCircle size={18} className="text-cyan-400" />

              <span className="text-sm font-medium">
                {comments.length} Comments
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            {author?.name && (
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
                {author?.avatar ? (
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-10 h-10 rounded-full object-cover border border-zinc-800"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <User size={16} />
                  </div>
                )}

                <div>
                  <p className="text-xs text-zinc-300">Written by</p>

                  <p className="text-sm font-medium text-white">
                    {author.name}
                  </p>
                </div>
              </div>
            )}

            {displayDate && (
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <Calendar size={16} />
                </div>

                <div>
                  <p className="text-xs text-zinc-300">Published</p>

                  <p className="text-sm font-medium text-white">
                    {new Date(displayDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            )}

            {readTime && (
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <Clock size={16} />
                </div>

                <div>
                  <p className="text-xs text-zinc-300">Read Time</p>

                  <p className="text-sm font-medium text-white">{readTime}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto py-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <main className="lg:col-span-8">
          <article className="min-w-0">
            {blocks?.length > 0 ? (
              <NeuctraEditorPreview blocks={blocks} className="px-0!" />
            ) : (
              <p className="text-zinc-300">No content available.</p>
            )}
          </article>


        </main>

        <aside className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">

          {/* COMMENTS SECTION */}
          <section className="mt-14 border-t border-zinc-900 pt-10">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle size={22} className="text-cyan-400" />

              <h2 className="text-2xl font-semibold">
                Comments ({comments.length})
              </h2>
            </div>

            {/* ADD COMMENT */}
            <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-5 mb-8">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your thoughts..."
                rows={4}
                className="w-full rounded-2xl border border-zinc-800 bg-black/40 px-4 py-4 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-primary/40"
              />

              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleAddComment}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-medium transition hover:scale-[1.02]"
                >
                  <Send size={16} />
                  Post Comment
                </button>
              </div>
            </div>

            {/* COMMENT LIST */}
            <div className="space-y-4">
              {comments.length > 0 ? (
                comments.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-3xl border border-zinc-900 bg-zinc-950 p-5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-full bg-linear-to-br from-primary/20 to-[#00FF88]/20 border border-zinc-800 flex items-center justify-center text-sm font-semibold">
                        {item.name?.charAt(0)}
                      </div>

                      <div>
                        <p className="text-sm font-medium text-white">
                          {item.name}
                        </p>

                        <p className="text-xs text-zinc-500">
                          {new Date(item.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-zinc-300">
                      {item.text}
                    </p>
                  </div>
                ))
              ) : (
                <div className="rounded-3xl border border-dashed border-zinc-800 p-10 text-center">
                  <MessageCircle
                    size={40}
                    className="mx-auto mb-3 text-zinc-700"
                  />

                  <p className="text-zinc-500">
                    No comments yet. Start the conversation.
                  </p>
                </div>
              )}
            </div>
          </section>

            <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-6">
              <h3 className="text-sm font-medium text-zinc-300 mb-5">
                Article Info
              </h3>

              <div className="space-y-4 text-sm text-zinc-300">
                {author?.name && (
                  <div className="flex items-center gap-3">
                    <User size={15} />

                    <span>{author.name}</span>
                  </div>
                )}

                {displayDate && (
                  <div className="flex items-center gap-3">
                    <Calendar size={15} />

                    <span>{new Date(displayDate).toLocaleDateString()}</span>
                  </div>
                )}

                {readTime && (
                  <div className="flex items-center gap-3">
                    <Clock size={15} />

                    <span>{readTime}</span>
                  </div>
                )}
              </div>
            </div>

            {tags?.length > 0 && (
              <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-6">
                <h3 className="text-sm font-medium text-zinc-300 mb-4">Tags</h3>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-xs text-zinc-400 flex items-center gap-1.5"
                    >
                      <Tag size={10} />

                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SparkViewPage;
