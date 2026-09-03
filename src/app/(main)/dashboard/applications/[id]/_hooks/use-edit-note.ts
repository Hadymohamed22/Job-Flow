import { useMutation } from "@tanstack/react-query";
import { editNoteAction } from "../_actions/edit-note.action";

export default function useEditNote(application_id: string) {
  const { mutate: editNote, isPending } = useMutation({
    mutationFn: ({
      note_id,
      note_text,
    }: {
      note_id: string;
      note_text: string;
    }) => editNoteAction({ application_id, note_id, note_text }),
  });

  return { editNote, isPending };
}
