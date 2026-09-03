import z from "zod";
import {
  newPasswordSchema,
  sendEmailSchema,
  verifyCodeSchema,
} from "../_schema/forget-pass-steps.schema";

export type SendEmailFieldsType = z.infer<typeof sendEmailSchema>;

export type VerifyCodeFieldsType = z.infer<typeof verifyCodeSchema>;

export type NewPasswordFieldsType = z.infer<typeof newPasswordSchema>;
