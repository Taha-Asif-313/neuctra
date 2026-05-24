"use client";

import { getUserById } from "@/app/services/user";
import { getUserSparks } from "@/app/services/spark";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import {
  User,
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
      <div className="min-h-screen text-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          <p className="text-zinc-400">Loading profile...</p>
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
    <div className="min-h-screen text-white relative overflow-hidden">
  

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-10">
        {/* HERO CARD */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 md:p-10 shadow-2xl">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/20 pointer-events-none" />

          <div className="relative flex flex-col xl:flex-row gap-10 xl:items-center xl:justify-between">
            {/* LEFT */}
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              {/* Avatar */}
              <div className="relative">
                <div className="h-28 w-28 rounded-full bg-primary p-0.5">
                  <div className="h-full w-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    {user.avatarUrl ? (
                      <img
                        src={user.avatarUrl}
                        alt={user.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-4xl font-bold text-white">
                        {user?.name?.charAt(0) || "U"}
                      </span>
                    )}
                  </div>
                </div>

                {user.isVerified && (
                  <div className="absolute bottom-0.5 right-0.5 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                    <BadgeCheck size={18} />
                  </div>
                )}
              </div>

              {/* USER INFO */}
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-3xl md:text-5xl font-black tracking-tight">
                    {user.name}
                  </h1>

                  <span
                    className={`px-3 py-1 rounded-full text-xs border ${
                      user.isActive
                        ? "bg-emerald-500/10 text-primary border-emerald-500/20"
                        : "bg-red-500/10 text-red-400 border-red-500/20"
                    }`}
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </span>
                </div>

                <p className="mt-2 text-zinc-400 text-lg">
                  {user.role === "admin"
                    ? "Admin Author & Spark Creator"
                    : "Spark Author"}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <Sparkles size={18} className="text-primary" />
                    <div>
                      <p className="text-sm text-zinc-400">Total Sparks</p>
                      <p className="font-bold text-lg">{sparks.length}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <CalendarDays size={18} className="text-cyan-400" />
                    <div>
                      <p className="text-sm text-zinc-400">Joined</p>
                      <p className="font-bold">{joinedDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={shareProfile}
                className="h-12 px-5 rounded-2xl bg-emerald-500 hover:bg-primary transition-all duration-300 text-black font-semibold flex items-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <Share2 size={17} />
                Share Profile
              </button>

              <button
                onClick={copyProfile}
                className="h-12 px-5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-300 flex items-center gap-2"
              >
                <Copy size={17} />
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>
          </div>

          {/* INFO GRID */}
          <div className="relative mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={18} />
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-sm mt-1 break-all">{user.email}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="flex items-center gap-3">
                <Phone className="text-cyan-400" size={18} />
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-sm mt-1">
                    {user.phone || "Not Provided"}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="flex items-center gap-3">
                <MapPin className="text-pink-400" size={18} />
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">
                    Address
                  </p>
                  <p className="text-sm mt-1">
                    {user.address || "Unknown"}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-yellow-400" size={18} />
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">
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

        {/* SPARKS SECTION */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-black">Published Sparks</h2>
              <p className="text-zinc-400 mt-1">
                Explore all public sparks created by this author
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 text-zinc-400">
              <Sparkles size={16} />
              {sparks.length} Sparks
            </div>
          </div>

          {sparks.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.03] py-20 text-center">
              <Sparkles
                size={42}
                className="mx-auto mb-4 text-zinc-600"
              />

              <h3 className="text-2xl font-bold">No Sparks Yet</h3>

              <p className="text-zinc-500 mt-2">
                This author hasn’t published any sparks yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sparks.map((spark) => (
                <div
                  key={spark.id}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-all duration-300"
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
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-xs">
                        {spark.category}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-zinc-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock3 size={13} />
                        {spark.readTime}
                      </div>

                      <div className="h-1 w-1 rounded-full bg-zinc-600" />

                      <div className="flex items-center gap-1">
                        <Eye size={13} />
                        Public
                      </div>
                    </div>

                    <h3 className="text-xl font-bold line-clamp-2">
                      {spark.title}
                    </h3>

                    <p className="mt-3 text-sm text-zinc-400 line-clamp-3">
                      {spark.blocks?.find((b) => b.type === "text")?.content
                        ?.replace(/<[^>]+>/g, "")
                        ?.slice(0, 140)}
                      ...
                    </p>

                    <button className="mt-5 w-full h-11 rounded-2xl border border-white/10 bg-black/40 hover:bg-emerald-500 hover:text-black transition-all duration-300 font-medium flex items-center justify-center gap-2">
                      Read Spark
                      <ArrowRight size={16} />
                    </button>
                  </div>

                  {/* Glow Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
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