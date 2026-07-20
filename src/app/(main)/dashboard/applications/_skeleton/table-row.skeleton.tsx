import { Skeleton } from "@/shared/components/ui/skeleton";
import { TableCell, TableRow } from "@/shared/components/ui/table";

export default function TableRowSkeleton() {
  return (
    <TableRow className="border-t border-[#46455480] first:border-0">
      <TableCell className="px-4 py-4 first:pl-6">
        <div className="flex items-center gap-3">
          <Skeleton className="size-11 shrink-0 rounded-sm" />
          <div className="min-w-0 flex-1 space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
      </TableCell>

      <TableCell className="px-4 py-4">
        <Skeleton className="h-6 w-24 rounded-full" />
      </TableCell>

      <TableCell className="px-4 py-4">
        <Skeleton className="h-4 w-24" />
      </TableCell>

      <TableCell className="px-4 py-4">
        <Skeleton className="h-4 w-20" />
      </TableCell>

      <TableCell className="px-4 py-4 last:pr-6">
        <Skeleton className="h-8 w-8 rounded-md" />
      </TableCell>
    </TableRow>
  );
}
