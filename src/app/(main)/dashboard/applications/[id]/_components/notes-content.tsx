import { useCallback, useState } from "react";
import NoteBox from "./note-box";
import useDeleteNote from "../_hooks/use-delete-note";
import { errorToast } from "@/shared/lib/utils/toasts.util";
import { useSoftDelete } from "@/shared/hooks/use-soft-delete";

type Props = {
  notes: { text: string; _id: string }[];
  application_id: string;
};

export const DELETION_TIMER_MS = 5000;

export default function NotesContent({ notes, application_id }: Props) {
  // States
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);

  // Hooks
  const { deleteNote } = useDeleteNote(application_id);
  const { isDeleted, handleDelete, handleUndoDelete } = useSoftDelete({
    deleteFn: deleteNote,
    delayMs: DELETION_TIMER_MS,
    onError: (error) => errorToast("Server Error : " + error?.message),
  });

  // Variables
  const visibleNotes = notes.filter((note) => !isDeleted(note._id));

  // Handlers
  const handleEditStart = useCallback((id: string) => {
    setEditingNoteId(id);
  }, []);

  const handleEditEnd = useCallback(() => {
    setEditingNoteId(null);
  }, []);

  return (
    <div className="notes-content flex flex-col gap-3">
      {visibleNotes.length === 0 ? (
        <p className="text-xs md:text-sm text-gray-400">Not have notes yet</p>
      ) : (
        visibleNotes.map((note) => (
          <NoteBox
            key={`${note._id} - ${note.text}`}
            note={note}
            editable={editingNoteId === note._id}
            onEditStart={handleEditStart}
            onEditEnd={handleEditEnd}
            onDelete={handleDelete}
            undoDelete={handleUndoDelete}
            application_id={application_id}
          />
        ))
      )}
    </div>
  );
}
