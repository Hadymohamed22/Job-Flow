import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNoteAction } from "../_actions/add-note.action";
import { ApplicationDetails } from "../_types/application-details-response";

export default function useAddNote(applicationId: string) {
  const queryClient = useQueryClient();
  const queryKey = ["get-application-detail", applicationId];

  const { mutate: addNote, isPending } = useMutation({
    mutationFn: (newNote: string) =>
      addNoteAction({ note: newNote, id: applicationId }),

    onMutate: async (newNote) => {
      await queryClient.cancelQueries({ queryKey });

      const previousData = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (old: ApplicationDetails) => ({
        ...old,
        notes: [...(old?.notes ?? null), newNote],
      }));

      return { previousData };
    },

    onError: (err, newNote, context) => {
      queryClient.setQueryData(queryKey, context?.previousData);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  return { addNote, isPending };
}
