import { Skeleton } from "@/shared/components/ui/skeleton";

export default function EditFormSkeleton() {
  return (
    <div className="flex flex-col gap-6 mt-7 md:mt-8">
      {/* Company & Work Location & Job Title Skeleton */}
      <div className="mb-2">
        <div className="flex items-center gap-2 mb-4">
          <Skeleton className="w-7 h-7 rounded-md" />
          <Skeleton className="h-5 w-40 rounded" />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Skeleton className="h-12 w-40 rounded" />
          <Skeleton className="h-12 w-40 rounded" />
          <Skeleton className="h-12 w-36 rounded" />
          <Skeleton className="h-12 w-16 rounded" />
        </div>
      </div>

      {/* Finance & Logistics Skeleton */}
      <div className="mb-2">
        <div className="flex items-center gap-2 mb-4">
          <Skeleton className="w-7 h-7 rounded-md" />
          <Skeleton className="h-5 w-44 rounded" />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Skeleton className="h-12 w-40 rounded" />
          <Skeleton className="h-12 w-40 rounded" />
          <Skeleton className="h-12 w-36 rounded" />
          <Skeleton className="h-12 w-48 rounded" />
        </div>
      </div>

      {/* Application Status And Date Skeleton */}
      <div className="application-status-and-date flex items-center flex-wrap gap-6">
        {/* Application Status Skeleton */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-32 rounded mb-2" />
          <Skeleton className="h-12 w-40 rounded" />
        </div>

        {/* Date Skeleton */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-20 rounded mb-2" />
          <Skeleton className="h-12 w-32 rounded" />
        </div>
      </div>

      {/* Backend Error Skeleton (empty for skeleton) */}
      {/* Submit OR Cancel Skeleton */}
      <div className="submit-cancel flex flex-col md:flex-row md:items-center md:justify-end gap-4 mt-4 md:mt-10">
        {/* Cancel Button Skeleton */}
        <Skeleton className="h-12 w-28 rounded" />
        {/* Submit Button Skeleton */}
        <Skeleton className="h-12 w-40 rounded" />
      </div>
    </div>
  );
}
