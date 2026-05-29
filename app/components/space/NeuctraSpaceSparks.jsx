"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { Search } from "lucide-react";

import SparkCard from "./spark/SparkCard";
import { getAllSparks, getSearchSparks } from "@/app/services/spark";
import { Button, Input } from "@neuctra/ui";

/* =========================
   Spark Item (memoized once)
========================= */
const SparkItem = React.memo(({ spark, isLast, lastItemRef }) => {
  return (
    <div ref={isLast ? lastItemRef : null} className="mb-6 break-inside-avoid">
      <SparkCard spark={spark} />
    </div>
  );
});

export default function NeuctraSpaceSparks() {
  const [searchInput, setSearchInput] = useState("");
  const [sparks, setSparks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef(null);

  /* =========================
     INITIAL FETCH
  ========================= */
  useEffect(() => {
    fetchInitial();
  }, []);

  const fetchInitial = async () => {
    try {
      setLoading(true);

      const res = await getAllSparks({ limit: 10 });

      if (res?.success) {
        setSparks(res.data || []);
        setCursor(res.nextCursor);
        setHasMore(res.hasMore);
      }
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     SEARCH (debounced)
  ========================= */
  useEffect(() => {
    const delay = setTimeout(() => {
      handleSearch();
    }, 400);

    return () => clearTimeout(delay);
  }, [searchInput]);

  const handleSearch = useCallback(async () => {
    try {
      setLoading(true);

      if (!searchInput.trim()) {
        return fetchInitial();
      }

      const res = await getSearchSparks(searchInput);

      if (res?.success) {
        setSparks(res.data || []);
        setHasMore(false);
      }
    } finally {
      setLoading(false);
    }
  }, [searchInput]);

  /* =========================
     LOAD MORE
  ========================= */
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

  /* =========================
     UI
  ========================= */
  return (
    <section className="w-full">
      {/* SEARCH */}
      <div className="mb-5 flex gap-3">
        <Input
          placeholder="Search sparks..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          prefixIcon={Search}
          inputClassName="border-border! rounded-xl!"
        />

        <Button
          onClick={handleSearch}
          className="rounded-xl bg-primary px-4 text-[13px]"
          textClassName="leading-0"
        >
          Search
        </Button>
      </div>

      <div className="columns-1 gap-6 lg:columns-3">
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        ) : (
          sparks.map((spark, i) => (
            <SparkItem
              key={spark.id}
              spark={spark}
              isLast={i === sparks.length - 1}
              lastItemRef={lastItemRef}
            />
          ))
        )}

        {loadingMore && (
          <div className="flex justify-center py-6">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        )}

        {!hasMore && sparks.length > 0 && (
          <div className="py-6 text-center text-sm text-zinc-400">
            No more sparks
          </div>
        )}
      </div>
    </section>
  );
}
