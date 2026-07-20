import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";

import ApplicationsTableBody from "./applications-table-body";

export default function ApplicationDataTable() {
  // Variables
  const tableHeaderData: {
    accessorKey: string;
    header: string;
  }[] = [
    { accessorKey: "companyAndRole", header: "Company & Role" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "dateApplied", header: "Date Applied" },
    { accessorKey: "salary", header: "Salary" },
    { accessorKey: "actions", header: "Actions" },
  ];

  return (
    <div className="mt-6 w-full max-w-full overflow-x-auto rounded-lg bg-[#171F33B2] min-h-[75vh]">
      <Table className="min-w-225">
        <TableHeader>
          <TableRow className="border-[#464554] hover:bg-transparent">
            {tableHeaderData.map((header) => (
              <TableHead
                key={header.accessorKey}
                className="h-12 px-4 text-xs font-medium tracking-wide text-gray-400 uppercase first:pl-6 last:pr-6 last:text-right"
              >
                {header.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* Application Table Body */}
        <ApplicationsTableBody headerCellsLength={tableHeaderData.length} />
      </Table>
    </div>
  );
}
