import NewApplicationSection from "./new-application-section";
import NotesSectionFields from "./notes-section-fields";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { AddApplicationFormValues } from "../_schema/add-application.schema";

type Props = {
  register: UseFormRegister<AddApplicationFormValues>;
  errors: FieldErrors<AddApplicationFormValues>;
};

export default function NotesSection({ register, errors }: Props) {
  return (
    <NewApplicationSection
      title="Notes & Insights"
      iconName="notes"
      className="grow"
    >
      <NotesSectionFields register={register} errors={errors} />
    </NewApplicationSection>
  );
}
