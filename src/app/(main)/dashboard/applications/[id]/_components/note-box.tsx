import { Button } from "@/shared/components/ui/button";

type Props = {
  note: string;
};

export default function NoteBox({ note }: Props) {
  return (
    <div className="note-box bg-[#2D344966] border border-[#908FA033] rounded-lg p-4">
      <p className="text-sm md:text-base">{note}</p>
      <div className="actions flex gap-2 mt-2">
        <Button
          variant="ghost"
          size="icon"
          className="me-2 py-2 hover:text-orange-300!"
          aria-label="Edit note"
        >
          Edit
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="py-2 min-w-fit px-4 hover:text-red-500!"
          aria-label="Delete note"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
