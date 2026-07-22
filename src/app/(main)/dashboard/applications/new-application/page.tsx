import Link from "next/link";
import PageHeaderText from "../../_components/page-header-text";
import { ArrowLeft, FilePlus2 } from "lucide-react";
import CompanyAndRoleSection from "./_components/company-and-role-section";
import FinanceAndLogisticsSection from "./_components/finance-and-logistics-section";
import ApplicationStatusSection from "./_components/application-status-section";
import DateSection from "./_components/date-section";
import NotesSection from "./_components/notes-section";
import { Button } from "@/shared/components/ui/button";

export default function Page() {
  return (
    <>
      {/* Header */}
      <div className="new-application-page-header">
        {/* Back To List */}
        <Link
          href={"/dashboard/applications"}
          className="text-sm duration-300 text-[#a4a4a4] hover:text-[#8688fd] flex items-center gap-2 mb-4 font-jetbrains uppercase"
        >
          {/* Icon */}
          <ArrowLeft size={16} />

          {/* Text */}
          <span>Back To List</span>
        </Link>

        {/* New Applications Page Header */}
        <PageHeaderText
          title="New Application"
          subTitle="Add a new job opportunity to your tracker."
        />
      </div>

      {/* Content */}
      <div className="content flex flex-col gap-6 mt-7 md:mt-8">
        {/* Company And Role */}
        <CompanyAndRoleSection />

        {/* Finance And Logistics */}
        <FinanceAndLogisticsSection />

        {/* Application Status And Date */}
        <div className="application-status-and-date flex items-center flex-wrap gap-6">
          {/* Application Status */}
          <ApplicationStatusSection />

          {/* Date */}
          <DateSection />
        </div>

        {/* Notes */}
        <NotesSection />

        {/* Submit OR Cancel */}
        <div className="submit-cancel flex flex-col md:flex-row md:items-center md:justify-end gap-4 mt-4 md:mt-10">
          {/* Cancel Button */}
          <Button variant={"ghost"} className="py-4 order-2 md:order-1" asChild>
            <Link href={"/dashboard/applications"}>Cancel</Link>
          </Button>

          {/* Submit Button */}
          <Button className="px-7 py-4 order-1 md:order-2">
            {/* Icon */}
            <FilePlus2 size={20} />

            {/* Text */}
            <span>App Application</span>
          </Button>
        </div>
      </div>
    </>
  );
}
