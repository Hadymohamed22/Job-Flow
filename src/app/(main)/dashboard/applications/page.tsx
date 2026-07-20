import { Button } from "@/shared/components/ui/button";
import PageHeaderText from "../_components/page-header-text";
import { Download } from "lucide-react";
import StatusMenu from "./_components/status-menu";
import ApplicationsTable from "./_components/applications-table";

export default function Page() {
  return (
    <>
      {/* Header */}
      <header className="applications-header flex flex-col gap-4 md:gap-0 md:flex-row md:items-end justify-between">
        {/* Applications Page Header */}
        <PageHeaderText
          title="Applications"
          subTitle="Manage and track your active job search process."
        />

        {/* Filters */}
        <div className="actions flex md:items-center gap-2">
          {/* Status Menu */}
          <StatusMenu />

          {/* Export Button */}
          <Button
            variant={"outline"}
            className="py-2 px-4 text-[#DAE2FD] hover:text-gray-200 w-full md:w-fit"
          >
            <Download />
            Export
          </Button>
        </div>
      </header>

      {/* Applications Table */}
      <ApplicationsTable />
    </>
  );
}
