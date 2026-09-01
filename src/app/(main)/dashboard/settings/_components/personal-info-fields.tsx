import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";

export default function PersonalInfoFields() {
  return (
    <div className="personal-info-fields mb-6 md:mb-8">
      {/* Title */}
      <h4 className="font-semibold text-xl md:text-2xl text-[#DAE2FD] border-s-4 border-[#DAE2FD] ps-4 mb-6">
        Personal Info
      </h4>

      <div className="fields flex items-center gap-4 md:gap-6">
        {/* UserName Input */}
        <div className="username-field grow">
          {/* Label */}
          <Label htmlFor="UserName" className="text-[#908FA0]">
            Username
          </Label>

          {/* Text Input */}
          <Input
            placeholder="developer_pro"
            id="UserName"
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
          />
        </div>

        {/* Email Input */}
        <div className="username-field grow">
          {/* Label */}
          <Label htmlFor="Email" className="text-[#908FA0]">
            EMAIL ADDRESS
          </Label>

          {/* Text Input */}
          <Input
            placeholder="dev@jobflow.pro"
            id="Email"
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
          />
        </div>
      </div>
    </div>
  );
}
