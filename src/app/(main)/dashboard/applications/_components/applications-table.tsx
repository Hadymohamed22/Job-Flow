import { ApplicationData } from "../_types/application-data";
import ApplicationDataTable from "./application-data-table";

export default function ApplicationTable() {
  // Variables
  const applicationsData: ApplicationData[] = [
    {
      id: crypto.randomUUID(),
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      companyAndRole: {
        company: "Google",
        role: "Senior Frontend Engineer",
      },
      status: "Interviewing",
      dateApplied: "2023-10-24",
      salary: 9000,
    },
    {
      id: crypto.randomUUID(),
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyAndRole: {
        company: "Microsoft",
        role: "Product Designer",
      },
      status: "Applied",
      dateApplied: "2023-10-22",
      salary: 8500,
    },
    {
      id: crypto.randomUUID(),
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyAndRole: {
        company: "Apple",
        role: "Full Stack Developer",
      },
      status: "Considering",
      dateApplied: "2023-10-18",
      salary: "Not disclosed",
    },
    {
      id: crypto.randomUUID(),
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyAndRole: {
        company: "Amazon",
        role: "DevOps Engineer",
      },
      status: "Rejected",
      dateApplied: "2023-10-15",
      salary: 10000,
    },
  ];
  const tableHeaderData: {
    accessorKey: keyof ApplicationData | "actions";
    header: string;
  }[] = [
    { accessorKey: "companyAndRole", header: "Company & Role" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "dateApplied", header: "Date Applied" },
    { accessorKey: "salary", header: "Salary" },
    { accessorKey: "actions", header: "Actions" },
  ];

  return (
    <ApplicationDataTable
      data={applicationsData}
      tableHeaderData={tableHeaderData}
    />
  );
}
