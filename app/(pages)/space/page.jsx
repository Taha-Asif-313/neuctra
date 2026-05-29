"use client";
import NeuctraSpaceHeader from "@/app/components/space/NeuctraSpaceHeader";
import NeuctraSpaceSparks from "@/app/components/space/NeuctraSpaceSparks";

const AllSparksPage = () => {
  /* ---------------- RENDER ---------------- */
  return (
    <div className="min-h-screen text-white">
      {/* HEADER */}
      <NeuctraSpaceHeader />

      {/* CONTENT */}
      <NeuctraSpaceSparks />
    </div>
  );
};

export default AllSparksPage;
