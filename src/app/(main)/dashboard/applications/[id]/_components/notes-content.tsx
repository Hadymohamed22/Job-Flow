import { useCallback, useRef, useState } from "react";
import NoteBox from "./note-box";
import useDeleteNote from "../_hooks/use-delete-note";
import { errorToast } from "@/shared/lib/utils/toasts.util";

type Props = {
  notes: { text: string; _id: string }[];
  application_id: string;
};

export const DELETION_TIMER_MS = 5000;

export default function NotesContent({ notes, application_id }: Props) {
  // States
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [deletedIds, setDeletedIds] = useState<Set<string>>(new Set());

  // Refs
  const timersRef = useRef(new Map<string, ReturnType<typeof setTimeout>>());

  // Variables
  const visibleNotes = notes.filter((note) => !deletedIds.has(note._id));

  // Hooks
  const { deleteNote, error } = useDeleteNote(application_id);

  // Handlers
  const handleEditStart = useCallback((id: string) => {
    setEditingNoteId(id);
  }, []);

  const handleEditEnd = useCallback(() => {
    setEditingNoteId(null);
  }, []);

  const cancelDeleteTimer = useCallback((id: string) => {
    const timer = timersRef.current.get(id);

    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
  }, []);

  const startDeleteTimer = useCallback(
    (id: string) => {
      cancelDeleteTimer(id);

      const timer = setTimeout(() => {
        console.log(`Delete ${id}`);

        deleteNote(id, {
          onError: () => errorToast("Server Error : " + error?.message),
        });

        timersRef.current.delete(id);
      }, DELETION_TIMER_MS);

      timersRef.current.set(id, timer);
    },
    [cancelDeleteTimer, deleteNote, error?.message],
  );

  const handleDelete = useCallback(
    (id: string) => {
      setDeletedIds((prev) => new Set(prev).add(id));

      startDeleteTimer(id);
    },
    [startDeleteTimer],
  );

  const handleUndoDelete = useCallback(
    (id: string) => {
      setDeletedIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });

      cancelDeleteTimer(id);
    },
    [cancelDeleteTimer],
  );

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
