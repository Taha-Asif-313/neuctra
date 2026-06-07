import { Suspense } from "react";
import SpaceContent from "./SpaceContent";
import LoadingSpinner from "@/app/components/utils/LoadingSpinner";

export default function AllSparksPage() {
  return (
    <div className="min-h-screen text-white">
      <Suspense fallback={<LoadingSpinner message="Loading sparks..." />}>
        <SpaceContent />
      </Suspense>
    </div>
  );
}
