import DateSectionFields from "./date-section-fields";
import NewApplicationSection from "./new-application-section";
import { useController, useFormContext } from "react-hook-form";
import { AddApplicationFormValues } from "../_schema/add-application.schema";

export default function DateSection() {
  const { control } = useFormContext<AddApplicationFormValues>();

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    control,
    name: "date",
  });

  return (
    <NewApplicationSection
      title="Date Applied"
      iconName="calendar"
      className="grow"
    >
      <DateSectionFields
        value={value}
        onChange={onChange}
        error={error?.message}
      />
    </NewApplicationSection>
  );
}
