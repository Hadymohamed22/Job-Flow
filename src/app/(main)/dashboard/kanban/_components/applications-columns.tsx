"use client";
import { useState } from "react";
import ApplicationColumn from "./application-column";
import ApplicationColumnContent from "./application-column-content";
import ApplicationColumnHeader from "./application-column-header";
import { DragDropProvider, DragEndEvent } from "@dnd-kit/react";
import { ApplicationCurrentStatus } from "../../applications/[id]/_types/application-details-response";
import { errorToast } from "@/shared/lib/utils/toasts.util";
import useEditApplicationOptimisticUpdate from "../_hooks/use-edit-application-optimistic-update.hook";

type Props = {
  data: ApplicationDataType[];
};

export default function ApplicationsColumns({ data }: Props) {
  // State: Store applications as local state (for UI optimistically)
  const [applications, setApplications] = useState<ApplicationDataType[]>(data);

  // Variables: Group by status
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

  // Hooks
  const { editApplication } = useEditApplicationOptimisticUpdate();

  // Handlers
  async function handleDragEnd(event: DragEndEvent) {
    if (event.canceled) return;

    const { source, target } = event.operation;
    const applicationId = source?.id;
    const newStatus = target?.id;

    if (!newStatus || !applicationId) return;

    // Find application to update
    const applicationData = applications.find(
      (app) => app._id === applicationId,
    );

    if (!applicationData) return;

    // Only perform UI update if the status actually changes
    if (applicationData.current_status === newStatus) return;

    // Optimistically update local state for fast UI response (not strictly necessary, but keeps UI snappy)
    const previousApplications = [...applications];
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

    try {
      await editApplication({
        applicationId: applicationId as string,
        values: {
          ...applicationData,
          salary: String(applicationData.salary),
          current_status: newStatus as ApplicationCurrentStatus,
        },
      });
    } catch (err) {
      // On error, revert to previous state and show error toast
      setApplications(previousApplications);
      errorToast(
        (err instanceof Error && err.message) ||
          "Failed to update application. State restored.",
      );
    }
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
