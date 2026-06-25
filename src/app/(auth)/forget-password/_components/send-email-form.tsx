import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";

type Props = {
  setVerifyCodeStep: () => void;
};

export default function SendEmailForm({ setVerifyCodeStep }: Props) {
  return (
    <form className="flex flex-col gap-6">
      {/* Email Field */}
      <div className="email-field">
        {/* Label */}
        <Label htmlFor="Email">Email Address</Label>

        {/* Password Input */}
        <Input type="email" placeholder="alex@company.com" id="Email" />

        {/* Email Error Message */}
        {/* {errors.email && (
          <ErrorMessage
            message={
              errors.email.message ||
              "Email input value is wrong , try another one !"
            }
          />
        )} */}
      </div>

      {/* Send Code Button */}
      <Button
        className="shadow-lg shadow-[#C0C1FF1A] bg-[#8083FF] h-14 font-bold"
        onClick={setVerifyCodeStep}
        //   disabled={isSubmitting}
      >
        <span>Send Code</span>
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
