import { useCallback, useState } from "react";
import NoteBox from "./note-box";

type Props = {
  notes: { text: string; _id: string }[];
  application_id: string;
};

export default function NotesContent({ notes, application_id }: Props) {
  // States
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);

  // Handlers
  const handleEditStart = useCallback((id: string) => {
    setEditingNoteId(id);
  }, []);

  const handleEditEnd = useCallback(() => {
    setEditingNoteId(null);
  }, []);

  return (
    <div className="notes-content flex flex-col gap-3">
      {notes.length === 0 ? (
        <p className="text-xs md:text-sm text-gray-400">Not have notes yet</p>
      ) : (
        notes.map((note) => (
          <NoteBox
            key={note._id}
            note={note}
            editable={editingNoteId === note._id}
            onEditStart={handleEditStart}
            onEditEnd={handleEditEnd}
            application_id={application_id}
          />
        ))
      )}
    </div>
  );
}
