"use client";

import React from "react";
import { Newspaper } from "lucide-react";
import SparkCard from "./spark/SparkCard";

export default function SparkCards({ sparks = [] }) {
  return (
    <section className="w-full">
      {/* Grid */}
      <div className="grid lg:grid-cols-3 gap-4">
        {sparks.map((spark) => (
          <SparkCard key={spark.id} spark={spark} />
        ))}
      </div>

      {/* Empty State */}
      {!sparks.length && (
        <div
          className="
            min-h-[280px]
            rounded-2xl
            border border-dashed border-white
            flex flex-col items-center justify-center
            text-center
          "
        >
          <Newspaper size={48} className="text-primary" />

          <h3 className="mt-5 text-lg font-medium ">No sparks found</h3>

          <p className="mt-2 text-[13px] text-primary">
            Start publishing your first article.
          </p>
        </div>
      )}
    </section>
  );
}
