"use client";

import { cn } from "@/shared/lib/utils/tailwind-merge";
import { AppWindow, BarChart2, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const icons = {
  dashboard: <Home size={16} />,
  analytics: <BarChart2 size={16} />,
  applications: <AppWindow size={16} />,
};

export type iconType = keyof typeof icons;

type Props = {
  href: string;
  label: string;
  icon: iconType;
};

export default function AsideMenuLink({ href, label, icon }: Props) {
  // Navigation
  const pathname = usePathname();

  // Variables
  const filterDashboardSegment = pathname
    .split("/")
    .filter((t) => t !== "dashboard")
    .join("/");
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "p-2 md:p-3 rounded-full md:rounded-lg flex items-center gap-2 text-sm duration-300 hover:bg-[#16f9ad] hover:text-black",
          href === "/dashboard" &&
            (filterDashboardSegment === "" || filterDashboardSegment === "/") &&
            "bg-custom-green text-black hover:bg-[#0c8f63]",
          filterDashboardSegment.includes(label.toLowerCase()) &&
            "bg-custom-green text-black hover:bg-[#0c8f63]",
        )}
      >
        {/* Icon */}
        {icons[icon]}

        {/* Label */}
        <span className="hidden md:inline">{label}</span>
      </Link>
    </li>
  );
}
