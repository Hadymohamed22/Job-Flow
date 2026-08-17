import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { successToast } from "@/shared/lib/utils/toasts.util";
import { Trash2, TriangleAlert } from "lucide-react";
import { DELETION_TIMER_MS } from "./notes-content";

type Props = {
  note_id: string;
  onDelete: (id: string) => void;
  undoDelete: (id: string) => void;
};

export default function DeleteNote({ note_id, onDelete, undoDelete }: Props) {
  // Handlers
  const handleDelete = () => {
    onDelete(note_id);
    successToast("Note Deleted Successfully !", {
      duration: DELETION_TIMER_MS,
      action: {
        label: "Undo",
        onClick: () => {
          undoDelete(note_id);
        },
      },
    });
  };

  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="py-2 min-w-fit px-4 hover:text-red-500!"
          aria-label="Delete note"
          type="button"
        >
          Delete
        </Button>
      </DialogTrigger>

      {/* Content */}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          {/* Warning Alert */}
          <div className="warning-icon size-9 rounded-lg bg-red-500/40 flex items-center justify-center">
            <TriangleAlert color="#FFB4AB" />
          </div>

          {/* Title */}
          <DialogTitle>Delete Note</DialogTitle>

          {/* Description */}
          <DialogDescription>
            Are you sure to you want to delete this note ?
          </DialogDescription>
        </DialogHeader>

        {/* Footer */}
        <DialogFooter>
          {/* Cancel */}
          <DialogClose asChild className="grow">
            <Button type="button" variant={"outline"}>
              Cancel
            </Button>
          </DialogClose>

          {/* Delete */}
          <Button
            type="button"
            variant={"destructive"}
            className="grow"
            onClick={handleDelete}
          >
            <Trash2 />
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
