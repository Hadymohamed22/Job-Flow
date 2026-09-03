import KanbanApplicationBox from "./kanban-application-box";

type Props = {
  data: ApplicationDataType[];
  type: ApplicationStatusType;
};

export default function ApplicationColumnContent({ data, type }: Props) {
  return (
    <div className="application-column-content p-2">
      {data.length === 0 ? (
        <p className="my-4 text-center text-xs text-gray-500 italic">
          No applications in this column yet.
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          {data.map((application) => (
            <KanbanApplicationBox
              key={application._id}
              id={application._id}
              type={type}
              date={application.createdAt}
              jobTitle={application.jobTitle}
              companyName={application.companyName}
            />
          ))}
        </div>
      )}
    </div>
  );
}
