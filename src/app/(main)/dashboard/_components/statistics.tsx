import ErrorMessage from "@/app/(auth)/_components/error-message";
import getUserStatisticsAction from "../_actions/get-user-statistics.action";
import StatisticBox from "./statistic-box";

export type StatisticTypeProp =
  | "applications"
  | "interviews"
  | "response-rate"
  | "in-consider";

export default async function Statistics() {
  // Variables
  let statisticsData;
  try {
    statisticsData = await getUserStatisticsAction();
  } catch (error) {
    return (
      <ErrorMessage
        message={(error as Error).message || "Failed to load statistics."}
      />
    );
  }

  // Convert returned object to array for StatisticBox components
  const statistics = [
    {
      id: "applications",
      title: "Total Applications",
      data: statisticsData.totalApplications,
      type: "applications" as StatisticTypeProp,
    },
    {
      id: "in-consider",
      title: "In Consideration",
      data: statisticsData.inConsidering,
      type: "in-consider" as StatisticTypeProp,
    },
    {
      id: "interviews",
      title: "Active Interviews",
      data: statisticsData.activeInterviews,
      type: "interviews" as StatisticTypeProp,
    },
    {
      id: "response-rate",
      title: "Response Rate",
      data: statisticsData.responseRate + "%",
      type: "response-rate" as StatisticTypeProp,
    },
  ];

  return (
    <section className="statistics grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 my-6 md:my-8">
      {statistics.map((s) => (
        <StatisticBox key={s.id} data={s.data} icon={s.type} title={s.title} />
      ))}
    </section>
  );
}
