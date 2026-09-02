import { z } from "zod";

export const changePasswordSchema = z
  .object({
    currentPassword: z
      .string({
        error: (issue) =>
          issue.input === "" || issue.input === undefined
            ? "Current Password is required !"
            : "Current Password is not valid",
      })
      .min(8, "Current password must be at least 8 characters long"),
    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters long")
      .regex(/[A-Z]/, "New password must contain at least one uppercase letter")
      .regex(/[a-z]/, "New password must contain at least one lowercase letter")
      .regex(/\d/, "New password must contain at least one number")
      .regex(
        /[^\w\s]/,
        "New password must contain at least one special character",
      ),
    confirmNewPassword: z.string({
      error: (issue) =>
        issue.input === "" || issue.input === undefined
          ? "Confirm Password is required !"
          : "Confirm Password is not valid",
    }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });

export type ChangePasswordFields = z.infer<typeof changePasswordSchema>;
