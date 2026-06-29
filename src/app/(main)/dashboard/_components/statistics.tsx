import StatisticBox from "./statistic-box";

export type StatisticTypeProp =
  | "applications"
  | "interviews"
  | "response-rate"
  | "in-consider";

type StatisticDataType = {
  id: string;
  title: string;
  type: StatisticTypeProp;
  data: string;
};

export default function Statistics() {
  // Variables
  const statisticsData: StatisticDataType[] = [
    {
      id: crypto.randomUUID(),
      title: "Total Applications",
      type: "applications",
      data: "142",
    },
    {
      id: crypto.randomUUID(),
      title: "In Considering",
      type: "in-consider",
      data: "2",
    },
    {
      id: crypto.randomUUID(),
      title: "Active Interviews",
      type: "interviews",
      data: "8",
    },
    {
      id: crypto.randomUUID(),
      title: "Response Rate",
      type: "response-rate",
      data: "32%",
    },
  ];

  return (
    <section className="statistics grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 my-6 md:my-8">
      {statisticsData.map((s) => (
        <StatisticBox key={s.id} data={s.data} icon={s.type} title={s.title} />
      ))}
    </section>
  );
}
