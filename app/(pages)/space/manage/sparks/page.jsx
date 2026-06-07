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
import LoadingSpinner from "@/app/components/utils/LoadingSpinner";
import SparkCard from "@/app/components/space/spark/SparkCard";

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

  console.log(selectedSpark);
  

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
        user.id,
        selectedSpark.id
      );

      if (response?.success) {
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
    return <LoadingSpinner message="Loading sparks..." />;
  }

  return (
    <ReactSignedIn fallback={() => router.push("/space/login")}>
      <div className="min-h-screen text-white">
        {/* HEADER */}
        <header className="py-5">
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
           {filteredSparks.map((spark) => (
  <div
    key={spark.dataId || spark.id}
    className="relative"
  >
    <SparkCard spark={spark} />

    <div className="absolute top-4 right-4 z-50">
      <Dropdown
        align="right"
        width={180}
        menuClassName="rounded-2xl border border-zinc-800 bg-zinc-950 p-2"
        itemClassName="rounded-xl text-sm"
        trigger={
          <button
            onClick={(e) => e.preventDefault()}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-2xl border border-white/10
              bg-black/40 backdrop-blur
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
                }`
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
  </div>
))}
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
