import { Label } from "@/shared/components/ui/label";
import DateInputAndPicker from "../../new-application/_components/date-input-and-picker";

type Props = {
  value?: string;
  onChange: (value: string) => void;
  error?: string;
};

export default function EditDateField({ value, onChange, error }: Props) {
  return (
    <div className="date-field grow">
      {/* Label */}
      <Label htmlFor="date" className="text-[#908FA0]">
        DATE APPLIED
      </Label>

      {/* Text Input */}
      <DateInputAndPicker value={value} onChange={onChange} error={error} />
    </div>
  );
}
