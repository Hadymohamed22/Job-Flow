import {
  CalendarCheck,
  FileUser,
  MessagesSquare,
  UserRoundSearch,
} from "lucide-react";
import { StatisticTypeProp } from "./statistics";

type Props = {
  title: string;
  icon: StatisticTypeProp;
  data: string | number;
};

export default function StatisticBox({ title, icon, data }: Props) {
  // Variables
  const icons = {
    applications: <FileUser className="size-3.5 md:size-4 text-blue-500" />,
    "in-consider": (
      <UserRoundSearch className="size-3.5 md:size-4 text-amber-500" />
    ),
    interviews: (
      <CalendarCheck className="size-3.5 md:size-4 text-violet-500" />
    ),
    "response-rate": (
      <MessagesSquare className="size-3.5 md:size-4 text-emerald-500" />
    ),
  };
  return (
    <div className="statistic-box bg-[#2D344966] border border-[#908FA033] rounded-lg p-4 min-h-30 flex flex-col duration-300 hover:border-green-100 hover:-translate-y-2">
      {/* Title And Icon */}
      <div className="title-icon flex items-center justify-between text-xs md:text-sm text-[#C7C4D7]">
        <p>{title}</p>

        {icons[icon]}
      </div>

      {/* Data */}
      <p className="data mt-auto font-semibold text-3xl md:text-4xl text-gray-50">
        {data}
      </p>
    </div>
  );
}
