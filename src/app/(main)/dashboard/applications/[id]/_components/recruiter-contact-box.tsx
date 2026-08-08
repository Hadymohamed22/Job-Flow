import { Button } from "@/shared/components/ui/button";
import { MessageCircleMore, UserSquare } from "lucide-react";
import Link from "next/link";

export default function RecruiterContactBox() {
  return (
    <div className="recruiter-contact-box bg-[#2D344966] border border-[#908FA033] rounded-lg p-4 min-w-60">
      {/* Title */}
      <p className="text-xs md:text-sm text-gray-400 flex gap-1 items-center mb-4">
        <UserSquare className="size-3 md:size-4" />
        <span>Recruiter Contact</span>
      </p>

      {/* Contact Button */}
      <Button variant={"outline"} asChild className="w-full">
        <Link href={"https://wa.me/201029379363"} className="text-violet-400">
          <MessageCircleMore />
          <span>Contact Now</span>
        </Link>
      </Button>
    </div>
  );
}
