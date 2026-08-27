import ErrorMessage from "@/app/(auth)/_components/error-message";
import getChartDataAction from "../_actions/get-chart-data.action";
import ApplicationsChart from "./applications-chart";

export default async function ApplicationsChartContainer() {
  // Variables
  let chartData = null;
  try {
    chartData = await getChartDataAction();
  } catch (err) {
    return (
      <ErrorMessage
        message={(err as Error)?.message ?? "An unknown error occurred."}
      />
    );
  }

  return <ApplicationsChart chartData={chartData} />;
}
