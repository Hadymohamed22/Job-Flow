import NewApplicationSection from "./new-application-section";
import FinanceAndLogisticsFields from "./finance-and-logistics-fields";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { AddApplicationFormValues } from "../_schema/add-application.schema";

type Props = {
  register: UseFormRegister<AddApplicationFormValues>;
  errors: FieldErrors<AddApplicationFormValues>;
};

export default function FinanceAndLogisticsSection({
  register,
  errors,
}: Props) {
  return (
    <NewApplicationSection title="Finance & Logistics" iconName="salary">
      <FinanceAndLogisticsFields register={register} errors={errors} />
    </NewApplicationSection>
  );
}
