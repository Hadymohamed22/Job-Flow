import { useController, useFormContext } from "react-hook-form";
import NewApplicationSection from "../../new-application/_components/new-application-section";
import EditApplicationStatusFields from "./edit-application-status-fields";
import { EditApplicationFormFields } from "../../new-application/_schema/add-application.schema";

export default function EditApplicationStatusSection() {
  const { control } = useFormContext<EditApplicationFormFields>();

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    control,
    name: "current_status",
  });

  return (
    <NewApplicationSection
      title="Application Status"
      iconName="application"
      className="grow"
    >
      <EditApplicationStatusFields
        value={value}
        onChange={onChange}
        error={error?.message}
      />
    </NewApplicationSection>
  );
}
