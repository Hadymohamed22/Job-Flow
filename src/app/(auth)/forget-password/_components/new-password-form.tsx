import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";

export default function NewPasswordForm() {
  return (
    <form className="flex flex-col gap-6">
      {/* New Password Field */}
      <div className="new-password-field">
        {/* Label */}
        <Label htmlFor="NewPassword">Password</Label>

        {/* Password Input */}
        <Input type="password" placeholder="••••••••••" id="NewPassword" />
      </div>

      {/* Confirm Password Field */}
      <div className="new-password-field">
        {/* Label */}
        <Label htmlFor="ConfirmNewPassword">Confirm Password</Label>

        {/* Password Input */}
        <Input
          type="password"
          placeholder="••••••••••"
          id="ConfirmNewPassword"
        />
      </div>

      {/* Verify Code Button */}
      <Button
        className="shadow-lg shadow-[#C0C1FF1A] bg-[#8083FF] h-14 font-bold"
        //   disabled={isSubmitting}
      >
        <span>Update Password</span>
        {/* {isSubmitting ? (
            <>
              <Loader className="me-2 animate-spin" />
              <span>Please Wait ...</span>
            </>
          ) : (
            "Sign in"
          )} */}
      </Button>
    </form>
  );
}
