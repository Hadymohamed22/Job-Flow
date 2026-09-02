"use client";
import { useEffect } from "react";
import { Button } from "@/shared/components/ui/button";
import PersonalInfoFields from "./personal-info-fields";
import { SubmitHandler, useForm } from "react-hook-form";
import { EditUserInfoFields } from "../_types/edit-user-info-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editUserInfoFormSchema } from "../_schema/edit-user-info-form.schema";
import { signOut } from "next-auth/react";
import useEditUserInfo from "../_hooks/use-edit-user-info";
import { Loader } from "lucide-react";
import { errorToast, successToast } from "@/shared/lib/utils/toasts.util";

type Props = {
  fullname?: string;
  email?: string;
};

export default function EditUserInfoForm({ fullname, email }: Props) {
  // Forms
  const {
    handleSubmit,
    formState: { isDirty, errors },
    register,
  } = useForm<EditUserInfoFields>({
    defaultValues: {
      fullName: fullname ?? "",
      email: email ?? "",
    },
    mode: "onTouched",
    resolver: zodResolver(editUserInfoFormSchema),
  });

  // Hooks
  const { editUserInfo, isPending } = useEditUserInfo();

  // Handlers
  const onSubmit: SubmitHandler<EditUserInfoFields> = (values) => {
    editUserInfo(values, {
      onSuccess: () => {
        successToast("Profile Data Updated , Please Login Again !");
        signOut();
      },
      onError: (error) => errorToast(error.message),
    });
  };

  // Effects
  useEffect(() => {
    if (!fullname || !email) {
      signOut();
    }
  }, [fullname, email]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Personal Info Name and email */}
      <PersonalInfoFields
        register={register}
        emailError={errors.email?.message}
        fullNameError={errors.fullName?.message}
      />

      {/* Actions */}
      <div className="actions mt-6 md:mt-8 pt-6 md:pt-8 border-t border-[#46455480] flex items-center gap-4 justify-end">
        {/* Delete */}
        <Button type="button" variant={"destructive"}>
          Delete Account
        </Button>

        {/* Save Changes */}
        <Button disabled={!isDirty || isPending}>
          {isPending ? (
            <>
              <Loader className="me-2 animate-spin" />
              Saving
            </>
          ) : (
            "Save Changes"
          )}
        </Button>
      </div>
    </form>
  );
}
