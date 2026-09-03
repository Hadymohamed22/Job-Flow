import z from "zod";

export const AddNoteSchema = z.object({
  note: z.string().min(3, "Note must be at least 3 characters"),
});
