import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";

export default function NotesSectionFields() {
  return (
    <div className="notes-field grow">
      {/* Label */}
      <Label htmlFor="notes" className="text-[#908FA0] leading-6">
        JOB DESCRIPTION SNIPPETS OR PRIVATE NOTES
      </Label>

      {/* Textarea Input */}
      <Textarea
        placeholder="Mention key requirements, interview prep notes, or cultural vibes..."
        id={"notes"}
        className="bg-[#060E20]! placeholder:text-[#6B7280] py-4 resize-none h-28 max-h-40 placeholder:text-sm md:placeholder:text-base"
      />
    </div>
  );
}
