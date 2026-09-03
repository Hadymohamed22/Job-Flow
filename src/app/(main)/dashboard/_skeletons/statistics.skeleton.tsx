import { Skeleton } from "@/shared/components/ui/skeleton";

export default function StatisticsSkeleton() {
  return (
    <section className="statistics grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 my-6 md:my-8">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="bg-[#2D344966] border border-[#908FA033] rounded-lg p-4 min-h-30 flex flex-col"
        >
          {/* Title & Icon */}
          <div className="flex items-center justify-between mb-2">
            <Skeleton className="h-4 w-24 bg-[#44445A]" />
            <Skeleton className="h-5 w-5 rounded bg-[#44445A]" />
          </div>
          {/* Data */}
          <Skeleton className="mt-auto h-10 w-1/2 bg-[#44445A]" />
        </div>
      ))}
    </section>
  );
}
