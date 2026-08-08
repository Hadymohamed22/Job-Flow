import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createApplicationAction } from "../_actions/create-application.action";
import { AddApplicationFormValues } from "../_schema/add-application.schema";

export default function useCreateApplication() {
  const queryClient = useQueryClient();

  const {
    mutateAsync: createApplication,
    isPending,
    error,
  } = useMutation({
    mutationFn: (values: AddApplicationFormValues) =>
      createApplicationAction(values),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["get-user-applications"],
      });
    },
    gcTime: 5 * 60 * 1000,
  });

  return { createApplication, isPending, error };
}
