import { Button } from "@/shared/components/ui/button";
import { Loader, NotebookPen, Plus } from "lucide-react";
import NotesContent from "./notes-content";
import { Input } from "@/shared/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddNoteSchema } from "../_schema/add-note-schema.schema";
import ErrorMessage from "@/app/(auth)/_components/error-message";
import { AddNoteFormFieldsType } from "../_types/add-note-form";
import useAddNote from "../_hooks/use-add-note";
import { errorToast, successToast } from "@/shared/lib/utils/toasts.util";

type Props = {
  notes: string[];
  application_id: string;
};

export default function NotesBox({ notes, application_id }: Props) {
  // Form
  const {
    register,
    reset,
    formState: { errors, isDirty },
    handleSubmit,
  } = useForm({
    defaultValues: {
      note: "",
    },
    mode: "onTouched",
    resolver: zodResolver(AddNoteSchema),
  });

  // Hooks
  const { addNote, isPending } = useAddNote(application_id);

  // Handlers
  const onSubmit: SubmitHandler<AddNoteFormFieldsType> = (values) => {
    addNote(values.note, {
      onError: (error) =>
        errorToast((error as Error).message || "Failed to add note"),
      onSuccess: () => {
        reset();
        successToast("Note Saved !");
      },
    });
  };

  return (
    <div className="notes-box bg-[#2D344966] border border-[#908FA033] rounded-lg p-4 col-span-1 lg:col-span-2">
      {/* Title */}
      <h4 className="flex items-center gap-2 text-lg md:text-xl text-[#DAE2FD] font-semibold mb-6">
        <NotebookPen className="size-4 md:size-5" />
        <span>Notes</span>
      </h4>

      {/* Notes Content */}
      <NotesContent notes={notes} />

      {/* Add Note Form */}
      <form
        className="pt-4 border-t border-[#464554] flex items-center justify-between mt-4 gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Text Input */}
        <Input
          placeholder="Write to add new note ..."
          id="NewNote"
          className="bg-[#060E20]! placeholder:text-[#6B7280] py-3"
          parentClassName="grow"
          {...register("note")}
        />

        {/* Add Note Button */}
        <Button
          className="px-3 md:px-5 py-3 rounded-lg"
          disabled={!isDirty || isPending}
        >
          {isPending ? <Loader className="animate-spin" /> : <Plus />}
        </Button>
      </form>
      {/* Note Input Error Message */}
      {errors.note?.message && <ErrorMessage message={errors.note.message} />}
    </div>
  );
}
