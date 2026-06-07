"use client";

import { useSearchParams } from "next/navigation";
import NeuctraSpaceHeader from "@/app/components/space/NeuctraSpaceHeader";
import NeuctraSpaceSparks from "@/app/components/space/NeuctraSpaceSparks";

const AllSparksPage = () => {
  const searchParams = useSearchParams();

  // get ?tag=react
  const tag = searchParams.get("tag");

  return (
    <div className="min-h-screen text-white">
      {/* HEADER */}
      <NeuctraSpaceHeader />

      {/* CONTENT */}
      <NeuctraSpaceSparks tag={tag} />
    </div>
  );
};

export default AllSparksPage;