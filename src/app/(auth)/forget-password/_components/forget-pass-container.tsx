"use client";

import { useState } from "react";
import { FORGET_PASS_STEPS_TYPE } from "../_types/forget-pass-steps";
import { FORGET_PASS_STEPS } from "../_constants/forget-pass-steps.constant";
import SendEmailStep from "./send-email-step";
import VerifyCodeStep from "./verify-code-step";
import NewPassStep from "./new-pass-step";

type ForgetPassSharedData = {
  email: string;
};

export default function ForgetPassContainer() {
  // States
  const [currentStep, setCurrentStep] =
    useState<FORGET_PASS_STEPS_TYPE>("SEND_EMAIL");
  const [forgetPassSharedData, setForgetPassSharedData] =
    useState<ForgetPassSharedData>({
      email: "hadysapry60@gmail.com",
    });

  return (
    <div className="forget-pass-container p-8 flex flex-col gap-8 border border-[#908FA033] rounded-lg shadow-md shadow-[#171F33B2] mx-5 container md:w-6/12 lg:w-4/12">
      {currentStep === FORGET_PASS_STEPS.SEND_EMAIL ? (
        // Send Email Step
        <SendEmailStep setCurrentStep={setCurrentStep} />
      ) : // Verify Code Step
      currentStep === FORGET_PASS_STEPS.VERIFY_CODE ? (
        <VerifyCodeStep email={forgetPassSharedData.email} />
      ) : (
        // New Pass Step
        currentStep === FORGET_PASS_STEPS.NEW_PASSWORD && <NewPassStep />
      )}
    </div>
  );
}
