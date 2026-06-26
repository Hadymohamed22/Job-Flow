"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";
import { SendEmailFieldsType } from "../_types/forget-pass-fields";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmailSchema } from "../_schema/forget-pass-steps.schema";
import { Loader } from "lucide-react";
import ErrorMessage from "../../_components/error-message";
import useSendEmail from "../_hooks/use-send-email";
import ErrorBox from "@/shared/components/error-box";
import { ForgetPassSharedData } from "./forget-pass-container";
import { successToast } from "@/shared/lib/utils/toasts.util";

type Props = {
  setVerifyCodeStep: () => void;
  setSharedData: React.Dispatch<React.SetStateAction<ForgetPassSharedData>>;
};

export default function SendEmailForm({
  setVerifyCodeStep,
  setSharedData,
}: Props) {
  // Hooks
  const { error, isPending, sendEmailTo } = useSendEmail();

  // Forms
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SendEmailFieldsType>({
    defaultValues: {
      email: "",
    },
    mode: "onTouched",
    resolver: zodResolver(sendEmailSchema),
  });

  // Handlers
  const onSubmit: SubmitHandler<SendEmailFieldsType> = async (values) => {
    try {
      await sendEmailTo(
        { email: values.email },
        {
          onSuccess: () => {
            // Save Email in Shared Data , Because we will need it in last step when talk to backend
            setSharedData((prev) => {
              return { ...prev, email: values.email };
            });
            successToast("Code Send Successfully !");

            //  Go To Verify Code Step
            setVerifyCodeStep();
          },
        },
      );
    } catch (e) {
      console.error((e as Error).message);
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Email Field */}
      <div className="email-field">
        {/* Label */}
        <Label htmlFor="Email">Email Address</Label>

        {/* Password Input */}
        <Input
          type="email"
          placeholder="alex@company.com"
          id="Email"
          {...register("email")}
        />

        {/* Email Error Message */}
        {errors.email && (
          <ErrorMessage
            message={
              errors.email.message ||
              "Email input value is wrong , try another one !"
            }
          />
        )}
      </div>

      {/* Send Code Button */}
      <>
        {/* Error Box */}
        {error && <ErrorBox message={error.message} />}

        <Button
          className="shadow-lg shadow-[#C0C1FF1A] bg-[#8083FF] h-14 font-bold"
          // onClick={setVerifyCodeStep}
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader className="me-2 animate-spin" />
              <span>Please Wait ...</span>
            </>
          ) : (
            "Send Code"
          )}
        </Button>
      </>
    </form>
  );
}
