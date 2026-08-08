import { Button } from "@/shared/components/ui/button";
import { NotebookPen, Plus } from "lucide-react";
import NotesContent from "./notes-content";
import { Input } from "@/shared/components/ui/input";

type Props = {
  notes: string[];
};

export default function NotesBox({ notes }: Props) {
  return (
    <div className="notes-box bg-[#2D344966] border border-[#908FA033] rounded-lg p-4 col-span-1 lg:col-span-2">
      <header className="flex items-center justify-between mb-6">
        {/* Title */}
        <h4 className="flex items-center gap-2 text-lg md:text-xl text-[#DAE2FD] font-semibold">
          <NotebookPen className="size-4 md:size-5" />
          <span>Notes</span>
        </h4>

        {/* Add Note */}
        <Button variant={"ghost"} className="px-3 md:px-5">
          <Plus />
          <span>Add Note</span>
        </Button>
      </header>

      {/* Notes Content */}
      <NotesContent notes={notes} />

      {/* Add Note Form */}
      <form className="mt-4 border-t border-[#464554]">
        {/* Text Input */}
        <Input
          placeholder="Write to add new note ..."
          id="NewNote"
          className="bg-[#060E20]! placeholder:text-[#6B7280] py-4 mt-4"
        />
      </form>
    </div>
  );
}
