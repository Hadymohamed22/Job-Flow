import { z } from "zod";
import { registerSchema } from "../schema/auth.schema";

export type RegisterFieldsType = z.infer<typeof registerSchema>;
