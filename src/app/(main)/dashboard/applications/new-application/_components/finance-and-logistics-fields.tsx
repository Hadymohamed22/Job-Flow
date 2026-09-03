import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import ErrorMessage from "@/app/(auth)/_components/error-message";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { AddApplicationFormValues } from "../_schema/add-application.schema";

type Props = {
  register: UseFormRegister<AddApplicationFormValues>;
  errors: FieldErrors<AddApplicationFormValues>;
};

export default function FinanceAndLogisticsFields({ register, errors }: Props) {
  return (
    <div className="finance-and-logistics-fields flex flex-col gap-4 md:gap-6">
      {/* Salary And Job URL */}
      <div className="salary-jobURL flex items-center flex-wrap gap-4 md:gap-6">
        {/* Salary Input */}
        <div className="salary-field grow">
          {/* Label */}
          <Label htmlFor="Salary" className="text-[#908FA0]">
            SALARY
          </Label>

          {/* Text Input */}
          <Input
            placeholder="9000"
            id="Salary"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            {...register("salary")}
          />
          {errors.salary ? (
            <ErrorMessage
              message={errors.salary.message || "Salary is required"}
            />
          ) : null}
        </div>

        {/* Job URL Input */}
        <div className="job-url-field grow">
          {/* Label */}
          <Label htmlFor="JobURL" className="text-[#908FA0]">
            Job URL
          </Label>

          {/* Text Input */}
          <Input
            placeholder="https://linkedin.com/jobs/..."
            id="JobURL"
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
            {...register("jobURL")}
          />
          {errors.jobURL ? (
            <ErrorMessage
              message={errors.jobURL.message || "Job URL is required"}
            />
          ) : null}
        </div>
      </div>

      {/* Source And Contact Link */}
      <div className="source-contactLink flex items-center flex-wrap gap-4 md:gap-6">
        {/* Source Input */}
        <div className="source-field grow">
          {/* Label */}
          <Label htmlFor="Source" className="text-[#908FA0]">
            Source
          </Label>

          {/* Select Input */}
          <Input
            placeholder="Linkedin"
            id="Source"
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
            {...register("source")}
          />
          {errors.source ? (
            <ErrorMessage
              message={errors.source.message || "Source is required"}
            />
          ) : null}
        </div>

        {/* Contact Link Input */}
        <div className="contact-link-field grow">
          {/* Label */}
          <Label htmlFor="contact-link" className="text-[#908FA0]">
            Contact Link
          </Label>

          {/* Text Input */}
          <Input
            placeholder="Recruiter Contact Link"
            id="contact-link"
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
            {...register("contactLink")}
          />
        </div>
      </div>
    </div>
  );
}
