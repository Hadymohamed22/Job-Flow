import { toast } from "sonner";

export function successToast(message: string) {
  toast.success(message, {
    className:
      "!bg-emerald-50 !border-emerald-500 !text-emerald-900 dark:!bg-emerald-800 dark:!border-emerald-400 dark:!text-emerald-100",
  });
}
