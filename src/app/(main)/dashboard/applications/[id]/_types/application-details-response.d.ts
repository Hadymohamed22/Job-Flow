export type ApplicationCurrentStatus =
  | "Interviewing"
  | "Considering"
  | "Rejected"
  | "Applied";

export type StatusHistoryItem = {
  status: ApplicationCurrentStatus;
  changed_at: string;
  _id: string;
};

export type ApplicationDetails = {
  _id: string;
  companyName: string;
  jobTitle: string;
  workLocation: string;
  salary: number;
  jobURL: string;
  source: string;
  current_status: ApplicationCurrentStatus;
  status_history: StatusHistoryItem[];
  date: string;
  fileName: string;
  notes: { text: string; _id: string }[];
  companyImageURL: string;
  contactLink?: string;
  userId: string;
  __v: number;
};

export type ApplicationDetailsResponse = {
  message: string;
  data: ApplicationDetails;
};

type AddNoteErrorResponse = {
  error: boolean;
};

type AddNoteSuccessResponse = {
  success: boolean;
  data: ApplicationDetails;
};

export type AddNoteResponse = { message: string } & (
  | AddNoteErrorResponse
  | AddNoteSuccessResponse
);
