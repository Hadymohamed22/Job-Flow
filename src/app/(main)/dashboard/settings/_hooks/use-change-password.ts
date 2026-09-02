import { useMutation } from "@tanstack/react-query";
import { ChangePasswordFields } from "../_schema/change-password.schema";
import { changePasswordAction } from "../_actions/change-password.action";

export default function useChangePassword(email?: string) {
  // Mutations
  const { mutate: changePassword, isPending } = useMutation({
    mutationFn: (values: ChangePasswordFields) =>
      changePasswordAction({
        email: email,
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      }),
  });

  return { changePassword, isPending };
}
