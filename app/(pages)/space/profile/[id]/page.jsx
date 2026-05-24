"use client";

import { getUserById } from "@/app/services/user";
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
} from "lucide-react";
import Link from "next/link";

const AuthorProfile = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [sparks, setSparks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 rounded-full border-2 border-primary border-t-transparent animate-spin" />

          <p className="text-sm text-zinc-500">Loading profile...</p>
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
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* PROFILE */}
        <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 md:p-8">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
            {/* LEFT */}
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              {/* AVATAR */}
              <div className="relative">
                <div className="h-24 w-24 rounded-full bg-primary p-[2px]">
                  <div className="h-full w-full rounded-full bg-zinc-900 overflow-hidden flex items-center justify-center">
                    {user.avatarUrl ? (
                      <img
                        src={user.avatarUrl}
                        alt={user.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl font-bold">
                        {user?.name?.charAt(0) || "U"}
                      </span>
                    )}
                  </div>
                </div>

                {user.isVerified && (
                  <div className="absolute bottom-0 right-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">
                    <BadgeCheck size={15} />
                  </div>
                )}
              </div>

              {/* INFO */}
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-3xl md:text-4xl font-bold">
                    {user.name}
                  </h1>

                  <span
                    className={`px-3 py-1 rounded-full text-xs border ${
                      user.isActive
                        ? "bg-primary/10 text-primary border-primary/20"
                        : "bg-red-500/10 text-red-400 border-red-500/20"
                    }`}
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </span>
                </div>

                <p className="mt-2 text-zinc-400">
                  {user.role === "admin"
                    ? "Admin Author & Spark Creator"
                    : "Spark Author"}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <div className="rounded-2xl border border-white/10 bg-zinc-900 px-4 py-3">
                    <p className="text-xs text-zinc-500">Total Sparks</p>

                    <div className="flex items-center gap-2 mt-1">
                      <Sparkles size={16} className="text-primary" />

                      <p className="font-semibold">{sparks.length}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-zinc-900 px-4 py-3">
                    <p className="text-xs text-zinc-500">Joined</p>

                    <div className="flex items-center gap-2 mt-1">
                      <CalendarDays size={16} className="text-zinc-400" />

                      <p className="font-semibold">{joinedDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={shareProfile}
                className="h-11 px-5 rounded-xl bg-primary text-white font-medium hover:opacity-90 transition-all flex items-center gap-2"
              >
                <Share2 size={16} />
                Share Profile
              </button>

              <button
                onClick={copyProfile}
                className="h-11 px-5 rounded-xl border border-white/10 bg-zinc-900 hover:bg-zinc-800 transition-all flex items-center gap-2"
              >
                <Copy size={16} />
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>
          </div>

          {/* INFO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5" />

                <div>
                  <p className="text-xs text-zinc-500 uppercase">Email</p>

                  <p className="text-sm mt-1 break-all">{user.email}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-zinc-400 mt-0.5" />

                <div>
                  <p className="text-xs text-zinc-500 uppercase">Phone</p>

                  <p className="text-sm mt-1">
                    {user.phone || "Not Provided"}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-zinc-400 mt-0.5" />

                <div>
                  <p className="text-xs text-zinc-500 uppercase">Address</p>

                  <p className="text-sm mt-1">
                    {user.address || "Unknown"}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={18}
                  className="text-zinc-400 mt-0.5"
                />

                <div>
                  <p className="text-xs text-zinc-500 uppercase">
                    Verification
                  </p>

                  <p className="text-sm mt-1">
                    {user.isVerified
                      ? "Verified Account"
                      : "Not Verified"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SPARKS */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Published Sparks
              </h2>

              <p className="text-zinc-500 mt-1">
                Explore all public sparks created by this author
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 text-zinc-500">
              <Sparkles size={15} />
              {sparks.length} Sparks
            </div>
          </div>

          {sparks.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-white/10 bg-zinc-950 py-20 text-center">
              <Sparkles
                size={40}
                className="mx-auto mb-4 text-zinc-700"
              />

              <h3 className="text-2xl font-semibold">No Sparks Yet</h3>

              <p className="text-zinc-500 mt-2">
                This author hasn’t published any sparks yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sparks.map((spark) => (
                <div
                  key={spark.id}
                  className="group rounded-3xl overflow-hidden border border-white/10 bg-zinc-950"
                >
                  {/* IMAGE */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={
                        spark.coverImage ||
                        spark.blocks?.find((b) => b.type === "image")?.url ||
                        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                      }
                      alt={spark.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/60 border border-white/10 text-xs backdrop-blur">
                        {spark.category}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock3 size={13} />
                        {spark.readTime}
                      </div>

                      <div className="h-1 w-1 rounded-full bg-zinc-700" />

                      <div className="flex items-center gap-1">
                        <Eye size={13} />
                        Public
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold line-clamp-2">
                      {spark.title}
                    </h3>

                    <p className="mt-3 text-sm text-zinc-400 line-clamp-3">
                      {spark.blocks
                        ?.find((b) => b.type === "text")
                        ?.content?.replace(/<[^>]+>/g, "")
                        ?.slice(0, 140)}
                      ...
                    </p>

                    <Link href={`/space/${user.id}/${spark.id}`} className="mt-5 w-full h-11 rounded-xl bg-primary text-white hover:opacity-90 transition-all font-medium flex items-center justify-center gap-2">
                      Read Spark
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;