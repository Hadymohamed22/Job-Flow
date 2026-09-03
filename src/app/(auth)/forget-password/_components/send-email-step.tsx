import ForgetPassContainerHeader from "./forget-pass-container-header";
import { LockKeyhole } from "lucide-react";
import SendEmailForm from "./send-email-form";
import Link from "next/link";
import { FORGET_PASS_STEPS_TYPE } from "../_types/forget-pass-steps";
import { ForgetPassSharedData } from "./forget-pass-container";

type Props = {
  setCurrentStep: React.Dispatch<React.SetStateAction<FORGET_PASS_STEPS_TYPE>>;
  setSharedData: React.Dispatch<React.SetStateAction<ForgetPassSharedData>>;
};

export default function SendEmailStep({
  setCurrentStep,
  setSharedData,
}: Props) {
  return (
    <>
      {/* Send Email Header */}
      <ForgetPassContainerHeader
        icon={<LockKeyhole />}
        title="Forgot password?"
        subTitle="Enter your email to receive a password reset link."
      />

      {/* Send Email Form */}
      <SendEmailForm
        setVerifyCodeStep={() => setCurrentStep("VERIFY_CODE")}
        setSharedData={setSharedData}
      />

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
