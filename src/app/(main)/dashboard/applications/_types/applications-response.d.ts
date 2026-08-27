type GetUserApplicationsResponseBase = { message: string };

type GetUserApplicationsErrorResponse = {
  error: boolean;
};

type ApplicationDataType = {
  _id: string;
  companyName: string;
  jobTitle: string;
  workLocation: WorkLocationsValue;
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
  createdAt: string;
  updatedAt: string;
};

type GetUserApplicationsSuccessResponse = {
  data: ApplicationDataType[];
};

// For One Application
type GetUserApplicationSuccessResponse = {
  data: ApplicationDataType;
};

type GetUserApplicationsResponse = GetUserApplicationsResponseBase &
  (GetUserApplicationsErrorResponse | GetUserApplicationsSuccessResponse);

// For One Application
type GetUserApplicationResponse = GetUserApplicationsResponseBase &
  (GetUserApplicationsErrorResponse | GetUserApplicationSuccessResponse);

// User Statistics

type GetUserStatisticsSuccessResponse = {
  data: {
    totalApplications: number;
    inConsidering: number;
    activeInterviews: number;
    responseRate: number;
  };
};

type GetUserStatisticsErrorResponse = {
  error: boolean;
};

type GetUserStatisticsBase = {
  message: string;
};

type GetUserStatisticsResponse = GetUserStatisticsBase &
  (GetUserStatisticsSuccessResponse | GetUserStatisticsErrorResponse);
