type Props = {
  type: ApplicationStatusType;
  title: string;
  length: number | string;
};

export default function ApplicationColumnHeader({
  type,
  title,
  length,
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
    <header className="application-column-header border-b border-[#46455480] p-3 md:p-4">
      <div className="flex items-center gap-2">
        <h3
          className={`relative ps-4 text-[#DAE2FD] font-semibold text-base md:text-lg before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-2 before:rounded-full ${circleColorClass}`}
        >
          {title}
        </h3>
        <span className="bg-[#2D3449] text-gray-300 text-sm font-medium rounded-full min-w-6 h-6 flex items-center justify-center px-3">
          {length}
        </span>
      </div>
    </header>
  );
}
