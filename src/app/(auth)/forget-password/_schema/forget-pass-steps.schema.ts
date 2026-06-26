import z from "zod";

export const sendEmailSchema = z.object({
  email: z.email({
    error: (issue) =>
      issue.input === undefined || issue.input === ""
        ? "Email is required !"
        : "Enter a valid email !",
  }),
});
