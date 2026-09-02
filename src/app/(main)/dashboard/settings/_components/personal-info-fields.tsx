import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { UseFormRegister } from "react-hook-form";
import { EditUserInfoFields } from "../_types/edit-user-info-form";
import ErrorMessage from "@/app/(auth)/_components/error-message";

type Props = {
  register: UseFormRegister<EditUserInfoFields>;
  fullNameError?: string;
  emailError?: string;
};

export default function PersonalInfoFields({
  register,
  fullNameError,
  emailError,
}: Props) {
  return (
    <div className="personal-info-fields mb-6 md:mb-8">
      {/* Title */}
      <h4 className="font-semibold text-xl md:text-2xl text-[#DAE2FD] border-s-4 border-[#DAE2FD] ps-4 mb-6">
        Personal Info
      </h4>

      <div className="fields flex items-center gap-4 md:gap-6">
        {/* Full Name Input */}
        <div className="username-field grow">
          <Label htmlFor="fullName" className="text-[#908FA0]">
            Username
          </Label>
          <Input
            placeholder="developer_pro"
            id="fullName"
            {...register("fullName")}
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
            autoComplete="off"
          />

          {fullNameError && <ErrorMessage message={fullNameError} />}
        </div>

        {/* Email Input */}
        <div className="username-field grow">
          <Label htmlFor="email" className="text-[#908FA0]">
            EMAIL ADDRESS
          </Label>
          <Input
            placeholder="dev@jobflow.pro"
            id="email"
            {...register("email")}
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
            autoComplete="off"
          />
          {emailError && <ErrorMessage message={emailError} />}
        </div>
      </div>
    </div>
  );
}
