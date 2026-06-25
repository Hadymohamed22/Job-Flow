import ForgetPassContainerHeader from "./forget-pass-container-header";
import { LockKeyhole } from "lucide-react";
import SendEmailForm from "./send-email-form";
import Link from "next/link";
import { FORGET_PASS_STEPS_TYPE } from "../_types/forget-pass-steps";

type Props = {
  setCurrentStep: React.Dispatch<React.SetStateAction<FORGET_PASS_STEPS_TYPE>>;
};

export default function SendEmailStep({ setCurrentStep }: Props) {
  return (
    <>
      {/* Send Email Header */}
      <ForgetPassContainerHeader
        icon={<LockKeyhole />}
        title="Forgot password?"
        subTitle="Enter your email to receive a password reset link."
      />

      {/* Send Email Form */}
      <SendEmailForm setVerifyCodeStep={() => setCurrentStep("VERIFY_CODE")} />

      {/* Back To Login */}
      <div className="back-to-login h-10 md:h-11 flex items-end justify-center border-t border-[#464554]">
        <Link
          href={"/login"}
          className="text-custom-primary duration-300 hover:text-cyan-300 text-sm"
        >
          Back To Login
        </Link>
      </div>
    </>
  );
}
