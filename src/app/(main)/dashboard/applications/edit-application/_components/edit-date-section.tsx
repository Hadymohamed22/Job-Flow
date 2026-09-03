import { useController, useFormContext } from "react-hook-form";
import NewApplicationSection from "../../new-application/_components/new-application-section";
import EditDateField from "./edit-date-field";
import { EditApplicationFormFields } from "../../new-application/_schema/add-application.schema";

export default function EditDateSection() {
  const { control } = useFormContext<EditApplicationFormFields>();

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
      <EditDateField value={value} onChange={onChange} error={error?.message} />
    </NewApplicationSection>
  );
}
