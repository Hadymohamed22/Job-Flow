import NoteBox from "./note-box";

type Props = {
  notes: { text: string; _id: string }[];
};

export default function NotesContent({ notes }: Props) {
  return (
    <div className="notes-content flex flex-col gap-3">
      {notes.length === 0 ? (
        <p className="text-xs md:text-sm text-gray-400">Not have notes yet</p>
      ) : (
        notes.map((note) => <NoteBox key={note._id} note={note.text} />)
      )}
    </div>
  );
}
