import { Skeleton } from "@/shared/components/ui/skeleton";

const barHeights = [65, 80, 92, 70, 110, 96, 60, 84, 75, 120, 90, 106];

export default function ApplicationsChartSkeleton() {
  return (
    <div className="w-full h-100 flex items-end gap-1">
      {barHeights.map((height, idx) => (
        <Skeleton
          key={idx}
          className="flex-1 rounded-md"
          style={{ height: `${height}px` }}
        />
      ))}
    </div>
  );
}
