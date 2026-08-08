import ApplicationInfoRow from "./application-info-row";
import JobInfoBox from "./job-info-box";
import RecruiterContactBox from "./recruiter-contact-box";
import JobURLBox from "./job-url-box";
import ApplicationSubInfoBox from "./application-sub-info-box";
import TimelineBox from "./timeline-box";
import NotesBox from "./notes-box";

export default function ApplicationDetails() {
  return (
    <div className="application-details mt-5">
      {/* Job And Recruiter Contact */}
      <ApplicationInfoRow className="flex-col lg:flex-row">
        <JobInfoBox />
        <JobURLBox />
        <RecruiterContactBox />
      </ApplicationInfoRow>

      {/* Salary & Location & Date */}
      <ApplicationInfoRow className="my-6 flex-col md:flex-row">
        <ApplicationSubInfoBox variant="salary" title="Salary" info="12000" />
        <ApplicationSubInfoBox
          variant="location"
          title="Location"
          info="on-site"
        />
        <ApplicationSubInfoBox
          variant="date"
          title="Date Applied"
          info="Jul 19, 2026"
        />
      </ApplicationInfoRow>

      {/* TimeLine & Notes */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <NotesBox />
        <TimelineBox />
      </div>
    </div>
  );
}
