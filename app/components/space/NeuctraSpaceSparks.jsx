"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Masonry from "react-masonry-css";
import SparkCard from "./spark/SparkCard";
import { Search } from "lucide-react";
import { getAllSparks, getSearchSparks } from "@/app/services/spark";
import { Button, Input } from "@neuctra/ui";
import SparkSkeleton from "./spark/SpaceCardSkeleton";

const breakpointColumns = {
  default: 3,
  1024: 2,
  640: 1,
};

/* =========================
   Spark Item (memoized once)
========================= */
const SparkItem = React.memo(({ spark, isLast, lastItemRef }) => {
  return (
    <div ref={isLast ? lastItemRef : null} className="break-inside-avoid">
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

      {loading ? (
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-6"
          columnClassName="flex flex-col gap-6"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <SparkSkeleton
              key={i}
              height={i % 3 === 0 ? "h-48" : i % 3 === 1 ? "h-64" : "h-80"}
            />
          ))}
        </Masonry>
      ) : (
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-4"
          columnClassName="flex flex-col gap-4"
        >
          {sparks.map((spark, i) => (
            <SparkItem
              key={spark.id}
              spark={spark}
              isLast={i === sparks.length - 1}
              lastItemRef={lastItemRef}
            />
          ))}

          {loadingMore &&
            Array.from({ length: 3 }).map((_, i) => (
              <SparkSkeleton
                key={`more-${i}`}
                height={i % 3 === 0 ? "h-48" : i % 3 === 1 ? "h-64" : "h-80"}
              />
            ))}
        </Masonry>
      )}
    </section>
  );
}
