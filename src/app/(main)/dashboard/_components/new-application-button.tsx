import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils/tailwind-merge";
import { FilePlusCorner, Plus } from "lucide-react";
import Link from "next/link";

type Props = {
  className?: string;
};

export default function NewApplicationButton({ className }: Props) {
  return (
    <Button
      asChild
      className={cn(
        "rounded-full md:rounded-lg p-2 md:py-2.5 md:px-6",
        className,
      )}
    >
      <Link href={"/dashboard/applications/new-application"}>
        {/* Plus Icon */}
        <Plus size={14} className="hidden md:inline" />

        {/* Text */}
        <span className="hidden md:inline">New Application</span>

        {/* Application Plus Icon in small screens */}
        <FilePlusCorner className="inline md:hidden" />
      </Link>
    </Button>
  );
}
