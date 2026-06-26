import z from "zod";
import {
  sendEmailSchema,
  verifyCodeSchema,
} from "../_schema/forget-pass-steps.schema";

export type SendEmailFieldsType = z.infer<typeof sendEmailSchema>;

export type VerifyCodeFieldsType = z.infer<typeof verifyCodeSchema>;
