import { Skeleton } from "@/shared/components/ui/skeleton";

export default function ActivityFeedSkeleton() {
  // Simulate 5 activity feed items as skeletons
  return (
    <div className="activity-feed-container pl-4 border-l border-[#46455480] flex flex-col gap-4 md:gap-6 mt-6 grow">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="relative before:absolute before:size-2 before:rounded-full before:top-1 before:-left-5 before:bg-[#908FA033]"
        >
          <Skeleton className="h-4 w-28 mb-2" /> {/* Date skeleton */}
          <Skeleton className="h-6 w-3/4 mb-2" /> {/* Action skeleton */}
          <Skeleton className="h-4 w-1/2" /> {/* Company & Position skeleton */}
        </div>
      ))}
    </div>
  );
}
