import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils/tailwind-merge";
import { Building2, Cloud, TrendingUpDown } from "lucide-react";

type WorkLocationType = {
  key: WorkLocationsValue;
  value: WorkLocationsValue;
  label: string;
  icon: React.ReactNode;
};

// Variables
const workLocations: WorkLocationType[] = [
  {
    key: "remote",
    value: "remote",
    label: "Remote",
    icon: <Cloud size={20} />,
  },
  {
    key: "on-site",
    value: "on-site",
    label: "On Site",
    icon: <Building2 size={20} />,
  },
  {
    key: "hybrid",
    value: "hybrid",
    label: "Hybrid",
    icon: <TrendingUpDown size={20} />,
  },
];

type Props = {
  selectedWorkLocation: WorkLocationsValue;
  setSelectedWorkLocation: React.Dispatch<
    React.SetStateAction<WorkLocationsValue>
  >;
};

export default function WorkLocations({
  selectedWorkLocation,
  setSelectedWorkLocation,
}: Props) {
  return (
    <div
      className="work-locations flex items-center gap-4 flex-wrap"
      role="radiogroup"
      aria-label="Work Location"
    >
      {workLocations.map((location) => (
        <Button
          role="radio"
          aria-checked={selectedWorkLocation === location.value}
          key={location.key}
          variant="outline"
          className={cn(
            "grow flex items-center gap-2 bg-[#060E20]! duration-300 hover:bg-[#060e208c]! py-4",
            selectedWorkLocation === location.key &&
              "bg-custom-primary! text-[#0D0096]! hover:bg-custom-primary! cursor-default",
          )}
          onClick={() => setSelectedWorkLocation(location.value)}
        >
          {/* Icon */}
          {location.icon}

          {/* Text */}
          <span>{location.label}</span>
        </Button>
      ))}
    </div>
  );
}
