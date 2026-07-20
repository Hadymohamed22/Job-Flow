import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { ApplicationData } from "../_types/application-data";
import ApplicationStatusBadge from "./application-status-badge";
import DateApplied from "./date-applied";
import ApplicationRowActions from "./application-row-actions";

interface ApplicationDataTableProps {
  data: ApplicationData[];
  tableHeaderData: {
    accessorKey: keyof ApplicationData | "actions";
    header: string;
  }[];
}

function formatSalary(salary: number | string) {
  if (typeof salary === "string") return salary;

  return new Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: "EGP",
    maximumFractionDigits: 0,
  }).format(salary);
}

export default function ApplicationDataTable({
  data,
  tableHeaderData,
}: ApplicationDataTableProps) {
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

        <TableBody>
          {data.length ? (
            data.map((row) => (
              <TableRow
                key={row.id}
                className="border-t border-[#46455480] first:border-0 hover:bg-white/2"
              >
                <TableCell className="px-4 py-4 first:pl-6">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-[#464554] bg-[#2D3449] p-1.5">
                      <Image
                        src={row.image}
                        alt={row.companyAndRole.company}
                        width={40}
                        height={40}
                        className="size-full object-contain"
                        unoptimized
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-medium text-white">
                        {row.companyAndRole.role}
                      </p>
                      <p className="truncate text-sm text-gray-400">
                        {row.companyAndRole.company}
                      </p>
                    </div>
                  </div>
                </TableCell>

                <TableCell className="px-4 py-4">
                  <ApplicationStatusBadge status={row.status} />
                </TableCell>

                <TableCell className="px-4 py-4 text-gray-300">
                  <DateApplied date={row.dateApplied} />
                </TableCell>

                <TableCell className="px-4 py-4 text-gray-300">
                  {formatSalary(row.salary)}
                </TableCell>

                <TableCell className="px-4 py-4 last:pr-6">
                  <ApplicationRowActions applicationId={row.id} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className="hover:bg-transparent">
              <TableCell
                colSpan={tableHeaderData.length}
                className="h-24 text-center text-gray-400"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
