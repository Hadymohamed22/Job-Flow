import { Button } from "@/shared/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/shared/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

type Props = {
  setNewPasswordStep: () => void;
};

export default function VerifyCodeForm({ setNewPasswordStep }: Props) {
  return (
    <form className="flex flex-col gap-6">
      {/* OTP Input */}
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
        <InputOTPGroup className="mx-auto">
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      {/* Verify Code Button */}
      <Button
        className="shadow-lg shadow-[#C0C1FF1A] bg-[#8083FF] h-14 font-bold"
        onClick={setNewPasswordStep}
        //   disabled={isSubmitting}
      >
        <span>Verify Code</span>
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
