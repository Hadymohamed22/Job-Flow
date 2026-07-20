"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shared/components/ui/chart";

const chartData = [
  { date: "2026-05-31", count: 12 },
  { date: "2026-06-01", count: 18 },
  { date: "2026-06-02", count: 9 },
  { date: "2026-06-03", count: 24 },
  { date: "2026-06-04", count: 31 },
  { date: "2026-06-05", count: 27 },
  { date: "2026-06-06", count: 15 },
  { date: "2026-06-07", count: 8 },
  { date: "2026-06-08", count: 11 },
  { date: "2026-06-09", count: 22 },
  { date: "2026-06-10", count: 29 },
  { date: "2026-06-11", count: 33 },
  { date: "2026-06-12", count: 26 },
  { date: "2026-06-13", count: 14 },
  { date: "2026-06-14", count: 10 },
  { date: "2026-06-15", count: 17 },
  { date: "2026-06-16", count: 25 },
  { date: "2026-06-17", count: 30 },
  { date: "2026-06-18", count: 28 },
  { date: "2026-06-19", count: 19 },
  { date: "2026-06-20", count: 13 },
  { date: "2026-06-21", count: 16 },
  { date: "2026-06-22", count: 23 },
  { date: "2026-06-23", count: 34 },
  { date: "2026-06-24", count: 29 },
  { date: "2026-06-25", count: 21 },
  { date: "2026-06-26", count: 15 },
  { date: "2026-06-27", count: 12 },
  { date: "2026-06-28", count: 20 },
  { date: "2026-06-29", count: 27 },
];

const chartConfig = {
  count: {
    label: "Applications",
    color: "oklch(88.2% 0.059 254.128)",
  },
} satisfies ChartConfig;

export default function ApplicationsChart() {
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
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              indicator="line"
              labelFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />
          }
        />
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
