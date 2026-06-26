import { Mail } from "lucide-react";
import ForgetPassContainerHeader from "./forget-pass-container-header";
import VerifyCodeForm from "./verify-code-form";
import { FORGET_PASS_STEPS_TYPE } from "../_types/forget-pass-steps";
import { ForgetPassSharedData } from "./forget-pass-container";

type Props = {
  email: string;
  setCurrentStep: React.Dispatch<React.SetStateAction<FORGET_PASS_STEPS_TYPE>>;
  setSharedData: React.Dispatch<React.SetStateAction<ForgetPassSharedData>>;
};

export default function VerifyCodeStep({
  email,
  setCurrentStep,
  setSharedData,
}: Props) {
  return (
    <>
      {/* Verify Code Header */}
      <ForgetPassContainerHeader
        icon={<Mail />}
        title="Check your email"
        subTitle={
          <>
            <span className="block text-center">
              We sent a 6-digit code to :
            </span>
            <p>
              {email}{" "}
              <span
                className="underline text-white/80 duration-300 hover:text-white cursor-pointer text-xs"
                onClick={() => setCurrentStep("SEND_EMAIL")}
              >
                Edit Email ?
              </span>
            </p>
          </>
        }
      />

      {/* Verify Code Form */}
      <VerifyCodeForm
        setSharedData={setSharedData}
        setNewPasswordStep={() => setCurrentStep("NEW_PASSWORD")}
        email={email}
      />

      {/* Resend Code */}
      <p className="mt-2 text-center text-[#6A7271]">
        Didn{"'"}t receive code?{" "}
        <span className="text-white/70 duration-300 hover:text-white cursor-pointer">
          Resend
        </span>
      </p>
    </>
  );
}
