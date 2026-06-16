"use client";
import * as React from "react";

import { cn } from "@/shared/lib/utils/tailwind-merge";
import { Eye, EyeClosed } from "lucide-react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  // States
  const [isAppear, setIsAppear] = React.useState(false);

  // Functions
  const toggleInputType = () => setIsAppear((prev) => !prev);

  return (
    <div className="input-container relative">
      <input
        type={type !== "password" ? type : isAppear ? "text" : "password"}
        data-slot="input"
        className={cn(
          "min-h-10 w-full min-w-0 rounded-lg border border-[#464554] bg-transparent px-4 py-2.5 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-600 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
          className,
          type === "password" && "pe-10",
        )}
        {...props}
      />
      {type === "password" &&
        (isAppear ? (
          <EyeClosed
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
            onClick={toggleInputType}
            size={16}
          />
        ) : (
          <Eye
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
            onClick={toggleInputType}
            size={16}
          />
        ))}
    </div>
  );
}

export { Input };
