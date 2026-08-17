import { useMutation } from "@tanstack/react-query";
import { deleteNoteAction } from "../_actions/delete-note.action";

export default function useDeleteNote(application_id: string) {
  const { mutate: deleteNote, error } = useMutation({
    mutationFn: (note_id: string) =>
      deleteNoteAction({ application_id, note_id }),
  });

  return { deleteNote, error };
}
