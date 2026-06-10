"use client";

import { useSearchParams } from "next/navigation";
import NeuctraSpaceHeader from "@/app/components/space/NeuctraSpaceHeader";
import NeuctraSpaceSparks from "@/app/components/space/NeuctraSpaceSparks";
import ScrollToTopButton from "@/app/components/utils/ScrollToTopButton";

function SpaceContent() {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");

  return (
    <>
      <ScrollToTopButton />
      <NeuctraSpaceHeader />
      <NeuctraSpaceSparks tag={tag} />
    </>
  );
}

export default SpaceContent;
