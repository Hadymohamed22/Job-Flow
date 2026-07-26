import CompanyAndRoleFields from "./company-and-role-fields";
import NewApplicationSection from "./new-application-section";
import { UseFormRegister, UseFormSetValue, FieldErrors } from "react-hook-form";
import { AddApplicationFormValues } from "../_schema/add-application.schema";

type Props = {
  register: UseFormRegister<AddApplicationFormValues>;
  errors: FieldErrors<AddApplicationFormValues>;
  setValue: UseFormSetValue<AddApplicationFormValues>;
};

export default function CompanyAndRoleSection({
  register,
  errors,
  setValue,
}: Props) {
  return (
    <NewApplicationSection title="Company & Role" iconName="company">
      <CompanyAndRoleFields
        register={register}
        errors={errors}
        setValue={setValue}
      />
    </NewApplicationSection>
  );
}
