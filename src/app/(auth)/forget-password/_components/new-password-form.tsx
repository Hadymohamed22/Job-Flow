"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";
import { NewPasswordFieldsType } from "../_types/forget-pass-fields";
import useCreateNewPassword from "../_hooks/use-create-new-password";
import { Loader } from "lucide-react";
import ErrorBox from "@/shared/components/error-box";
import ErrorMessage from "../../_components/error-message";
import { errorToast, successToast } from "@/shared/lib/utils/toasts.util";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPasswordSchema } from "../_schema/forget-pass-steps.schema";

type Props = {
  email: string;
  resetToken: string;
};

export default function NewPasswordForm({ email, resetToken }: Props) {
  // Navigation
  const router = useRouter();

  // Forms
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<NewPasswordFieldsType>({
    defaultValues: {
      newPass: "",
      confirmNewPass: "",
    },
    mode: "onTouched",
    resolver: zodResolver(newPasswordSchema),
  });

  // Hooks
  const { error, isPending, saveNewPassword } = useCreateNewPassword();

  // Handlers
  const onSubmit: SubmitHandler<NewPasswordFieldsType> = async (values) => {
    await saveNewPassword(
      {
        newPass: values.newPass,
        confirmNewPass: values.confirmNewPass,
        email,
        resetToken,
      },
      {
        onSuccess: () => {
          successToast("Password Changed Successfully !");
          router.push("/login");
        },
        onError: (error) => errorToast(error.message),
      },
    );
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      {/* New Password Field */}
      <div className="new-password-field">
        {/* Label */}
        <Label htmlFor="NewPassword">Password</Label>

        {/* Password Input */}
        <Input
          type="password"
          placeholder="••••••••••"
          id="NewPassword"
          {...register("newPass")}
        />

        {/* Error Message */}
        {errors.newPass && (
          <ErrorMessage
            message={
              errors.newPass.message ||
              "Confirm Password input value is wrong , try another one !"
            }
          />
        )}
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
          {...register("confirmNewPass")}
        />

        {/* Error Message */}
        {errors.confirmNewPass && (
          <ErrorMessage
            message={
              errors.confirmNewPass.message ||
              "Confirm Password input value is wrong , try another one !"
            }
          />
        )}
      </div>

      {/* Update Password Button */}
      <>
        {error?.message && <ErrorBox message={error.message} />}

        <Button
          className="shadow-lg shadow-[#C0C1FF1A] bg-[#8083FF] h-14 font-bold"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader className="me-2 animate-spin" />
              <span>Please Wait ...</span>
            </>
          ) : (
            "Update Password"
          )}
        </Button>
      </>
    </form>
  );
}
