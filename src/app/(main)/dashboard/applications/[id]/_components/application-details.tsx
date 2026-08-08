"use client";

import ApplicationInfoRow from "./application-info-row";
import JobInfoBox from "./job-info-box";
import RecruiterContactBox from "./recruiter-contact-box";
import JobURLBox from "./job-url-box";
import ApplicationSubInfoBox from "./application-sub-info-box";
import TimelineBox from "./timeline-box";
import NotesBox from "./notes-box";
import useGetApplicationDetails from "../_hooks/use-get-application-details";
import ApplicationDetailsSkeleton from "../_skeletons/application-details.skeleton";
import ErrorMessage from "@/app/(auth)/_components/error-message";

type Props = {
  application_id: string;
};

export default function ApplicationDetails({ application_id }: Props) {
  // Hooks
  const { data, isLoading, error } = useGetApplicationDetails(application_id);
  console.log(data?.companyImageURL);

  return (
    <div className="application-details mt-5">
      {isLoading ? (
        <ApplicationDetailsSkeleton />
      ) : error ? (
        <ErrorMessage message={error.message} />
      ) : (
        data && (
          <>
            {/* Job And Recruiter Contact */}
            <ApplicationInfoRow className="flex-col lg:flex-row">
              <JobInfoBox
                title={data.jobTitle}
                company={data.companyName}
                image={data.companyImageURL}
                source={data.source}
                status={data.current_status}
              />
              <JobURLBox jobURL={data.jobURL} />
              {data.contactLink && (
                <RecruiterContactBox recruiterContact={data.contactLink} />
              )}
            </ApplicationInfoRow>

            {/* Salary & Location & Date */}
            <ApplicationInfoRow className="my-6 flex-col md:flex-row">
              <ApplicationSubInfoBox
                variant="salary"
                title="Salary"
                info={String(data.salary)}
              />
              <ApplicationSubInfoBox
                variant="location"
                title="Location"
                info={data.workLocation}
              />
              <ApplicationSubInfoBox
                variant="date"
                title="Date Applied"
                info={data.date}
              />
            </ApplicationInfoRow>

            {/* TimeLine & Notes */}
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
              <NotesBox notes={data.notes} />
              <TimelineBox timeline={data.status_history} />
            </div>
          </>
        )
      )}
    </div>
  );
}
