import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteApplicationAction } from "../_actions/delete-application.action";

export default function useDeleteApplication() {
  // Variables
  const queryClient = useQueryClient();

  // Mutation
  const {
    mutate: deleteApplication,
    isPending,
    error,
  } = useMutation({
    mutationFn: (applicationId: string) =>
      deleteApplicationAction(applicationId),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["get-user-applications"] }),
  });

  return { deleteApplication, isPending, error };
}
