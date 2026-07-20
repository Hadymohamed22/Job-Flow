import { loginSchema } from "@/shared/lib/schema/auth.schema";
import z from "zod";

export type LoginFields = z.infer<typeof loginSchema>;
