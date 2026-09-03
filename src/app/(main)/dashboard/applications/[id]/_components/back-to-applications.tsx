import { Button } from "@/shared/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BackToApplications() {
  return (
    <Button variant={"ghost"} asChild>
      <Link href={"/dashboard/applications"}>
        <ArrowLeft />
        Back To Applications
      </Link>
    </Button>
  );
}
