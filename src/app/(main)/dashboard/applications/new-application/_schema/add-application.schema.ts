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
  applicationStatus: z.enum(
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

export type AddApplicationFormValues = z.infer<typeof addApplicationSchema>;
