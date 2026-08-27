type ResponseBase = { message: string };
type ErrorResponseBase = { error: boolean };

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

type GetUserApplicationsResponse = ResponseBase &
  (ErrorResponseBase | GetUserApplicationsSuccessResponse);

// For One Application
type GetUserApplicationResponse = ResponseBase &
  (ErrorResponseBase | GetUserApplicationSuccessResponse);

// User Statistics
type GetUserStatisticsSuccessResponse = {
  data: {
    totalApplications: number;
    inConsidering: number;
    activeInterviews: number;
    responseRate: number;
  };
};

type GetUserStatisticsResponse = ResponseBase &
  (GetUserStatisticsSuccessResponse | ErrorResponseBase);

// Chart Data
type GetChartDataSuccessResponse = {
  data: {
    count: number;
    date: string;
    jobTitle: string;
    companyName: string;
  }[];
};

type GetChartDataResponse = ResponseBase &
  (GetChartDataSuccessResponse | ErrorResponseBase);

// Upcoming Interviews
type GetUpcomingInterviewsSuccessResponse = {
  data: {
    _id: string;
    companyName: string;
    jobTitle: string;
    companyImageURL: string;
    interviewDate: string;
  }[];
};

type GetUpcomingInterviewsResponse = ResponseBase &
  (GetUpcomingInterviewsSuccessResponse | ErrorResponseBase);
