import { useMutation } from "@tanstack/react-query";
import { deleteAccountAction } from "../_actions/delete-account.action";

export default function useDeleteAccount() {
  // Mutation
  const { mutate: deleteAccount } = useMutation({
    mutationFn: (id: string) => deleteAccountAction(id),
  });

  return { deleteAccount };
}
