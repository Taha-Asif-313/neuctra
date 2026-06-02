"use client";

import { getAllUsers } from "@/app/services/user";
import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Search,
  Users,
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";
import { Avatar } from "@neuctra/ui";

const SparkAuthers = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const res = await getAllUsers();
        setAuthors(res?.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  /* ---------------- FILTERED AUTHORS ---------------- */
  const filteredAuthors = useMemo(() => {
    return authors.filter((user) => {
      const query = search.toLowerCase();

      return (
        user.name?.toLowerCase().includes(query) ||
        user.email?.toLowerCase().includes(query) ||
        user.role?.toLowerCase().includes(query)
      );
    });
  }, [authors, search]);

  return (
    <div className="min-h-screen text-white py-8">
      {/* HEADER + SEARCH (COMBINED) */}
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        {/* LEFT SIDE */}
        <div className="flex items-start gap-3">
          <div>
            <Link href={"/space"} className="flex items-center gap-4">
              <ArrowLeft className="hover:text-primary" size={24} />
              <h1 className="text-xl sm:text-2xl font-bold">Spark Authors</h1>
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Explore creators and contributors of Neuctra Spark
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - SEARCH */}
        <div className="w-full lg:w-[360px]">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search authors..."
              className="w-full rounded-lg border border-white/10 bg-white/5 pl-9 pr-3 py-2 text-sm text-white outline-none focus:border-primary/40 transition"
            />
          </div>
        </div>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="flex items-center gap-3 py-8 text-zinc-400">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-700 border-t-primary" />
          <span>Loading authors...</span>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredAuthors.map((user) => (
          <Link
            key={user.id}
            href={`/space/spark/authors/profile/${user.id}`}
            className="group block h-full"
          >
            <article
              className="
          relative h-full overflow-hidden
          rounded-[24px]
          border border-white/10
          bg-[#050505]
          p-5
          transition-all duration-300
          hover:border-primary/30
          hover:-translate-y-1
        "
            >
              {/* Background Glow */}
              <div
                className="
            absolute inset-0 opacity-0
            group-hover:opacity-100
            transition-opacity duration-500
          "
              >
                <div
                  className="
              absolute -top-10 -right-10
              w-40 h-40
              rounded-full
              bg-primary/10
            "
                />
              </div>

              {/* Status */}
              <div className="relative flex justify-end">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium ${
                    user.isActive
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      user.isActive ? "bg-green-400" : "bg-red-400"
                    }`}
                  />
                  {user.isActive ? "Active" : "Inactive"}
                </span>
              </div>

              {/* Avatar */}
              <div className="relative mt-2 flex justify-center">
                <Avatar
                  src={user.avatarUrl}
                  fallback={user?.name?.[0]?.toUpperCase()}
                  className="h-20 w-20"
                />
              </div>

              {/* Info */}
              <div className="relative mt-5 text-center">
                <h3
                  className="
      text-lg font-bold text-white
      truncate
      transition-colors
      group-hover:text-primary
    "
                >
                  {user.name || "Unknown User"}
                </h3>

                {/* Username */}
                {user.username && (
                  <p className="mt-1 text-xs text-primary font-medium">
                    @{user.username}
                  </p>
                )}

                <p className="mt-1 text-xs text-zinc-500 uppercase tracking-wider">
                  Author
                </p>

                <p className="mt-3 text-sm text-zinc-400 truncate">
                  {user.email}
                </p>
              </div>

              {/* Action */}
              <div
                className="
            relative mt-6 pt-4
            border-t border-white/5
            flex items-center justify-between
          "
              >
                <div>
                  <p className="text-sm font-medium text-white">View Profile</p>
                  <p className="text-xs text-zinc-500">Open author page</p>
                </div>

                <div
                  className="
              w-10 h-10 rounded-xl
              bg-primary/10
              border border-primary/20
              flex items-center justify-center
              transition-all duration-300
              group-hover:bg-primary
            "
                >
                  <ArrowUpRight
                    size={18}
                    className="
                text-primary
                transition-colors
                group-hover:text-white
              "
                  />
                </div>
              </div>

              {/* Bottom Accent */}
              <div
                className="
            absolute bottom-0 left-0
            h-[2px] w-0
            bg-primary
            transition-all duration-500
            group-hover:w-full
          "
              />
            </article>
          </Link>
        ))}
      </div>

      {/* EMPTY STATE */}
      {!loading && filteredAuthors.length === 0 && (
        <div className="text-gray-500 mt-6">No authors found.</div>
      )}
    </div>
  );
};

export default SparkAuthers;
