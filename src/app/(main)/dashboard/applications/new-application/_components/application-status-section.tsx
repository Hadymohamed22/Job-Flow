import ApplicationStatusFields from "./application-status-fields";
import NewApplicationSection from "./new-application-section";
import { useController, useFormContext } from "react-hook-form";
import { AddApplicationFormValues } from "../_schema/add-application.schema";

export default function ApplicationStatusSection() {
  const { control } = useFormContext<AddApplicationFormValues>();

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    control,
    name: "applicationStatus",
  });

  return (
    <NewApplicationSection
      title="Application Status"
      iconName="application"
      className="grow"
    >
      <ApplicationStatusFields
        value={value}
        onChange={onChange}
        error={error?.message}
      />
    </NewApplicationSection>
  );
}
