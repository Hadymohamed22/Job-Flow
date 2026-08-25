import { MockApplicationType } from "./applications-columns";
import KanbanApplicationBox from "./kanban-application-box";

type Props = {
  data: MockApplicationType[];
  type: ApplicationStatusType;
};

export default function ApplicationColumnContent({ data, type }: Props) {
  return (
    <div className="application-column-content p-2">
      {data.length === 0 ? (
        <p className="my-4 text-center text-sm text-[#8b8fa3]">
          No applications in this column yet.
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          {data.map((application) => (
            <KanbanApplicationBox
              key={application.id}
              type={type}
              date={application.appliedDate}
              jobTitle={application.position}
              companyName={application.company}
            />
          ))}
        </div>
      )}
    </div>
  );
}
