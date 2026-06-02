"use client";

import { getUserById, updateUserAvatar } from "@/app/services/user";
import { getUserSparks } from "@/app/services/spark";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Share2,
  Copy,
  Sparkles,
  CalendarDays,
  ArrowRight,
  BadgeCheck,
  Eye,
  Clock3,
  Info,
  Search,
  Camera,
} from "lucide-react";
import Link from "next/link";
import SparkCard from "@/app/components/space/spark/SparkCard";
import Masonry from "react-masonry-css";
import NeuctraSpaceHeader from "@/app/components/space/NeuctraSpaceHeader";
import { Button, Input } from "@neuctra/ui";
import { useAdmin } from "@/app/contexts/AdminContext";
import AvatarUpdateModal from "@/app/components/space/modals/AvatarUpdateModal";

const AuthorProfile = () => {
  const { id } = useParams();

  const { user: currentUser } = useAdmin();
  const isOwner = currentUser?.id === id;

  const [user, setUser] = useState(null);
  const [sparks, setSparks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        setLoading(true);

        const res = await getUserById(id);
        const sparksRes = await getUserSparks(id);

        setUser(res?.data || null);
        setSparks(sparksRes?.data || sparksRes || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchAuthor();
  }, [id]);

  const joinedDate = useMemo(() => {
    if (!user?.createdAt) return "";

    return new Date(user.createdAt).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  }, [user]);

  const copyProfile = async () => {
    await navigator.clipboard.writeText(window.location.href);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const shareProfile = async () => {
    if (navigator.share) {
      await navigator.share({
        title: user?.name,
        text: "Check out this author profile",
        url: window.location.href,
      });
    } else {
      copyProfile();
    }
  };

  const filteredSparks = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return sparks;

    return sparks.filter((spark) => {
      const title = spark?.title || "";
      const category = spark?.category || "";
      const tags = spark?.tags?.join(" ") || "";

      const textContent =
        spark?.blocks
          ?.filter((b) => b.type === "text")
          ?.map((b) => b.content || "")
          ?.join(" ") || "";

      return (
        title.toLowerCase().includes(query) ||
        category.toLowerCase().includes(query) ||
        tags.toLowerCase().includes(query) ||
        textContent.toLowerCase().includes(query)
      );
    });
  }, [sparks, search]);

  const breakpointColumnsObj = {
    default: 3,
    1280: 3,
    1024: 2,
    640: 1,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 rounded-full border-2 border-primary border-t-transparent animate-spin" />

          <p className="text-sm text-zinc-300">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        User not found
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <NeuctraSpaceHeader />
      <div className="max-w-7xl mx-auto py-5">
        {/* PROFILE */}
        <div>
          <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
            {/* AVATAR */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div
                onClick={() => isOwner && setIsModalOpen(true)}
                className={`
                relative flex h-20 w-20 sm:h-24 sm:w-24
                shrink-0 items-center justify-center
                rounded-full
                border border-zinc-800 bg-zinc-900
                ${isOwner ? "cursor-pointer group" : ""}`}
              >
                {/* Avatar */}
                {user.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt={user.name}
                    className="h-full w-full object-cover rounded-full"
                  />
                ) : (
                  <span className="text-2xl font-semibold text-white">
                    {user?.name?.charAt(0) || "U"}
                  </span>
                )}

                {/* CAMERA ICON (FIXED POSITION + NO CUT) */}
                {isOwner && (
                  <div
                    className="
                    absolute bottom-1 -right-1
                    z-20"
                  >
                    <div
                      className="
                      h-7 w-7
                      rounded-full
                      bg-primary
                      border border-white/20
                      flex items-center justify-center
                      group-hover:scale-110 transition"
                    >
                      <Camera size={14} className="text-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* INFO */}
              <div className="min-w-0 space-y-0.5">
                <h1 className="truncate leading-none text-2xl font-semibold tracking-tight sm:text-3xl text-white">
                  {user.name}
                </h1>

                <p className="text-sm text-zinc-300">@{user.username}</p>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {user.isVerified && (
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-500">
                      Verified
                    </span>
                  )}

                  <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">
                    Joined {joinedDate}
                  </span>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                iconBefore={<Share2 size={14} />}
                onClick={shareProfile}
                textClassName="leading-0"
                className=" bg-white px-4 text-[13px] text-black! hover:bg-zinc-200"
              >
                Share
              </Button>

              <Button
                iconBefore={<Copy size={14} />}
                onClick={copyProfile}
                textClassName="leading-0"
                className=" px-4 text-[13px] text-white hover:bg-zinc-800"
              >
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>
        </div>

        {/* SPARKS */}
        <div className="mt-12">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Author Sparks</h2>

              <p className="mt-0.5 text-sm text-zinc-200">
                Explore all public sparks created by this author
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Input
                size="lg"
                placeholder="Search sparks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                inputClassName="w-full sm:w-80"
                prefixIcon={Search}
              />
            </div>
          </div>

          {filteredSparks.length === 0 ? (
            <div className="rounded-3xl border-2 border-dashed border-zinc-900 py-20 text-center">
              <Info size={40} className="mx-auto mb-2 text-zinc-300" />

              <h3 className="text-2xl font-semibold">
                {search ? "No matching sparks found" : "No Sparks Yet"}
              </h3>

              <p className="mt-2 text-zinc-400">
                {search
                  ? `No sparks match "${search}".`
                  : "This author hasn’t published any sparks yet."}
              </p>
            </div>
          ) : (
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="flex gap-6"
              columnClassName="flex flex-col gap-6"
            >
              {filteredSparks.map((spark) => (
                <div className="break-inside-avoid">
                  {" "}
                  <SparkCard
                    key={spark.id}
                    spark={{
                      ...spark,
                      userId: user.id,
                    }}
                  />
                </div>
              ))}
            </Masonry>
          )}
        </div>
      </div>

      <AvatarUpdateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={user}
        onSuccess={(newAvatar) => {
          setUser((prev) => ({
            ...prev,
            avatarUrl: newAvatar,
          }));
        }}
      />
    </div>
  );
};

export default AuthorProfile;
