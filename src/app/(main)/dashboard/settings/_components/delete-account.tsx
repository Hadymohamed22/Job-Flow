"use client";
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
import { errorToast, successToast } from "@/shared/lib/utils/toasts.util";
import { Trash2, TriangleAlert } from "lucide-react";
import useDeleteAccount from "../_hooks/use-delete-account";
import { signOut } from "next-auth/react";

export default function DeleteAccount({ id }: { id: string }) {
  // Hooks
  const { deleteAccount } = useDeleteAccount();

  // Handlers
  const handleDelete = () => {
    deleteAccount(id, {
      onSuccess: () => {
        successToast(
          "Your account has been deleted successfully. We’re sorry to see you go!",
        );
        signOut();
      },
      onError: (error) => errorToast(error.message),
    });
  };
  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button type="button" variant="destructive">
          Delete Account
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
          <DialogTitle>Delete Account</DialogTitle>

          {/* Description */}
          <DialogDescription className="text-center">
            Are you sure you want to permanently delete your account? This
            action cannot be undone and will remove all your data from JobFlow.
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
