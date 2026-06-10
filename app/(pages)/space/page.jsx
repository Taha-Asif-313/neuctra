import { Suspense } from "react";
import SpaceContent from "./SpaceContent";
import LoadingSpinner from "@/app/components/utils/LoadingSpinner";

export default function AllSparksPage() {
  return (
    <Suspense fallback={<LoadingSpinner message="Loading sparks..." />}>
      <div className="min-h-screen text-white">
        <SpaceContent />
      </div>
    </Suspense>
  );
}
