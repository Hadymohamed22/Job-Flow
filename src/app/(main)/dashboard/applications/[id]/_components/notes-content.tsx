import NoteBox from "./note-box";

type Props = {
  notes: string[];
};

export default function NotesContent({ notes }: Props) {
  return (
    <div className="notes-content flex flex-col gap-3">
      {notes.map((note) => (
        <NoteBox key={note} note={note} />
      ))}
    </div>
  );
}
