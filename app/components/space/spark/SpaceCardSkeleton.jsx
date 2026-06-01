"use client";

export default function SparkSkeleton({ height = "h-64" }) {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950">
      <div className={`bg-zinc-900 ${height}`} />

      <div className="space-y-3 p-5">
        <div className="h-4 w-3/4 rounded bg-zinc-900" />
        <div className="h-4 w-full rounded bg-zinc-900" />
        <div className="h-4 w-2/3 rounded bg-zinc-900" />
      </div>
    </div>
  );
}