import { useMutation } from "@tanstack/react-query";
import { NewPasswordFieldsType } from "../_types/forget-pass-fields";
import saveNewPasswordAction from "../_actions/save-new-password.action";

export default function useCreateNewPassword() {
  const {
    isPending,
    mutateAsync: saveNewPassword,
    error,
  } = useMutation({
    mutationFn: (
      values: NewPasswordFieldsType & { resetToken: string; email: string },
    ) =>
      saveNewPasswordAction({
        newPassword: values.newPass,
        confirmNewPassword: values.confirmNewPass,
        email: values.email,
        resetToken: values.resetToken,
      }),
  });
  return { isPending, saveNewPassword, error };
}
