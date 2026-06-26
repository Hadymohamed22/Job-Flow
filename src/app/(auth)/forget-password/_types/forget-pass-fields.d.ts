import z from "zod";
import { sendEmailSchema } from "../_schema/forget-pass-steps.schema";

export type SendEmailFieldsType = z.infer<typeof sendEmailSchema>;
