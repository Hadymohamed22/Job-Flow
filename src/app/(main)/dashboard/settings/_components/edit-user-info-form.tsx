import { Button } from "@/shared/components/ui/button";
import PersonalInfoFields from "./personal-info-fields";
import SecurityFields from "./security-fields";

export default function EditUserInfoForm() {
  return (
    <form>
      {/* Personal Info Name and email */}
      <PersonalInfoFields />

      {/* Security Fields : Password , New Password */}
      <SecurityFields />

      {/* Actions */}
      <div className="actions mt-6 md:mt-8 pt-6 md:pt-8 border-t border-[#46455480] flex items-center gap-4 justify-end">
        {/* Delete */}
        <Button type="button" variant={"destructive"}>
          Delete Account
        </Button>

        {/* Save Changes */}
        <Button>Save Changes</Button>
      </div>
    </form>
  );
}
