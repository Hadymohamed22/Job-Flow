import { useMutation } from "@tanstack/react-query";
import { EditUserInfoFields } from "../_types/edit-user-info-form";
import { editUserInfoAction } from "../_actions/edit-user-info.action";

export default function useEditUserInfo() {
  // Mutation
  const { mutate: editUserInfo, isPending } = useMutation({
    mutationFn: (values: EditUserInfoFields) => editUserInfoAction(values),
  });

  return { editUserInfo, isPending };
}
