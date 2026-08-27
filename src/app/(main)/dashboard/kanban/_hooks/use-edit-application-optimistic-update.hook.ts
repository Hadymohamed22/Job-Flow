import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EditApplicationFormFields } from "../../applications/new-application/_schema/add-application.schema";
import { editApplicationAction } from "../../applications/edit-application/_actions/edit-application.action";

/**
 * Optimistic update hook for editing an application in kanban scenarios.
 * - On mutation, updates the cache optimistically with new application data.
 * - Rolls back if the mutation fails.
 * - Invalidates applications after mutation settles to ensure consistency.
 */
export default function useEditApplicationOptimisticUpdate() {
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

    // Optimistically update the cached applications data
    onMutate: async ({ applicationId, values }) => {
      await queryClient.cancelQueries({ queryKey: ["get-user-applications"] });

      const previous = queryClient.getQueryData<{
        data: ApplicationDataType[];
      }>(["get-user-applications"]);

      // Optimistically update the application in cache
      queryClient.setQueryData<{ data: ApplicationDataType[] }>(
        ["get-user-applications"],
        (prev) => {
          if (!prev || !prev.data) return prev;
          return {
            ...prev,
            data: prev.data.map((app) =>
              app._id === applicationId
                ? {
                    ...app,
                    ...values,
                    salary:
                      typeof values.salary === "string"
                        ? Number(values.salary)
                        : values.salary,
                  }
                : app,
            ),
          };
        },
      );

      return { previous };
    },

    // If mutation fails, roll back the cache to previous state
    onError: (_err, _variables, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["get-user-applications"], context.previous);
      }
    },

    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["get-user-applications"],
      });
    },

    gcTime: 5 * 60 * 1000,
  });

  return { editApplication, isPending, error };
}
