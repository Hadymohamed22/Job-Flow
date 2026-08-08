import { Button } from "@/shared/components/ui/button";
import { MessageCircleMore, Paperclip } from "lucide-react";
import Link from "next/link";

export default function JobURLBox() {
  return (
    <div className="job-url-box bg-[#2D344966] border border-[#908FA033] rounded-lg p-4 min-w-60">
      {/* Title */}
      <p className="text-xs md:text-sm text-gray-400 flex gap-1 items-center mb-4">
        <Paperclip className="size-3 md:size-4" />
        <span>Job URL</span>
      </p>

      {/* Contact Button */}
      <Button variant={"outline"} asChild className="w-full">
        <Link href={"https://wa.me/201029379363"} className="text-green-400">
          <MessageCircleMore />
          <span>Go To Job URL</span>
        </Link>
      </Button>
    </div>
  );
}
