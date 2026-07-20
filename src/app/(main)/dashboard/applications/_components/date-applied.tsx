interface DateAppliedProps {
  date: string | Date;
  className?: string;
}

export default function DateApplied({ date, className }: DateAppliedProps) {
  const parsedDate = typeof date === "string" ? new Date(date) : date;

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsedDate);

  return <span className={className}>{formattedDate}</span>;
}
