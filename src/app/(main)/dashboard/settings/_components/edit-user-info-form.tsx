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
import DeleteAccount from "./delete-account";

type Props = {
  id?: string;
  fullname?: string;
  email?: string;
};

export default function EditUserInfoForm({ id, fullname, email }: Props) {
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
    if (!fullname || !email || !id) {
      signOut();
    }
  }, [fullname, email, id]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Personal Info Name and email */}
      <PersonalInfoFields
        register={register}
        emailError={errors.email?.message}
        fullNameError={errors.fullName?.message}
      />

      {/* Actions */}
      <div className="actions mt-6 md:mt-8 pt-6 md:pt-8 border-t border-[#46455480] flex flex-col md:flex-row items-stretch md:items-center gap-4 md:justify-end">
        {/* Delete Account */}
        <DeleteAccount id={id!} />

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
