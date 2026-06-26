import z from "zod";

export const sendEmailSchema = z.object({
  email: z.email({
    error: (issue) =>
      issue.input === undefined || issue.input === ""
        ? "Email is required !"
        : "Enter a valid email !",
  }),
});

export const verifyCodeSchema = z.object({
  otp: z
    .string({
      error: (issue) =>
        issue.input === "" || issue.input === undefined
          ? "OTP is required !"
          : "Enter a valid OTP",
    })
    .min(6, "OTP must be at least 6 characters !"),
});
