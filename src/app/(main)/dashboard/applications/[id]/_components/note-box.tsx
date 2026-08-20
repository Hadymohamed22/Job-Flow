import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddNoteSchema } from "../_schema/add-note-schema.schema";
import { AddNoteFormFieldsType } from "../_types/add-note-form";
import ErrorMessage from "@/app/(auth)/_components/error-message";
import useEditNote from "../_hooks/use-edit-note";
import { Loader } from "lucide-react";
import { errorToast, successToast } from "@/shared/lib/utils/toasts.util";
import { memo } from "react";
import DeleteNote from "./delete-note";

type Props = {
  note: { text: string; _id: string };
  editable: boolean;
  onEditStart: (id: string) => void;
  onEditEnd: () => void;
  onDelete: (id: string) => void;
  undoDelete: (id: string) => void;
  application_id: string;
};

function NoteBox({
  note,
  editable,
  onEditStart,
  onEditEnd,
  onDelete,
  undoDelete,
  application_id,
}: Props) {
  // Form
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: {
      note: note.text,
    },
    mode: "onTouched",
    resolver: zodResolver(AddNoteSchema),
  });

  // Hooks
  const { editNote, isPending } = useEditNote(application_id);

  // Handlers
  const handleCancelEdit = () => {
    setValue("note", note.text, {
      shouldDirty: false,
      shouldTouch: false,
      shouldValidate: false,
    });
    onEditEnd();
  };
  const onSubmit: SubmitHandler<AddNoteFormFieldsType> = (values) => {
    if (!editable) return;
    editNote(
      { note_id: note._id, note_text: values.note },
      {
        onSuccess: () => {
          successToast("Note updated successfully !");
          setValue("note", values.note, {
            shouldDirty: false,
            shouldTouch: false,
            shouldValidate: false,
          });
          onEditEnd();
        },
        onError: () => errorToast("Failed to update note , try again"),
      },
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="note-box bg-[#2D344966] border border-[#908FA033] rounded-lg p-4"
    >
      <Input
        className="text-sm md:text-base read-only:border-0 read-only:p-0! read-only:rounded-none min-h-min"
        readOnly={!editable}
        tabIndex={editable ? 0 : -1}
        {...register("note")}
      />
      {/* Note Input Error Message */}
      {errors.note?.message && <ErrorMessage message={errors.note.message} />}

      {/* Note Actions */}
      <div className="actions flex gap-2 mt-2">
        {/* Cancel Action */}
        {editable && (
          <Button
            variant="ghost"
            size="icon"
            className="py-2 min-w-fit px-4"
            aria-label="cancel edit note"
            onClick={handleCancelEdit}
            type="button"
          >
            Cancel
          </Button>
        )}

        {/* Edit And Save Actions */}
        {editable ? (
          <Button
            key="save-btn"
            size="icon"
            className="py-2 min-w-fit px-4"
            aria-label="update note"
            disabled={!isDirty || isPending}
          >
            {isPending ? <Loader className="animate-spin" /> : "Save"}
          </Button>
        ) : (
          <Button
            key="edit-btn"
            variant="ghost"
            size="icon"
            className="py-2 min-w-fit px-4 hover:text-yellow-300!"
            aria-label="edit note"
            type="button"
            onClick={() => onEditStart(note._id)}
          >
            Edit
          </Button>
        )}

        {/* Delete Action */}
        <DeleteNote
          note_id={note._id}
          onDelete={onDelete}
          undoDelete={undoDelete}
        />
      </div>
    </form>
  );
}

export default memo(NoteBox);
