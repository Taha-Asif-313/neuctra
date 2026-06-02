"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  LogOut,
  Clock3,
  Folder,
  Star,
  FileText,
  Eye,
  ArrowLeft,
  Newspaper,
  Heart,
  MessageCircle,
  ArrowUpRight,
  Lightbulb,
  CalendarDays,
  MoreVertical,
  User,
  LayoutDashboard,
} from "lucide-react";

import { Avatar, Dropdown, Input, useToast } from "@neuctra/ui";
import { deleteSpark, getUserSparks } from "@/app/services/spark";
import { authix } from "@/app/utils/neuctraAuthix";
import { useRouter } from "next/navigation";
import DeleteConfirmModal from "@/app/components/space/modals/DeleteConfirmModal";
import Link from "next/link";
import { ReactSignedIn } from "@neuctra/authix";
import { useAdmin } from "@/app/contexts/AdminContext";
import UserButton from "@/app/components/space/user/UserButton";

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

const ManageSparksPage = () => {
  const { user } = useAdmin();

  const router = useRouter();

  const { toast } = useToast();

  /* ---------------- STATE ---------------- */
  const [sparks, setSparks] = useState([]);

  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [selectedSpark, setSelectedSpark] = useState(null);

  const [deleteLoading, setDeleteLoading] = useState(false);

  /* ---------------- FETCH ALL ---------------- */
  useEffect(() => {
    if (!user?.id) return;

    const fetchSparks = async () => {
      try {
        setLoading(true);

        const response = await getUserSparks(user.id);

        console.log("Sparks Response:", response);

        if (response?.success) {
          setSparks(response.data || []);
        } else {
          setSparks([]);

          toast.error("Failed to load sparks");
        }
      } catch (error) {
        console.error("Fetch Sparks Error:", error);

        setSparks([]);

        toast.error("Something went wrong while loading sparks");
      } finally {
        setLoading(false);
      }
    };

    fetchSparks();
  }, [user?.id]);

  /* ---------------- DELETE SPARK ---------------- */
  const confirmDeleteSpark = async () => {
    if (!selectedSpark) return;

    try {
      setDeleteLoading(true);

      const response = await deleteSpark(
        selectedSpark.userId,
        selectedSpark.dataId || selectedSpark.id,
      );

      if (response?.success || response) {
        setSparks((prev) =>
          prev.filter(
            (spark) =>
              (spark.dataId || spark.id) !==
              (selectedSpark.dataId || selectedSpark.id),
          ),
        );

        toast.success("Spark deleted successfully");
      } else {
        toast.error("Failed to delete spark");
      }
    } catch (error) {
      console.error("Delete Spark Error:", error);

      toast.error("Failed to delete spark");
    } finally {
      setDeleteLoading(false);

      setDeleteModalOpen(false);

      setSelectedSpark(null);
    }
  };

  const openDeleteModal = (spark) => {
    setSelectedSpark(spark);

    setDeleteModalOpen(true);
  };

  /* ---------------- LOGOUT ---------------- */
  const handleLogoutClick = async () => {
    await authix.logoutUser();

    router.push("/space");
  };

  /* ---------------- FILTER ---------------- */
  const filteredSparks = useMemo(() => {
    return sparks.filter((spark) => {
      const title = spark?.title || "";

      const category = spark?.category || "";

      const blocksText = Array.isArray(spark?.blocks)
        ? spark.blocks
            .map((block) => block?.content || block?.caption || "")
            .join(" ")
        : "";

      const search = searchTerm.toLowerCase();

      return (
        title.toLowerCase().includes(search) ||
        category.toLowerCase().includes(search) ||
        blocksText.toLowerCase().includes(search)
      );
    });
  }, [sparks, searchTerm]);

  /* ---------------- STATS ---------------- */
  const totalSparks = sparks.length;

  const featuredSparks = sparks.filter((spark) => spark?.featured).length;

  const publicSparks = sparks.filter(
    (spark) => spark?.visibility === "public" || !spark?.visibility,
  ).length;

  /* ---------------- LOADING ---------------- */
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-2 border-primary border-t-transparent" />

          <p className="text-white/50">Loading sparks...</p>
        </div>
      </div>
    );
  }

  return (
    <ReactSignedIn fallback={() => router.push("/space/login")}>
      <div className="min-h-screen text-white">
        {/* HEADER */}
        <header className="border-b border-white/5 py-5">
          <div className="mx-auto max-w-7xl">
            {/* TOP ROW (ALWAYS SINGLE LINE) */}
            <div className="flex h-16 items-center justify-between gap-4">
              {/* LEFT */}
              <div>
                <Link href="/space" className="flex items-center gap-4">
                  <ArrowLeft
                    size={24}
                    className="transition-colors hover:text-primary"
                  />

                  <h1 className="text-xl font-bold sm:text-2xl">
                    Manage Sparks
                  </h1>
                </Link>

                <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                  Create, edit, organize sparks
                </p>
              </div>

              {/* DESKTOP ACTIONS */}
              <div className="hidden items-center gap-3 sm:flex">
                {/* SEARCH */}
                <div className="w-64">
                  <Input
                    prefixIcon={Search}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="h-10 rounded-xl border border-zinc-800 bg-zinc-900 pl-10 text-sm text-white"
                  />
                </div>

                {/* CREATE */}
                <Link
                  href="/space/manage/sparks/create"
                  className="flex h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-white transition hover:bg-primary/90"
                >
                  <Plus size={16} />
                  Create
                </Link>

                {/* USER DROPDOWN (NEW) */}
                <UserButton />
              </div>

              {/* MOBILE MENU BUTTON ONLY */}
              <div className="sm:hidden flex items-center gap-2">
                {/* CREATE */}
                <Link
                  href="/space/manage/sparks/create"
                  className="flex h-10 w-10 justify-center items-center gap-2 rounded-full bg-primary text-sm font-medium text-white transition hover:bg-primary/90"
                >
                  <Plus size={16} />
                </Link>
                <UserButton />
              </div>
            </div>

            {/* MOBILE SEARCH (VISIBLE BELOW HEADER) */}
            <div className="mt-4 sm:hidden">
              <Input
                prefixIcon={Search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search sparks..."
                className="h-11 rounded-xl border border-zinc-800 bg-zinc-900 pl-10 text-sm text-white"
              />
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <main className="relative z-10 mx-auto max-w-7xl pb-10 ">
          {/* STATS */}
          {totalSparks > 0 && (
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {/* Total */}
              <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-5">
                <div className="mb-4 flex items-start justify-between">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <FileText size={20} />
                  </div>

                  <span className="text-xs text-white/40">Total</span>
                </div>

                <h2 className="text-3xl font-bold">{totalSparks}</h2>

                <p className="mt-2 text-sm text-white/40">
                  Total sparks created
                </p>
              </div>

              {/* Featured */}
              <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-5">
                <div className="mb-4 flex items-start justify-between">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <Star size={20} />
                  </div>

                  <span className="text-xs text-white/40">Featured</span>
                </div>

                <h2 className="text-3xl font-bold">{featuredSparks}</h2>

                <p className="mt-2 text-sm text-white/40">Featured sparks</p>
              </div>

              {/* Public */}
              <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-5">
                <div className="mb-4 flex items-start justify-between">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <Eye size={20} />
                  </div>

                  <span className="text-xs text-white/40">Public</span>
                </div>

                <h2 className="text-3xl font-bold">{publicSparks}</h2>

                <p className="mt-2 text-sm text-white/40">
                  Public visible sparks
                </p>
              </div>
            </div>
          )}

          {/* EMPTY */}
          {filteredSparks.length === 0 ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[32px] border border-dashed border-zinc-800 bg-zinc-950/40 text-center">
              <Newspaper className="h-14 w-14 text-zinc-500" />

              <h3 className="mt-5 text-xl font-semibold">No sparks found</h3>

              <p className="mt-2 text-sm text-zinc-500">
                Start publishing your first spark.
              </p>

              <Link
                href="/space/manage/sparks/create"
                className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                <Plus size={16} />
                Create Spark
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredSparks.map((spark) => {
                const cover = getCoverImage(spark);

                return (
                  <article
                    key={spark.dataId || spark.id}
                    className="
                      group relative flex flex-col overflow-hidden
                      rounded-[30px]
                      border border-white/10
                      bg-[#050505]
                      transition-all duration-500
                      hover:border-primary/40
                    "
                  >
                    {/* COVER */}
                    <div className="relative h-60 overflow-hidden">
                      {cover ? (
                        <>
                          <div
                            className="
                              absolute inset-0 bg-cover bg-center
                              transition-transform duration-700
                              group-hover:scale-110
                            "
                            style={{
                              backgroundImage: `url('${cover}')`,
                            }}
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                        </>
                      ) : (
                        <div
                          className="
                            absolute inset-0
                            bg-gradient-to-br from-[#001a0c] via-black to-[#00150a]
                            flex items-center justify-center
                          "
                        >
                          <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />

                            <div
                              className="
                                relative flex h-20 w-20 items-center justify-center rounded-3xl
                                border border-primary/20
                                bg-primary/5
                              "
                            >
                              <Lightbulb
                                size={36}
                                className="text-primary/70"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* TOP */}
                      <div className="absolute left-4 right-4 top-4 z-20 flex items-start justify-between">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className="
                              rounded-full bg-primary
                              px-3 py-1 text-[11px] font-semibold text-white
                            "
                          >
                            Spark
                          </span>

                          {spark.category && (
                            <span
                              className="
                                rounded-full border border-white/10 bg-black/40
                                px-3 py-1 text-[11px] font-semibold text-white backdrop-blur
                              "
                            >
                              {spark.category}
                            </span>
                          )}

                          {spark.featured && (
                            <span
                              className="
                                rounded-full bg-yellow-500
                                px-3 py-1 text-[11px] font-semibold text-black
                              "
                            >
                              Featured
                            </span>
                          )}
                        </div>

                        <Dropdown
                          align="right"
                          width={180}
                          menuClassName="rounded-2xl border border-zinc-800 bg-zinc-950 p-2"
                          itemClassName="rounded-xl text-sm"
                          trigger={
                            <button
                              className="
                                flex h-10 w-10 items-center justify-center rounded-2xl
                                border border-white/10 bg-black/40 backdrop-blur
                                transition hover:bg-black/60
                              "
                            >
                              <MoreVertical size={16} />
                            </button>
                          }
                          items={[
                            {
                              label: "Edit Spark",
                              icon: <Edit2 size={15} />,
                              onClick: () =>
                                router.push(
                                  `/space/manage/sparks/edit/${
                                    spark.dataId || spark.id
                                  }`,
                                ),
                            },
                            { separator: true },
                            {
                              label: "Delete Spark",
                              icon: <Trash2 size={15} />,
                              danger: true,
                              onClick: () => openDeleteModal(spark),
                            },
                          ]}
                        />
                      </div>

                      {/* STATS */}
                      <div
                        className="
                          absolute bottom-4 left-4 z-20
                          flex flex-wrap items-center gap-2
                        "
                      >
                        <div
                          className="
                            flex items-center gap-1.5 rounded-full
                            border border-white/10 bg-black/45
                            px-3 py-1.5 text-[11px] text-white backdrop-blur-md
                          "
                        >
                          <Eye size={14} />
                          {spark.views || 0}
                        </div>

                        <div
                          className="
                            flex items-center gap-1.5 rounded-full
                            border border-white/10 bg-black/45
                            px-3 py-1.5 text-[11px] text-white backdrop-blur-md
                          "
                        >
                          <Heart
                            fill="#fb2c36"
                            size={14}
                            className="text-red-500"
                          />
                          {spark.likes || 0}
                        </div>

                        <div
                          className="
                            flex items-center gap-1.5 rounded-full
                            border border-white/10 bg-black/45
                            px-3 py-1.5 text-[11px] text-white backdrop-blur-md
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

                    {/* CONTENT */}
                    <div className="flex flex-1 flex-col p-5">
                      {/* META */}
                      <div
                        className="
                          flex items-center gap-4
                          text-[12px] font-medium text-zinc-400
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

                      {/* TITLE */}
                      <h2
                        className="
                          mt-4 line-clamp-2
                          text-[1.35rem] font-bold leading-[1.4] text-white
                          transition-colors duration-300
                          group-hover:text-primary
                        "
                      >
                        {spark.title || "Untitled Spark"}
                      </h2>

                      {/* EXCERPT */}
                      <p
                        className="
                          mt-3 flex-1
                          text-sm leading-[1.8] text-zinc-400
                          line-clamp-3
                        "
                      >
                        {getExcerpt(spark.blocks)}
                      </p>

                      {/* TAGS */}
                      {spark.tags?.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {spark.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="
                                rounded-full border border-white/[0.06]
                                bg-white/[0.03]
                                px-2.5 py-1 text-[11px]
                                font-medium text-zinc-300
                              "
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* FOOTER */}
                      <div
                        className="
                          mt-5 flex items-center justify-between
                          border-t border-white/[0.06]
                          pt-4
                        "
                      >
                        <Link
                          href={`/space/${spark.userId}/${
                            spark.dataId || spark.id
                          }`}
                          className="group/link flex items-center gap-2"
                        >
                          <div>
                            <p className="text-sm font-semibold text-white">
                              Open Spark
                            </p>

                            <p className="text-[11px] text-zinc-500">
                              Preview spark
                            </p>
                          </div>
                        </Link>

                        <button
                          onClick={() =>
                            router.push(
                              `/space/manage/sparks/edit/${
                                spark.dataId || spark.id
                              }`,
                            )
                          }
                          className="
                            flex h-11 w-11 items-center justify-center rounded-2xl
                            border border-primary/20
                            bg-primary/5
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
                        </button>
                      </div>
                    </div>

                    {/* BOTTOM GLOW */}
                    <div
                      className="
                        absolute bottom-0 left-0 h-[2px] w-0
                        bg-gradient-to-r from-transparent via-primary to-transparent
                        transition-all duration-500
                        group-hover:w-full
                      "
                    />
                  </article>
                );
              })}
            </div>
          )}
        </main>

        {/* DELETE MODAL */}
        <DeleteConfirmModal
          isOpen={deleteModalOpen}
          onClose={() => {
            if (!deleteLoading) {
              setDeleteModalOpen(false);

              setSelectedSpark(null);
            }
          }}
          onConfirm={confirmDeleteSpark}
          loading={deleteLoading}
          title="Delete Spark"
          description={
            selectedSpark
              ? `Are you sure you want to delete "${selectedSpark.title}"?`
              : "Are you sure you want to delete this spark?"
          }
        />
      </div>
    </ReactSignedIn>
  );
};

export default ManageSparksPage;
