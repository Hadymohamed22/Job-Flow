import { Label } from "@/shared/components/ui/label";
import DateInputAndPicker from "./date-input-and-picker";

export default function DateSectionFields() {
  return (
    <div className="date-field grow">
      {/* Label */}
      <Label htmlFor="date" className="text-[#908FA0]">
        DATE APPLIED
      </Label>

      {/* Text Input */}
      <DateInputAndPicker />
    </div>
  );
}
