import { Label } from "@/shared/components/ui/label";
import { ApplicationStatusType } from "../../_components/application-status-badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";

export default function ApplicationStatusFields() {
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
      <Select defaultValue="select-item">
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
    </div>
  );
}
