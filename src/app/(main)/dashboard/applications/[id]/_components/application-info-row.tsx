import { cn } from "@/shared/lib/utils/tailwind-merge";

export default function ApplicationInfoRow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "application-info-row flex justify-between gap-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
