"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
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
  LayoutGrid,
  MoreVertical,
  Newspaper,
  ArrowLeft,
} from "lucide-react";

import { Badge, Button, Dropdown, Input, useToast } from "@neuctra/ui";
import { deleteSpark, getUserSparks } from "@/app/services/spark";
import { authix } from "@/app/utils/neuctraAuthix";
import { useRouter } from "next/navigation";
import DeleteConfirmModal from "@/app/components/space/modals/DeleteConfirmModal";
import Link from "next/link";
import { ReactSignedIn } from "@neuctra/authix";
import { useAdmin } from "@/app/contexts/AdminContext";

const ManageSparksPage = () => {
  const { user } = useAdmin();

  const router = useRouter();

  const { toast } = useToast();

  /* ---------------- STATE ---------------- */
  const [sparks, setSparks] = useState([]);

  const [loading, setLoading] = useState(true);

  const [loadingMore, setLoadingMore] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [selectedSpark, setSelectedSpark] = useState(null);

  const [deleteLoading, setDeleteLoading] = useState(false);

  const [cursor, setCursor] = useState(null);

  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef(null);

  /* ---------------- FETCH INITIAL ---------------- */
  useEffect(() => {
    if (!user?.id) return;

    const fetchSparks = async () => {
      try {
        setLoading(true);

        const response = await getUserSparks(user.id, {
          limit: 10,
        });

        console.log("Sparks Response:", response);

        if (response?.success) {
          setSparks(response.data || []);

          setCursor(response.nextCursor);

          setHasMore(response.hasMore);
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

  /* ---------------- LOAD MORE ---------------- */
  const loadMore = async () => {
    if (!hasMore || loadingMore || !user?.id) return;

    try {
      setLoadingMore(true);

      const response = await getUserSparks(user.id, {
        limit: 10,
        cursor,
      });

      if (response?.success) {
        setSparks((prev) => [...prev, ...(response.data || [])]);

        setCursor(response.nextCursor);

        setHasMore(response.hasMore);
      }
    } catch (error) {
      console.error("Load More Sparks Error:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  /* ---------------- OBSERVER ---------------- */
  const lastItemRef = (node) => {
    if (loadingMore) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    });

    if (node) {
      observerRef.current.observe(node);
    }
  };

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
        <header className="sticky top-0 z-50 py-4 backdrop-blur">
          <div className="mx-auto max-w-7xl rounded-3xl border border-zinc-900 bg-zinc-950/90 px-4 py-4 shadow-[0_0_40px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:px-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              {/* LEFT */}
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex items-center gap-3">
                  <Link
                    href="/space"
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:border-primary/40 hover:bg-zinc-800"
                  >
                    <ArrowLeft size={20} className="text-primary" />
                  </Link>

                  <div>
                    <h1 className="truncate text-2xl font-bold tracking-tight sm:text-3xl">
                      Manage Sparks
                    </h1>

                    <p className="mt-1 text-sm text-white/40">
                      Create, edit, organize, and manage all your sparks.
                    </p>
                  </div>
                </div>
              </div>

              {/* DESKTOP ACTIONS */}
              <div className="hidden items-center gap-3 sm:flex">
                <Link
                  href="/space/manage/sparks/create"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02] hover:opacity-90"
                >
                  <Plus size={18} />
                  Create Spark
                </Link>

                <button
                  onClick={handleLogoutClick}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/20"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>

              {/* MOBILE ACTIONS */}
              <div className="flex justify-end sm:hidden">
                <Dropdown
                  align="right"
                  width={220}
                  menuClassName="rounded-2xl border border-zinc-800 bg-zinc-950 p-2"
                  itemClassName="rounded-xl text-sm"
                  trigger={
                    <button className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm font-medium transition hover:bg-zinc-800">
                      <LayoutGrid size={16} />
                      Actions
                    </button>
                  }
                  items={[
                    {
                      label: "Create Spark",
                      icon: <Plus size={16} />,
                      onClick: () => router.push("/space/manage/sparks/create"),
                    },
                    { separator: true },
                    {
                      label: "Logout",
                      icon: <LogOut size={16} />,
                      danger: true,
                      onClick: handleLogoutClick,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <main className="relative z-10 mx-auto max-w-7xl">
          {/* STATS */}
          {totalSparks > 0 && (
            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {/* Total */}
              <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-4">
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
              <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-4">
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
              <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-4">
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

          {/* SEARCH */}
          {sparks.length > 0 && (
            <div className="mb-4 rounded-3xl border border-zinc-900 bg-zinc-950 p-5">
              <Input
                type="text"
                prefixIcon={Search}
                placeholder="Search sparks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                wrapperClassName="w-full"
                inputClassName="bg-zinc-950!"
              />
            </div>
          )}

          {/* EMPTY */}
          {filteredSparks.length === 0 ? (
            <div className="flex min-h-75 flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-800 bg-zinc-950/30 text-center">
              <Newspaper className="h-14 w-14 text-zinc-500" />

              <h3 className="mt-5 text-xl font-semibold">No sparks found</h3>

              <p className="mt-2 text-sm text-zinc-500">
                Start publishing your first spark.
              </p>
            </div>
          ) : (
            <div className="grid gap-5">
              {filteredSparks.map((spark, index) => {
                const isLast = index === filteredSparks.length - 1;

                return (
                  <div
                    key={spark.dataId || spark.id}
                    ref={isLast ? lastItemRef : null}
                    className="group overflow-hidden rounded-3xl border border-zinc-900 bg-zinc-950 p-4 transition hover:bg-white/[0.04]"
                  >
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      {/* LEFT */}
                      <div className="min-w-0 flex-1">
                        {/* BADGES */}
                        <div className="mb-4 flex flex-wrap items-center gap-2">
                          <Badge
                            text={spark.category || "General"}
                            icon={<Folder size={12} className="mr-1 inline" />}
                            size="md"
                          />

                          {spark.featured && (
                            <Badge
                              text="Featured"
                              icon={<Star size={12} className="mr-1 inline" />}
                              size="md"
                              variant="soft"
                              className="bg-yellow-500/10! text-yellow-500"
                            />
                          )}
                        </div>

                        {/* TITLE */}
                        <h2 className="mb-3 text-2xl font-bold transition group-hover:text-primary">
                          {spark.title || "Untitled Spark"}
                        </h2>

                        {/* CONTENT */}
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              spark?.blocks?.[0]?.content?.slice(0, 150) ||
                              "No content available",
                          }}
                          className="max-w-3xl text-sm leading-relaxed text-white/70"
                        />

                        {/* META */}
                        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/40">
                          <div className="flex items-center gap-2">
                            <Clock3 size={14} />

                            <span>{spark.readTime || "1 min read"}</span>
                          </div>

                          <div>
                            {spark.createdAt
                              ? new Date(spark.createdAt).toLocaleDateString()
                              : "No date"}
                          </div>
                        </div>
                      </div>

                      {/* ACTIONS */}
                      <div className="hidden items-center gap-3 lg:flex">
                        <Button
                          onClick={() =>
                            router.push(
                              `/space/manage/sparks/edit/${
                                spark.dataId || spark.id
                              }`,
                            )
                          }
                          className="rounded-2xl bg-primary p-4 text-white"
                        >
                          <Edit2 size={15} />
                        </Button>

                        <Button
                          onClick={() => openDeleteModal(spark)}
                          className="rounded-2xl bg-red-700 p-4"
                        >
                          <Trash2 size={15} />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* LOADING MORE */}
          {loadingMore && (
            <div className="flex items-center justify-center py-6">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            </div>
          )}

          {/* END */}
          {!hasMore && sparks.length > 0 && (
            <div className="py-6 text-sm text-center text-zinc-200">
              No more sparks
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
