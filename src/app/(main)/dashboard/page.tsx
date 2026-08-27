import { Button } from "@/shared/components/ui/button";
import PageHeaderText from "./_components/page-header-text";
import { Download } from "lucide-react";
import Statistics from "./_components/statistics";
import BoxTitle from "./_components/box-title";
import ActivityFeedContainer from "./_components/activity-feed-container";
import InterviewsContainer from "./_components/interviews-container";
import { Suspense } from "react";
import StatisticsSkeleton from "./_skeletons/statistics.skeleton";
import ApplicationsChartContainer from "./_components/application-chart-container";
import ApplicationsChartSkeleton from "./_skeletons/application-chart.skeleton";
import UpcomingInterviewsSkeleton from "./_skeletons/upcoming-interviews.skeleton";

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
      <Suspense fallback={<StatisticsSkeleton />}>
        <Statistics />
      </Suspense>

      {/* Activity Container */}
      <div
        className="
      activity-container grid gap-4 lg:gap-5 grid-cols-1 lg:grid-cols-3
      [grid-template-areas:'chart'_'feed'_'interviews']
      lg:[grid-template-areas:'chart_chart_feed'_'interviews_interviews_feed']
      "
      >
        {/* Applications Chart */}
        <div className="[grid-area:chart] bg-[#2D344966] border border-[#908FA033] rounded-lg p-4">
          <div className="header flex items-center justify-between">
            {/* Title */}
            <BoxTitle title={"Applications Sent"} />

            {/* Last 30 Days Badge */}
            <div className="badge py-1 px-2 border border-[#464554] rounded-sm text-[#DAE2FD] text-[8px] md:text-xs min-w-fit">
              Last 30 Days
            </div>
          </div>

          {/* Chart */}
          <Suspense fallback={<ApplicationsChartSkeleton />}>
            <ApplicationsChartContainer />
          </Suspense>
        </div>

        {/* Activity Feed */}
        <div className="[grid-area:feed] bg-[#2D344966] border border-[#908FA033] rounded-lg p-4 flex flex-col">
          <div className="header flex items-center justify-between border-b border-[#464554] pb-4">
            {/* Title */}
            <BoxTitle title={"Activity Feed"} />
          </div>

          <ActivityFeedContainer />
        </div>

        {/* UpComing Interviews */}
        <div className="[grid-area:interviews] bg-[#2D344966] border border-[#908FA033] rounded-lg p-4">
          <div className="header flex items-center justify-between border-b border-[#464554] pb-4">
            {/* Title */}
            <BoxTitle title={"Upcoming Interviews"} />
          </div>

          {/* Interviews Box's Container */}
          <Suspense fallback={<UpcomingInterviewsSkeleton />}>
            <InterviewsContainer />
          </Suspense>
        </div>
      </div>
    </>
  );
}
