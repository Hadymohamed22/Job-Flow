"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/shared/components/ui/chart";

const chartConfig = {
  count: {
    label: "Applications",
    color: "oklch(88.2% 0.059 254.128)",
  },
} satisfies ChartConfig;

type TooltipProps = {
  payload?: {
    payload: {
      date: string;
      count: number;
      jobTitle: string;
      companyName: string;
    };
  }[];
  label?: string;
};

function CustomChartTooltipContent({ payload, label }: TooltipProps) {
  const data = payload && payload.length > 0 ? payload[0].payload : undefined;
  return (
    <div
      style={{
        background: "#1a1934",
        color: "#ffffff",
        borderRadius: "8px",
        padding: "10px 14px",
        fontSize: "0.92rem",
        maxWidth: "220px",
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 3 }}>
        {label
          ? new Date(label).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })
          : null}
      </div>
      {data && (
        <>
          <div>
            <span className="font-medium">Job Title:</span>{" "}
            <span>{data.jobTitle}</span>
          </div>
          <div>
            <span className="font-medium">Company:</span>{" "}
            <span>{data.companyName}</span>
          </div>
          <div className="mt-2">
            <span className="font-medium">Applications Sent:</span>{" "}
            <span>{data.count}</span>
          </div>
        </>
      )}
    </div>
  );
}

type Props = {
  chartData: {
    date: string;
    count: number;
    jobTitle: string;
    companyName: string;
  }[];
};

export default function ApplicationsChart({ chartData }: Props) {
  return (
    <ChartContainer config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={24}
          tickFormatter={(value) => {
            const date = new Date(value);
            return date.getDate().toString();
          }}
        />
        <ChartTooltip cursor={false} content={<CustomChartTooltipContent />} />
        <Area
          dataKey="count"
          type="natural"
          fill="var(--color-count)"
          fillOpacity={0.4}
          stroke="var(--color-count)"
        />
      </AreaChart>
    </ChartContainer>
  );
}
