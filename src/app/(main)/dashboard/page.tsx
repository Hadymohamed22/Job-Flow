import { Button } from "@/shared/components/ui/button";
import PageHeaderText from "./_components/page-header-text";
import { Download } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <header className="dashboard-header flex items-center justify-between">
        {/* Dashboard Page Header */}
        <PageHeaderText
          title="Dashboard Overview"
          subTitle="Here's what's happening with your job search."
        />

        {/* Export Button */}
        <Button
          variant={"outline"}
          className="py-2 px-4 text-[#DAE2FD] hover:text-gray-200"
        >
          <Download />
          Export
        </Button>
      </header>
    </>
  );
}
