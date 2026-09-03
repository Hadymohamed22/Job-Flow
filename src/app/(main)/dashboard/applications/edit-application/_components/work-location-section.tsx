import { useController, useFormContext } from "react-hook-form";
import WorkLocationSelectBox from "./work-location-select-box";
import { EditApplicationFormFields } from "../../new-application/_schema/add-application.schema";

export default function WorkLocationSection() {
  // Hooks
  const { control } = useFormContext<EditApplicationFormFields>();

  // Variables
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    control,
    name: "workLocation",
  });

  return (
    <WorkLocationSelectBox
      value={value}
      onChange={onChange}
      error={error?.message}
    />
  );
}
