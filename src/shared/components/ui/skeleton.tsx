import { cn } from "@/shared/lib/utils/tailwind-merge";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-gray-200/40", className)}
      {...props}
    />
  );
}

export { Skeleton };
