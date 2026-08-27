import { Skeleton } from "@/shared/components/ui/skeleton";

export default function UpcomingInterviewsSkeleton() {
  // Simulate loading 3 interview boxes
  return (
    <div className="interviews-container mt-4 flex flex-col gap-2">
      {[...Array(3)].map((_, idx) => (
        <div
          key={idx}
          className="flex items-center gap-3 bg-transparent py-3 px-2 rounded-lg"
        >
          {/* Company Image Skeleton */}
          <Skeleton className="h-12 w-12 rounded-full shrink-0" />

          {/* Info Skeletons */}
          <div className="flex flex-col gap-2 flex-1">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}
