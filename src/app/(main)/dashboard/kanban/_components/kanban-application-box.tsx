import { getRelativeTimeAgo } from "@/shared/utils/get-relative-time-ago.util";
import { Clock } from "lucide-react";

type Props = {
  type: ApplicationStatusType;
  date: string;
  jobTitle: string;
  companyName: string;
};

export default function KanbanApplicationBox({
  type,
  date,
  jobTitle,
  companyName,
}: Props) {
  // Variables
  const circleColorClass =
    type === "Applied"
      ? "before:bg-[#d1d5dc]"
      : type === "Considering"
        ? "before:bg-[#8083FF]"
        : type === "Interviewing"
          ? "before:bg-[#4EDEA3]"
          : "before:bg-[#fb2c36]";

  return (
    <div
      className={`kanban-application-box relative overflow-hidden rounded-lg border border-[#46455480] bg-[#0B1326] px-4 py-2 before:absolute before:left-0 before:top-0 before:h-full before:w-1 ${circleColorClass}`}
    >
      <h4 className="text-base font-semibold text-[#e8eaf0]">{jobTitle}</h4>
      <p className="mt-0.5 text-sm text-[#8b8fa3]">{companyName}</p>

      <div className="flex items-center gap-1.5 font-mono text-xs text-[#8b8fa3] mt-2 border-t border-[#4645544D] pt-2">
        <Clock className="size-3" />
        <span>{getRelativeTimeAgo(date)}</span>
      </div>
    </div>
  );
}
