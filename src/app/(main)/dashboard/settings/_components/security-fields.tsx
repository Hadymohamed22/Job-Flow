import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";

export default function SecurityFields() {
  return (
    <form className="security-fields">
      {/* Title */}
      <h4 className="font-semibold text-xl md:text-2xl text-[#DAE2FD] border-s-4 border-[#DAE2FD] ps-4 mb-6">
        Security
      </h4>

      <div className="fields flex flex-col gap-4 md:gap-6">
        {/* Current Password Input */}
        <div className="current-password-field grow">
          {/* Label */}
          <Label htmlFor="CurrentPassword" className="text-[#908FA0]">
            Current Password
          </Label>

          {/* Text Input */}
          <Input
            placeholder="•••••••••••"
            id="CurrentPassword"
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
          />
        </div>

        {/* New Password Input */}
        <div className="new-password-field grow">
          {/* Label */}
          <Label htmlFor="NewPassword" className="text-[#908FA0]">
            New Password
          </Label>

          {/* Text Input */}
          <Input
            placeholder="•••••••••••"
            id="NewPassword"
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
          />
        </div>

        {/* Confirm New Password Input */}
        <div className="confirm-new-password-field grow">
          {/* Label */}
          <Label htmlFor="ConfirmNewPassword" className="text-[#908FA0]">
            Confirm New Password
          </Label>

          {/* Text Input */}
          <Input
            placeholder="•••••••••••"
            id="ConfirmNewPassword"
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="actions mt-6 md:mt-8 pt-6 md:pt-8 border-t border-[#46455480] flex items-center gap-4 justify-end">
        {/* Save Changes */}
        <Button>Change Password</Button>
      </div>
    </form>
  );
}
