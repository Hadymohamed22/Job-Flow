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

export const newPasswordSchema = z
  .object({
    newPass: z
      .string("Password is required !")
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Za-z]/, "Password must contain at least one letter")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/\d/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character",
      ),
    confirmNewPass: z.string({
      error: (issue) =>
        issue.input === undefined || issue.input === ""
          ? "Confirm Password is required !"
          : "Try another input !",
    }),
  })
  .refine((values) => values.confirmNewPass === values.newPass, {
    error: "Confirm Password Not Match Password !",
    path: ["confirmNewPass"],
  });
