import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EditApplicationFormFields } from "../../new-application/_schema/add-application.schema";
import { editApplicationAction } from "../_actions/edit-application.action";

export default function useEditApplication() {
  const queryClient = useQueryClient();

  const {
    mutateAsync: editApplication,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({
      values,
      applicationId,
    }: {
      values: EditApplicationFormFields;
      applicationId: string;
    }) => editApplicationAction({ applicationId, values }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["get-user-applications"],
      });
    },
    gcTime: 5 * 60 * 1000,
  });

  return { editApplication, isPending, error };
}
