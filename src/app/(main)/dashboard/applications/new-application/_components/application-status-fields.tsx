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

export default function ApplicationStatusFields({
  value,
  onChange,
  error,
}: Props) {
  // Variables
  const statuses: {
    label: ApplicationStatusType | "Select Status";
    value: string;
  }[] = [
    { label: "Applied", value: "Applied" },
    { label: "Considering", value: "Considering" },
    { label: "Interviewing", value: "Interviewing" },
    { label: "Rejected", value: "Rejected" },
  ];

  return (
    <div className="application-status-field grow">
      {/* Label */}
      <Label htmlFor="application-status" className="text-[#908FA0]">
        Current Stage
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
            {statuses.map((item) => (
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
