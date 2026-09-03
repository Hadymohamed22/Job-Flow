"use client";

import { Button } from "@/shared/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/shared/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { VerifyCodeFieldsType } from "../_types/forget-pass-fields";
import ErrorMessage from "../../_components/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { verifyCodeSchema } from "../_schema/forget-pass-steps.schema";
import useVerifyCode from "../_hooks/use-verify-code";
import { ForgetPassSharedData } from "./forget-pass-container";
import { successToast } from "@/shared/lib/utils/toasts.util";
import { Loader } from "lucide-react";
import ErrorBox from "@/shared/components/error-box";

type Props = {
  setNewPasswordStep: () => void;
  email: string;
  setSharedData: React.Dispatch<React.SetStateAction<ForgetPassSharedData>>;
};

export default function VerifyCodeForm({
  setNewPasswordStep,
  email,
  setSharedData,
}: Props) {
  // Hooks
  const { verifyCode, isPending, error } = useVerifyCode();

  // Form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyCodeFieldsType>({
    defaultValues: {
      otp: "",
    },
    mode: "onTouched",
    resolver: zodResolver(verifyCodeSchema),
  });

  // Handlers
  const onSubmit: SubmitHandler<VerifyCodeFieldsType> = async (values) => {
    await verifyCode(
      { otp: values.otp, email: email },
      {
        onSuccess: (token) => {
          // Save Reset Token
          setSharedData((prev) => ({ ...prev, resetToken: token }));

          // Success Toast
          successToast("Code Verified Successfully !");

          // Set New Password Step
          setNewPasswordStep();
        },
      },
    );
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      {/* OTP Input */}
      <Controller
        control={control}
        render={({ field }) => (
          <InputOTP
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
            value={field.value}
            onChange={field.onChange}
          >
            <InputOTPGroup className="mx-auto">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        )}
        name="otp"
      />

      {/* Errors Message */}
      {errors.otp?.message && (
        <ErrorMessage message={errors.otp.message} className="text-center" />
      )}

      {/* Verify Code Button */}
      <>
        {error?.message && <ErrorBox message={error.message} />}

        <Button
          className="shadow-lg shadow-[#C0C1FF1A] bg-[#8083FF] h-14 font-bold"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader className="me-2 animate-spin" />
              <span>Verifying ...</span>
            </>
          ) : (
            "Verify Code"
          )}
        </Button>
      </>
    </form>
  );
}
