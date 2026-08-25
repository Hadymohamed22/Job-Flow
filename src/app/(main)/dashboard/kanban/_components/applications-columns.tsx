import ApplicationColumn from "./application-column";
import ApplicationColumnContent from "./application-column-content";
import ApplicationColumnHeader from "./application-column-header";

export type MockApplicationType = {
  id: string;
  position: string;
  company: string;
  status: string;
  appliedDate: string;
  location: string;
  description: string;
};

export default function ApplicationsColumns() {
  // Variables
  const mockApplications: MockApplicationType[] = [
    {
      id: "1",
      position: "Frontend Developer",
      company: "Acme Corp",
      status: "Applied",
      appliedDate: new Date().toISOString(), // Today
      location: "Remote",
      description: "Work on UI for a SaaS product.",
    },
    {
      id: "2",
      position: "Backend Developer",
      company: "Globex",
      status: "Considering",
      appliedDate: (() => {
        const d = new Date();
        d.setDate(d.getDate() - 1); // 1 day ago
        return d.toISOString();
      })(),
      location: "San Francisco, CA",
      description: "Develop RESTful APIs using Node.js.",
    },
    {
      id: "3",
      position: "Fullstack Engineer",
      company: "Techify",
      status: "Interviewing",
      appliedDate: (() => {
        const d = new Date();
        d.setDate(d.getDate() - 8); // 8 days ago
        return d.toISOString();
      })(),
      location: "New York, NY",
      description: "React and Express-based development.",
    },
    {
      id: "4",
      position: "Product Designer",
      company: "BluePeak",
      status: "Rejected",
      appliedDate: (() => {
        const d = new Date();
        d.setMonth(d.getMonth() - 2); // 2 months ago
        d.setDate(d.getDate() - 3);
        return d.toISOString();
      })(),
      location: "Remote",
      description: "Design Figma prototypes for mobile apps.",
    },
    {
      id: "5",
      position: "DevOps Engineer",
      company: "NextGen Systems",
      status: "Interviewing",
      appliedDate: (() => {
        const d = new Date();
        d.setDate(d.getDate() - 15); // 15 days ago
        return d.toISOString();
      })(),
      location: "Austin, TX",
      description: "Implement CI/CD pipelines.",
    },
    {
      id: "6",
      position: "QA Tester",
      company: "QWorks",
      status: "Applied",
      appliedDate: (() => {
        const d = new Date();
        d.setDate(d.getDate() - 32); // 1 month and 2 days ago
        return d.toISOString();
      })(),
      location: "Seattle, WA",
      description: "Write and execute test cases.",
    },
    {
      id: "7",
      position: "Data Scientist",
      company: "DataGen",
      status: "Considering",
      appliedDate: (() => {
        const d = new Date();
        d.setDate(d.getDate() - 3); // 3 days ago
        return d.toISOString();
      })(),
      location: "Boston, MA",
      description: "Analyze datasets and create ML models.",
    },
    {
      id: "8",
      position: "UI Engineer",
      company: "PixelSmiths",
      status: "Rejected",
      appliedDate: (() => {
        const d = new Date();
        d.setMonth(d.getMonth() - 1); // 1 month ago
        d.setDate(d.getDate() - 7);
        return d.toISOString();
      })(),
      location: "Remote",
      description: "Pixel-perfect implementation of designs.",
    },
  ];
  const appliedApplications = mockApplications.filter(
    (application) => application.status === "Applied",
  );
  const consideringApplications = mockApplications.filter(
    (application) => application.status === "Considering",
  );
  const interviewingApplications = mockApplications.filter(
    (application) => application.status === "Interviewing",
  );
  const rejectedApplications = mockApplications.filter(
    (application) => application.status === "Rejected",
  );

  return (
    <div className="applications-columns flex gap-4 md:gap-6 w-full overflow-x-auto pb-2 min-h-[88vh] md:min-h-[85vh] lg:min-h-[81vh]">
      {/* Applied Column */}
      <ApplicationColumn
        header={
          <ApplicationColumnHeader
            type="Applied"
            title="Applied"
            length={appliedApplications.length}
          />
        }
        content={
          <ApplicationColumnContent data={appliedApplications} type="Applied" />
        }
      />

      {/* Considering Column */}
      <ApplicationColumn
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
  );
}
