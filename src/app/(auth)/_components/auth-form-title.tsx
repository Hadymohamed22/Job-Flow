import { cn } from "@/shared/lib/utils/tailwind-merge";
import React from "react";

type Props = {
  title: string;
  className?: string;
};

export default function AuthFormTitle({ title, className }: Props) {
  return (
    <h3 className={cn("text-3xl font-semibold text-white", className)}>
      {title}
    </h3>
  );
}
