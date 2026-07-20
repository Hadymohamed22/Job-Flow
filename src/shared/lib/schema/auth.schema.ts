import z from "zod";

export const registerSchema = z.object({
  fullName: z
    .string("Fullname is required !")
    .min(3, "Name must be at least 3 characters , Enter valid name !")
    .regex(/^[^\d]*$/, "Name must not contain numbers"),
  email: z.email({
    error: (issue) => {
      return issue.input === undefined
        ? "Email is required !"
        : "Enter a valid email !";
    },
  }),
  password: z
    .string("Password is required !")
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Za-z]/, "Password must contain at least one letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/\d/, "Password must contain at least one number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character",
    ),
});

export const loginSchema = z.object({
  email: z.email({
    error: (issue) => {
      return issue.input === undefined
        ? "Email is required !"
        : "Enter a valid email !";
    },
  }),
  password: z.string().min(1, "Password is required !"),
  rememberMe: z.boolean().optional(),
});
