import { z } from "zod";

export const editUserInfoFormSchema = z.object({
  fullName: z
    .string({
      error: (issue) =>
        issue.input === "" || issue.input === undefined
          ? "Full name is required !"
          : "Fullname must be a string",
    })
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be at most 50 characters"),
  email: z.email({
    error: (issue) =>
      issue.input === "" || issue.input === undefined
        ? "Email Address is required !"
        : "Please provide a valid email address",
  }),
});
