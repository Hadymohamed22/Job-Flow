import { toast } from "sonner";

export function successToast(message: string) {
  toast.success(message, {
    className:
      "!bg-emerald-50 !border-emerald-500 !text-emerald-900 dark:!bg-emerald-800 dark:!border-emerald-400 dark:!text-emerald-100",
  });
}

export function errorToast(message: string) {
  toast.error(message, {
    className:
      "!bg-rose-50 !border-rose-500 !text-rose-900 dark:!bg-rose-800 dark:!border-rose-400 dark:!text-rose-100",
  });
}
