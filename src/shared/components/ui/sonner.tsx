"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from "lucide-react";

// Specific styles for each toast type
const toastTypeStyles = {
  success:
    "!bg-emerald-50 !border-emerald-500 !text-emerald-900 dark:!bg-emerald-800 dark:!border-emerald-400 dark:!text-emerald-100",
  error:
    "!bg-red-50 !border-red-500 !text-red-900 dark:!bg-red-800 dark:!border-red-400 dark:!text-red-100",
  warning:
    "!bg-yellow-50 !border-yellow-500 !text-yellow-900 dark:!bg-yellow-800 dark:!border-yellow-400 dark:!text-yellow-100",
  info: "!bg-blue-50 !border-blue-500 !text-blue-900 dark:!bg-blue-800 dark:!border-blue-400 dark:!text-blue-100",
  loading:
    "!bg-zinc-50 !border-zinc-400 !text-zinc-700 dark:!bg-zinc-800 dark:!border-zinc-600 dark:!text-zinc-200",
};

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-5 text-emerald-600 dark:text-emerald-200" />
        ),
        info: <InfoIcon className="size-5 text-blue-600 dark:text-blue-200" />,
        warning: (
          <TriangleAlertIcon className="size-5 text-yellow-600 dark:text-yellow-200" />
        ),
        error: (
          <OctagonXIcon className="size-5 text-red-600 dark:text-red-200" />
        ),
        loading: (
          <Loader2Icon className="size-5 animate-spin text-zinc-500 dark:text-zinc-200" />
        ),
      }}
      toastOptions={{
        classNames: {
          toast:
            "border-2 shadow-lg rounded-lg px-5 py-3 mb-2 flex items-center gap-3",
          description: "text-base opacity-90",
          actionButton:
            "bg-primary text-primary-foreground font-medium rounded",
          cancelButton: "bg-muted text-muted-foreground font-medium rounded",
          // Specific styles for each toast type
          success: toastTypeStyles.success,
          error: toastTypeStyles.error,
          warning: toastTypeStyles.warning,
          info: toastTypeStyles.info,
          loading: toastTypeStyles.loading,
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
