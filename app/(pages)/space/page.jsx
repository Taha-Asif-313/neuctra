"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

import NeuctraSpaceHeader from "@/app/components/space/NeuctraSpaceHeader";
import SparkCards from "@/app/components/space/SparkCards";

import { getAllSparks } from "@/app/services/spark";

const AllSparksPage = () => {
  const [sparks, setSparks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");

  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef(null);

  /* ---------------- INITIAL FETCH ---------------- */
  useEffect(() => {
    const fetchInitial = async () => {
      try {
        setLoading(true);

        const res = await getAllSparks({
          limit: 10,
        });

        if (res?.success) {
          setSparks(res.data || []);
          setCursor(res.nextCursor);
          setHasMore(res.hasMore);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchInitial();
  }, []);

  /* ---------------- LOAD MORE ---------------- */
  const loadMore = async () => {
    if (!hasMore || loadingMore) return;

    try {
      setLoadingMore(true);

      const res = await getAllSparks({
        limit: 10,
        cursor,
      });

      if (res?.success) {
        setSparks((prev) => [...prev, ...(res.data || [])]);
        setCursor(res.nextCursor);
        setHasMore(res.hasMore);
      }
    } finally {
      setLoadingMore(false);
    }
  };

  /* ---------------- INFINITE SCROLL OBSERVER ---------------- */
  const lastItemRef = (node) => {
    if (loadingMore) return;

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    });

    if (node) observerRef.current.observe(node);
  };

  /* ---------------- FILTER + SORT ---------------- */
  const filteredSparks = useMemo(() => {
    let filtered = [...sparks];

    filtered = filtered.filter((spark) => {
      const title = spark?.title || "";
      const category = spark?.category || "";

      const blocksText = Array.isArray(spark?.blocks)
        ? spark.blocks
            .map((block) => block?.content || block?.caption || "")
            .join(" ")
        : "";

      const search = searchTerm.toLowerCase();

      const matchesSearch =
        title.toLowerCase().includes(search) ||
        category.toLowerCase().includes(search) ||
        blocksText.toLowerCase().includes(search);

      const matchesCategory =
        selectedCategory === "all" ||
        category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });

    switch (sortBy) {
      case "latest":
        filtered.sort(
          (a, b) =>
            new Date(b?.createdAt || 0).getTime() -
            new Date(a?.createdAt || 0).getTime()
        );
        break;

      case "oldest":
        filtered.sort(
          (a, b) =>
            new Date(a?.createdAt || 0).getTime() -
            new Date(b?.createdAt || 0).getTime()
        );
        break;

      case "popular":
        filtered.sort((a, b) => (b?.views || 0) - (a?.views || 0));
        break;
    }

    return filtered;
  }, [sparks, searchTerm, selectedCategory, sortBy]);

  /* ---------------- RENDER ---------------- */
  return (
    <div className="min-h-screen text-white">
      {/* HEADER */}
      <div className="sticky top-0 z-50">
        <NeuctraSpaceHeader
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl py-6">
        {loading ? (
          <div className="flex min-h-screen items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        ) : (
          <>
            <SparkCards
              sparks={filteredSparks}
              lastItemRef={lastItemRef} // 🔥 important
            />

            {/* LOADING MORE */}
            {loadingMore && (
              <div className="py-6 text-center text-white/50">
                Loading more sparks...
              </div>
            )}

            {!hasMore && (
              <div className="py-6 text-center text-white/30">
                No more sparks
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllSparksPage;