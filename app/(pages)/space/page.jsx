"use client";

import React, { useEffect, useMemo, useState } from "react";

import NeuctraSpaceHeader from "@/app/components/space/NeuctraSpaceHeader";
import SparkCards from "@/app/components/space/SparkCards";

import { getAllSparks } from "@/app/services/spark";

const AllSparksPage = () => {
  const [sparks, setSparks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");

  /* ---------------- FETCH SPARKS ---------------- */
  useEffect(() => {
    const fetchSparks = async () => {
      try {
        setLoading(true);

        const response = await getAllSparks();

        if (response?.success) {
          setSparks(response?.data || []);
        }
      } catch (error) {
        console.error("Fetch Sparks Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSparks();
  }, []);

  /* ---------------- FILTER + SORT ---------------- */
  const filteredSparks = useMemo(() => {
    let filtered = [...sparks];

    filtered = filtered.filter((spark) => {
      const title = spark?.title || "";
      const category = spark?.category || "";

      /* content is array + stringified json */
      const blocksText = Array.isArray(spark?.blocks)
        ? spark.blocks
            .map((block) => {
              if (block?.content) return block.content;
              if (block?.caption) return block.caption;
              return "";
            })
            .join(" ")
        : "";

      const search = searchTerm.toLowerCase();

      const matchesSearch =
        title.toLowerCase().includes(search) ||
        category.toLowerCase().includes(search) ||
        blocksText.toLowerCase().includes(search);

      const matchesCategory =
        selectedCategory === "all" ||
        category.toLowerCase() ===
          selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });

    /* SORTING */
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
        filtered.sort(
          (a, b) => (b?.views || 0) - (a?.views || 0)
        );
        break;

      default:
        break;
    }

    return filtered;
  }, [sparks, searchTerm, selectedCategory, sortBy]);

  console.log(filteredSparks);
  

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
            <div className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-2 border-primary border-t-transparent" />

              <p className="text-white/50">
                Loading sparks...
              </p>
            </div>
          </div>
        ) : filteredSparks.length === 0 ? (
          /* EMPTY STATE */
          <div className="flex min-h-[60vh] items-center justify-center">
            <div className="text-center">
              <h2 className="mb-2 text-2xl font-semibold">
                No Sparks Found
              </h2>

              <p className="text-white/50">
                Try changing search or category filters.
              </p>
            </div>
          </div>
        ) : (
          <SparkCards sparks={filteredSparks} />
        )}
      </div>
    </div>
  );
};

export default AllSparksPage;