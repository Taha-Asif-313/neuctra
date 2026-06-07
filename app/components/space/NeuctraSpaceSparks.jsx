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
const SparkItem = ({ spark, isLast, lastItemRef }) => {
  return (
    <div ref={isLast ? lastItemRef : null} className="break-inside-avoid">
      <SparkCard spark={spark} />
    </div>
  );
};

export default function NeuctraSpaceSparks({ tag }) {
  const [error, setError] = useState(null);
  const [loadMoreError, setLoadMoreError] = useState(null);
  const [searchInput, setSearchInput] = useState(tag || "");
  const [sparks, setSparks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef(null);

  console.log(sparks);

  useEffect(() => {
    fetchInitial();
  }, []);

  const fetchInitial = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await getAllSparks({ limit: 10 });

      if (!res?.success) {
        throw new Error(res?.message || "Failed to load sparks");
      }

      // ✅ FILTER HERE
      const publicSparks = (res.data || []).filter(
        (spark) => spark.visibility === "public",
      );

      setSparks(publicSparks);
      setCursor(res.nextCursor);
      setHasMore(res.hasMore);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      handleSearch();
    }, 400);

    return () => clearTimeout(delay);
  }, [searchInput]);

  const handleSearch = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      if (!searchInput.trim()) {
        return fetchInitial();
      }

      const res = await getSearchSparks(searchInput);

      if (!res?.success) {
        throw new Error(res?.message || "Search failed");
      }

      setSparks(res.data || []);
      setHasMore(false);
    } catch (err) {
      setError(err.message || "Unable to search sparks");
    } finally {
      setLoading(false);
    }
  }, [searchInput]);

  const loadMore = async () => {
    if (!hasMore || loadingMore) return;

    try {
      setLoadingMore(true);
      setLoadMoreError(null);

      const res = await getAllSparks({
        limit: 10,
        cursor,
      });

      if (!res?.success) {
        throw new Error(res?.message || "Failed to load more");
      }

      setSparks((prev) => [
        ...prev,
        ...(res.data || []).filter((spark) => spark.visibility === "public"),
      ]);
      setCursor(res.nextCursor);
      setHasMore(res.hasMore);
    } catch (err) {
      setLoadMoreError(err.message || "Unable to load more sparks");
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

  if (error) {
    return (
      <section className="w-full">
        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center">
          <h3 className="mb-2 text-lg font-semibold text-white">
            Failed to load sparks
          </h3>

          <p className="mb-5 max-w-md text-sm text-zinc-400">{error}</p>

          <Button onClick={fetchInitial} className="rounded-xl">
            Try Again
          </Button>
        </div>
      </section>
    );
  }

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
          className="rounded-xl bg-primary px-4 text-[13px] py-2"
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
          className="flex gap-4 mb-5"
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

      {loadMoreError && (
        <div className="mt-5 flex justify-center">
          <Button variant="outline" onClick={loadMore} className="rounded-xl">
            Retry Loading More
          </Button>
        </div>
      )}
    </section>
  );
}
