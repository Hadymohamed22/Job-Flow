import { Button } from "@/shared/components/ui/button";
import PageHeaderText from "./_components/page-header-text";
import { Download } from "lucide-react";
import Statistics from "./_components/statistics";

export default function Dashboard() {
  return (
    <>
      {/* Header */}
      <header className="dashboard-header flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between">
        {/* Dashboard Page Header */}
        <PageHeaderText
          title="Dashboard Overview"
          subTitle="Here's what's happening with your job search."
        />

        {/* Export Button */}
        <Button
          variant={"outline"}
          className="py-2 px-4 text-[#DAE2FD] hover:text-gray-200 w-full md:w-fit"
        >
          <Download />
          Export
        </Button>
      </header>

      {/* Statistics */}
      <Statistics />
    </>
  );
}
