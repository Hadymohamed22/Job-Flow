import { Skeleton } from "@/shared/components/ui/skeleton";

export default function ApplicationDetailsSkeleton() {
  return (
    <div className="application-details mt-5 space-y-6">
      {/* Job And Recruiter Contact Skeleton */}
      <div className="flex flex-col lg:flex-row gap-4">
        <Skeleton className="h-24 w-full lg:w-2/3 rounded-lg" />
        <Skeleton className="h-10 w-full lg:w-1/6 rounded-lg" />
        <Skeleton className="h-10 w-full lg:w-1/6 rounded-lg" />
      </div>

      {/* Salary & Location & Date Skeleton */}
      <div className="flex flex-col md:flex-row gap-4">
        <Skeleton className="h-10 w-full md:w-1/3 rounded-lg" />
        <Skeleton className="h-10 w-full md:w-1/3 rounded-lg" />
        <Skeleton className="h-10 w-full md:w-1/3 rounded-lg" />
      </div>

      {/* Notes & Timeline Skeleton */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <Skeleton className="h-36 w-full rounded-lg" />
        <Skeleton className="h-36 w-full rounded-lg lg:col-span-2" />
      </div>
    </div>
  );
}
