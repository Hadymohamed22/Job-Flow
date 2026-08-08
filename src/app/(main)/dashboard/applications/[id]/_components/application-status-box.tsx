import { cn } from "@/shared/lib/utils/tailwind-merge";

const dotColors = {
  Interviewing: "#00A572",
  Considering: "#C0C1FF",
  Rejected: "#FF516A",
  Applied: "oklch(60.6% 0.25 292.717)",
};

const dotShadows = {
  InterviewingShadow: "#00A5724D",
  ConsideringShadow: "#C0C1FF4D",
  RejectedShadow: "#FF516A4D",
  AppliedShadow: "oklch(60.6% 0.25 292.717 / 0.3)",
};

type DotColors = keyof typeof dotColors;

type Props = {
  status: DotColors;
  date: string;
};

export default function ApplicationStatusBox({ status, date }: Props) {
  // Variables
  const formatted = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      style={
        {
          "--dot-color": dotColors[status],
          "--dot-shadow": dotShadows[`${status}Shadow`],
        } as React.CSSProperties
      }
      className={cn(
        "application-status-box relative before:absolute before:size-3 md:before:size-4 before:rounded-full before:top-1 before:-left-7",
        "before:bg-(--dot-color) before:shadow-[0_0_10px_3px_var(--dot-shadow)]",
      )}
    >
      {/* Status */}
      <h6 className="text-sm md:text-base text-[#DAE2FD] font-semibold">
        {status}
      </h6>

      {/* Date */}
      <p className="text-[0.625rem] md:text-xs font-jetbrains text-gray-500">
        {formatted}
      </p>
    </div>
  );
}
