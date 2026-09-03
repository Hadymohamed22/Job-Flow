import { cn } from "@/shared/lib/utils/tailwind-merge";

// Variables
const dotColors = {
  "new-application": "#00A572",
  edit: "#C0C1FF",
  reject: "#FF516A",
  interview: "oklch(60.6% 0.25 292.717)",
};

type DotColorsKes = keyof typeof dotColors;

type Props = {
  date: string;
  action: string;
  company: string;
  position: string;
  actionType?: DotColorsKes;
};

export default function ActivityFeedBox({
  date,
  action,
  company,
  position,
  actionType = "edit",
}: Props) {
  return (
    <div
      style={{ "--dot-color": dotColors[actionType] } as React.CSSProperties}
      className={cn(
        "activity-feed-box relative before:absolute before:size-2 before:rounded-full before:top-1 before:-left-5 before:outline-3 before:outline-[#0B1326]",
        "before:bg-(--dot-color)",
      )}
    >
      {/* Date */}
      <p className="date text-xs text-[#C7C4D7]">{date}</p>

      {/* Action */}
      <p className="action text-lg md:text-xl text-[#DAE2FD] my-1">{action}</p>

      {/* Company & Position */}
      <p className="company-and-position text-xs md:text-sm text-custom-primary">
        <span className="company">{company}</span> -{" "}
        <span className="position">{position}</span>
      </p>
    </div>
  );
}
