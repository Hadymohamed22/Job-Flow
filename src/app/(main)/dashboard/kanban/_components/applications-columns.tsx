"use client";
import { useState } from "react";
import ApplicationColumn from "./application-column";
import ApplicationColumnContent from "./application-column-content";
import ApplicationColumnHeader from "./application-column-header";
import { DragDropProvider, DragEndEvent } from "@dnd-kit/react";
import { ApplicationCurrentStatus } from "../../applications/[id]/_types/application-details-response";

export type MockApplicationType = {
  id: string;
  position: string;
  company: string;
  status: string;
  appliedDate: string;
  location: string;
  description: string;
};

type Props = {
  data: ApplicationDataType[];
};

export default function ApplicationsColumns({ data }: Props) {
  // States
  const [applications, setApplications] = useState<ApplicationDataType[]>(data);

  // Variables
  const appliedApplications = applications.filter(
    (application) => application.current_status === "Applied",
  );
  const consideringApplications = applications.filter(
    (application) => application.current_status === "Considering",
  );
  const interviewingApplications = applications.filter(
    (application) => application.current_status === "Interviewing",
  );
  const rejectedApplications = applications.filter(
    (application) => application.current_status === "Rejected",
  );

  // Handlers
  function handleDragEnd(event: DragEndEvent) {
    if (event.canceled) return;

    const { source, target } = event.operation;
    const applicationId = source?.id;
    const newStatus = target?.id;

    if (!newStatus) return;

    setApplications((prev) =>
      prev.map((application) =>
        application._id === applicationId
          ? {
              ...application,
              current_status: newStatus as ApplicationCurrentStatus,
            }
          : application,
      ),
    );
  }

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
      <div className="applications-columns flex gap-4 md:gap-6 w-full overflow-x-auto pb-2 min-h-[88vh] md:min-h-[85vh] lg:min-h-[81vh]">
        {/* Applied Column */}
        <ApplicationColumn
          id={"Applied"}
          header={
            <ApplicationColumnHeader
              type="Applied"
              title="Applied"
              length={appliedApplications.length}
            />
          }
          content={
            <ApplicationColumnContent
              data={appliedApplications}
              type="Applied"
            />
          }
        />

        {/* Considering Column */}
        <ApplicationColumn
          id={"Considering"}
          header={
            <ApplicationColumnHeader
              type="Considering"
              title="Considering"
              length={consideringApplications.length}
            />
          }
          content={
            <ApplicationColumnContent
              data={consideringApplications}
              type="Considering"
            />
          }
        />

        {/* Interviewing Column */}
        <ApplicationColumn
          id={"Interviewing"}
          header={
            <ApplicationColumnHeader
              type="Interviewing"
              title="Interviewing"
              length={interviewingApplications.length}
            />
          }
          content={
            <ApplicationColumnContent
              data={interviewingApplications}
              type="Interviewing"
            />
          }
        />

        {/* Rejected Column */}
        <ApplicationColumn
          id={"Rejected"}
          header={
            <ApplicationColumnHeader
              type="Rejected"
              title="Rejected"
              length={rejectedApplications.length}
            />
          }
          content={
            <ApplicationColumnContent
              data={rejectedApplications}
              type="Rejected"
            />
          }
        />
      </div>
    </DragDropProvider>
  );
}
