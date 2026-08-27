import { Skeleton } from "@/shared/components/ui/skeleton";

export default function ApplicationsColumnsSkeleton() {
  // We mimic the four columns of the Kanban board,
  // each with a skeleton header and several (3) application item skeletons
  return (
    <div className="applications-columns flex gap-4 md:gap-6 w-full overflow-x-auto pb-2 min-h-[88vh] md:min-h-[85vh] lg:min-h-[81vh]">
      {["Applied", "Considering", "Interviewing", "Rejected"].map((status) => (
        <div
          key={status}
          className="flex flex-col bg-[#10172a] rounded-lg px-2 py-4 size-67.5 h-fit"
        >
          {/* Skeleton Header */}
          <div className="mb-4">
            <Skeleton className="h-5 w-28 rounded" />
          </div>
          {/* Column skeleton applications */}
          <div className="flex flex-col gap-3">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[#46455480] bg-[#0B1326] px-4 py-3"
              >
                <Skeleton className="h-4 w-36 mb-2" />
                <Skeleton className="h-3 w-24 mb-3" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-3 w-3 rounded-full" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
