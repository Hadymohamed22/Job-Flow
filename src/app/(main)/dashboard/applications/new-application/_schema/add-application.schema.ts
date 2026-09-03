import { z } from "zod";

export const addApplicationSchema = z.object({
  companyName: z.string().trim().min(1, "Company name is required"),
  jobTitle: z.string().trim().min(1, "Job title is required"),
  workLocation: z.enum(["remote", "on-site", "hybrid"], {
    error: "Work location is required",
  }),
  salary: z.string().regex(/^\d+$/, {
    error: (issue) =>
      issue.input === ""
        ? "Salary is required !"
        : "Salary must contain numbers only",
  }),
  jobURL: z.string().trim().min(1, "Job URL is required"),
  source: z.string().trim().min(1, "Source is required"),
  current_status: z.enum(
    ["Applied", "Interviewing", "Considering", "Rejected"],
    {
      error: "Application status is required",
    },
  ),
  date: z
    .string()
    .trim()
    .min(1, "Date is required")
    .refine((value) => !Number.isNaN(new Date(value).getTime()), {
      message: "Please enter a valid date",
    }),
  "company-image": z.custom<File>((value) => value instanceof File, {
    message: "Company image is required",
  }),
  notes: z.string().optional(),
  contactLink: z.string().optional(),
});

export const editApplicationSchema = addApplicationSchema
  .extend({
    "company-image": z
      .custom<File>((value) => value instanceof File, {
        message: "Company image must be a valid file",
      })
      .optional(),
    existingImageUrl: z.boolean().optional(),
    notes: z
      .array(
        z.object({
          text: z.string(),
          _id: z.string(),
        }),
      )
      .optional(),
  })
  .refine((data) => !!data["company-image"] || !!data.existingImageUrl, {
    message: "Company image is required",
    path: ["company-image"],
  });

export type AddApplicationFormValues = z.infer<typeof addApplicationSchema>;

export type EditApplicationFormFields = z.infer<typeof editApplicationSchema>;
