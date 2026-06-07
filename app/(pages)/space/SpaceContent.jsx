"use client";

import { useSearchParams } from "next/navigation";
import NeuctraSpaceHeader from "@/app/components/space/NeuctraSpaceHeader";
import NeuctraSpaceSparks from "@/app/components/space/NeuctraSpaceSparks";

function SpaceContent() {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");

  return (
    <>
      <NeuctraSpaceHeader />
      <NeuctraSpaceSparks tag={tag} />
    </>
  );
}

export default SpaceContent;
