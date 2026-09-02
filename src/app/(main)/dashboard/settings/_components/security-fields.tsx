"use client";

import { useEffect } from "react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ChangePasswordFields,
  changePasswordSchema,
} from "../_schema/change-password.schema";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorMessage from "@/app/(auth)/_components/error-message";
import useChangePassword from "../_hooks/use-change-password";
import { Loader } from "lucide-react";
import { errorToast, successToast } from "@/shared/lib/utils/toasts.util";
import { signOut } from "next-auth/react";

export default function SecurityFields({ email }: { email?: string }) {
  // Forms
  const {
    handleSubmit,
    formState: { isDirty, errors },
    register,
  } = useForm<ChangePasswordFields>({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    mode: "onTouched",
    resolver: zodResolver(changePasswordSchema),
  });

  // Hooks
  const { changePassword, isPending } = useChangePassword(email);

  // Handlers
  const onSubmit: SubmitHandler<ChangePasswordFields> = (values) => {
    changePassword(values, {
      onSuccess: () => {
        successToast(
          "Your password has been changed successfully. Please sign in again.",
        );
        signOut();
      },
      onError: (error) => {
        errorToast(error.message);
      },
    });
  };

  // Effects
  useEffect(() => {
    if (!email) {
      signOut();
    }
  }, [email]);

  return (
    <form className="security-fields" onSubmit={handleSubmit(onSubmit)}>
      {/* Title */}
      <h4 className="font-semibold text-xl md:text-2xl text-[#DAE2FD] border-s-4 border-[#DAE2FD] ps-4 mb-6">
        Security
      </h4>

      <div className="fields flex flex-col gap-4 md:gap-6">
        {/* Current Password Input */}
        <div className="current-password-field grow">
          {/* Label */}
          <Label htmlFor="CurrentPassword" className="text-[#908FA0]">
            Current Password
          </Label>

          {/* Text Input */}
          <Input
            placeholder="•••••••••••"
            id="CurrentPassword"
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
            {...register("currentPassword")}
            type="password"
          />

          {errors.currentPassword?.message && (
            <ErrorMessage message={errors.currentPassword.message} />
          )}
        </div>

        {/* New Password Input */}
        <div className="new-password-field grow">
          {/* Label */}
          <Label htmlFor="NewPassword" className="text-[#908FA0]">
            New Password
          </Label>

          {/* Text Input */}
          <Input
            placeholder="•••••••••••"
            id="NewPassword"
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
            {...register("newPassword")}
            type="password"
          />

          {errors.newPassword?.message && (
            <ErrorMessage message={errors.newPassword.message} />
          )}
        </div>

        {/* Confirm New Password Input */}
        <div className="confirm-new-password-field grow">
          {/* Label */}
          <Label htmlFor="ConfirmNewPassword" className="text-[#908FA0]">
            Confirm New Password
          </Label>

          {/* Text Input */}
          <Input
            placeholder="•••••••••••"
            id="ConfirmNewPassword"
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
            {...register("confirmNewPassword")}
            type="password"
          />

          {errors.confirmNewPassword?.message && (
            <ErrorMessage message={errors.confirmNewPassword.message} />
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="actions mt-6 md:mt-8 pt-6 md:pt-8 border-t border-[#46455480] flex items-center gap-4 justify-end">
        {/* Save Changes */}
        <Button disabled={!isDirty || isPending}>
          {isPending ? (
            <span className="flex items-center gap-2">
              <Loader className="animate-spin" />
              Changing...
            </span>
          ) : (
            "Change Password"
          )}
        </Button>
      </div>
    </form>
  );
}
