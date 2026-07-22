import { cn } from "@/shared/lib/utils/tailwind-merge";

export type ApplicationStatusType =
  | "Interviewing"
  | "Applied"
  | "Considering"
  | "Rejected";

const statusStyles: Record<ApplicationStatusType, string> = {
  Interviewing: "border-indigo-500/40 bg-indigo-500/15 text-indigo-300",
  Applied: "border-emerald-500/40 bg-emerald-500/15 text-emerald-400",
  Considering: "border-amber-500/40 bg-amber-500/15 text-amber-400",
  Rejected: "border-rose-500/40 bg-rose-500/15 text-rose-400",
};

interface ApplicationStatusBadgeProps {
  status: ApplicationStatusType;
  className?: string;
}

export default function ApplicationStatusBadge({
  status,
  className,
}: ApplicationStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium whitespace-nowrap",
        statusStyles[status],
        className,
      )}
    >
      {status}
    </span>
  );
}
