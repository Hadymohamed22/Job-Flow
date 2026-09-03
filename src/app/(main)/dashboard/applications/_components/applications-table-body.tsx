"use client";
import ApplicationStatusBadge from "./application-status-badge";
import DateApplied from "./date-applied";
import ApplicationRowActions from "./application-row-actions";
import { TableBody, TableCell, TableRow } from "@/shared/components/ui/table";
import Image from "next/image";
import useGetUserApplications from "../_hooks/use-get-user-applications";
import TableRowSkeleton from "../_skeleton/table-row.skeleton";
import { useRouter } from "next/navigation";

type Props = {
  headerCellsLength: number;
};

export default function ApplicationsTableBody({ headerCellsLength }: Props) {
  // Navigation
  const router = useRouter();

  // Hooks
  const { applications, error, isLoading } = useGetUserApplications();

  // Handlers
  const formatSalary = (salary: number | string | null): string | number => {
    if (salary === null) return "Not specified";

    if (typeof salary === "string") return salary;

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EGP",
      maximumFractionDigits: 0,
    }).format(salary);
  };

  return (
    <TableBody>
      {/* Loading State */}
      {isLoading ? (
        Array.from({ length: 5 }).map((_, i) => <TableRowSkeleton key={i} />)
      ) : error ? (
        // Error State
        <TableRow className="hover:bg-transparent">
          <TableCell
            colSpan={headerCellsLength}
            className="h-24 text-center text-red-500"
          >
            {error.message}
          </TableCell>
        </TableRow>
      ) : !applications || applications.length === 0 ? (
        // No Results State
        <TableRow className="hover:bg-transparent">
          <TableCell
            colSpan={headerCellsLength}
            className="h-24 text-center text-gray-400"
          >
            No results.
          </TableCell>
        </TableRow>
      ) : (
        // Applications Data
        applications.map((row) => (
          <TableRow
            key={row._id}
            className="border-t border-[#46455480] first:border-0 hover:bg-white/2 cursor-pointer"
            onClick={() => router.push(`/dashboard/applications/${row._id}`)}
            role="link"
            aria-label={`View application ${row.jobTitle}`}
          >
            <TableCell className="px-4 py-4 first:pl-6">
              <div className="flex items-center gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-[#464554] bg-[#2D3449] p-1">
                  <Image
                    src={row.companyImageURL}
                    alt={row.companyName}
                    width={40}
                    height={40}
                    className="size-full object-contain rounded-sm"
                    unoptimized
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-medium text-white">
                    {row.jobTitle}
                  </p>
                  <p className="truncate text-sm text-gray-400">
                    {row.companyName}
                  </p>
                </div>
              </div>
            </TableCell>

            <TableCell className="px-4 py-4">
              <ApplicationStatusBadge status={row.current_status} />
            </TableCell>

            <TableCell className="px-4 py-4 text-gray-300">
              <DateApplied date={row.date} />
            </TableCell>

            <TableCell className="px-4 py-4 text-gray-300">
              {formatSalary(row.salary)}
            </TableCell>

            <TableCell
              className="px-4 py-4 last:pr-6"
              onClick={(e) => e.stopPropagation()}
            >
              <ApplicationRowActions data={row} />
            </TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  );
}
