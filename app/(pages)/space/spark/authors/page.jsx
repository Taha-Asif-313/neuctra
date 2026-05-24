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
              <ArrowLeft className="text-primary" size={22} />
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
      {loading && <div className="text-gray-400">Loading authors...</div>}

      {/* GRID */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredAuthors.map((user) => (
          <div
            key={user.id}
            className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:border-primary/30 transition-all duration-200"
          >
            {/* TOP */}
            <div className="flex items-center justify-between">
              {/* LEFT */}
              <div className="flex items-center gap-3 min-w-0">
                <Avatar
                  src={user?.avatarUrl}
                  fallback={user?.name[0]?.toUpperCase()}
                />

                <div className="min-w-0">
                  <h2 className="font-semibold text-white truncate">
                    {user.name || "Unknown User"}
                  </h2>

                  <p className="text-xs text-gray-400">Author</p>
                </div>
              </div>

              {/* STATUS */}
              <span
                className={`text-[11px] px-2 py-1 rounded-full border ${
                  user.isActive
                    ? "border-green-500/20 text-green-400 bg-green-500/5"
                    : "border-red-500/20 text-red-400 bg-red-500/5"
                }`}
              >
                {user.isActive ? "Active" : "Inactive"}
              </span>
            </div>

            {/* EMAIL (minimal info only) */}
            <div className="mt-3 text-xs text-gray-400 truncate">
              {user.email}
            </div>

            {/* ACTION */}
            <div className="mt-4 flex items-center justify-end">
              <Link href={`/space/profile/${user.id}`}>
                <button className="text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition">
                  View Profile
                </button>
              </Link>
            </div>
          </div>
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
