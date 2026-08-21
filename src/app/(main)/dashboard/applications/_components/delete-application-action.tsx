import { useState } from "react";
import { toast } from "sonner";
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
import { Trash2, TriangleAlert } from "lucide-react";
import useDeleteApplication from "../_hooks/use-delete-application";
import { errorToast, successToast } from "@/shared/lib/utils/toasts.util";
import { useSoftDelete } from "@/shared/hooks/use-soft-delete";

type Props = {
  applicationId: string;
  applicationName: string;
  companyName: string;
};

const APPLICATION_DELETE_DELAY = 10000;

export default function DeleteApplicationAction({
  applicationId,
  applicationName,
  companyName,
}: Props) {
  // States
  const [open, setOpen] = useState(false);

  // Hooks
  const { deleteApplication } = useDeleteApplication();
  const { handleDelete, handleUndoDelete } = useSoftDelete({
    deleteFn: (id, options) =>
      deleteApplication(id, {
        onSuccess: () => successToast("Application Deleted Successfully !"),
        ...options,
      }),
    delayMs: APPLICATION_DELETE_DELAY,
    onError: (error) =>
      errorToast(
        "Server Error : " +
          ((error as Error)?.message ?? "Failed to delete application"),
      ),
  });

  // Handlers
  const handleConfirmDelete = () => {
    handleDelete(applicationId);
    setOpen(false);

    toast(`${applicationName} will be deleted`, {
      action: {
        label: "Undo",
        onClick: () => handleUndoDelete(applicationId),
      },
      duration: APPLICATION_DELETE_DELAY,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="destructive"
          size="sm"
          className="h-8 gap-1.5 px-3 duration-200 hover:text-red-500"
        >
          <Trash2 />
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
          <DialogTitle>Delete Application</DialogTitle>

          {/* Description */}
          <DialogDescription className="text-center">
            Are you sure you want to delete {applicationName} application in{" "}
            {companyName}?
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
            onClick={handleConfirmDelete}
          >
            <Trash2 />
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
