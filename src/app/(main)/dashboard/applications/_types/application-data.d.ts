export type ApplicationStatus =
  | "Applied"
  | "Interviewing"
  | "Considering"
  | "Rejected";

export type ApplicationData = {
  id: string;
  image: string;
  companyAndRole: {
    company: string;
    role: string;
  };
  status: ApplicationStatus;
  dateApplied: string | Date;
  salary: number | string;
};
