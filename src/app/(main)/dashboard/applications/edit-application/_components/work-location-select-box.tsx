import { Label } from "@/shared/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";

type Props = {
  value?: string;
  onChange: (value: string) => void;
  error?: string;
};

export default function WorkLocationSelectBox({
  value,
  onChange,
  error,
}: Props) {
  // Variables
  const workLocations: {
    label: WorkLocationsValue;
    value: WorkLocationsValue;
  }[] = [
    { label: "on-site", value: "on-site" },
    { label: "remote", value: "remote" },
    { label: "hybrid", value: "hybrid" },
  ];

  return (
    <div className="application-status-field grow">
      {/* Label */}
      <Label htmlFor="application-status" className="text-[#908FA0]">
        Work Location
      </Label>

      {/* Text Input */}
      <Select value={value || "select-item"} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="select-item" disabled>
              Select Item
            </SelectItem>
            {workLocations.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {error ? (
        <p className="mt-2 text-[10px] font-jetbrains text-red-600">{error}</p>
      ) : null}
    </div>
  );
}
