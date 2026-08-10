import z from "zod";
import { AddNoteSchema } from "../_schema/add-note-schema.schema";

export type AddNoteFormFieldsType = z.infer<typeof AddNoteSchema>;
