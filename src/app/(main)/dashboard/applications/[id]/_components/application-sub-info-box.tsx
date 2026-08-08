import { CalendarCheck, CircleDollarSign, MapPinned } from "lucide-react";

// Variables
const icons = {
  salary: <CircleDollarSign className="size-3 md:size-4" />,
  location: <MapPinned className="size-3 md:size-4" />,
  date: <CalendarCheck className="size-3 md:size-4" />,
} as const;

type Props = {
  title: string;
  variant: keyof typeof icons;
  info: string;
};

export default function ApplicationSubInfoBox({ title, variant, info }: Props) {
  return (
    <div className="application-sub-info-box bg-[#2D344966] border border-[#908FA033] rounded-lg p-4 grow">
      {/* Title */}
      <p className="flex items-center gap-1 text-xs md:text-sm text-gray-400">
        {icons[variant]}
        {title}
      </p>

      {/* Info */}
      <p className="text-gray-50 text-[0.625rem] md:text-xs mt-1 font-jetbrains">
        {info}
      </p>
    </div>
  );
}
