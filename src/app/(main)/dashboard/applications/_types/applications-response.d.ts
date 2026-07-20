type GetUserApplicationsResponseBase = { message: string };

type GetUserApplicationsErrorResponse = {
  error: boolean;
};

type ApplicationDataType = {
  _id: string;
  companyName: string;
  jobTitle: string;
  workLocation: "remote" | "on-site" | "hybrid";
  salary: number;
  jobURL: string;
  source: string;
  applicationStatus: "Applied" | "Interviewing" | "Considering" | "Rejected";
  date: string;
  userId: string;
  companyImageURL: string;
};

type GetUserApplicationsSuccessResponse = {
  data: ApplicationDataType[];
};

type GetUserApplicationsResponse = GetUserApplicationsResponseBase &
  (GetUserApplicationsErrorResponse | GetUserApplicationsSuccessResponse);
