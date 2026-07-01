import { LampDesk, Phone, Video } from "lucide-react";

type Props = {
  title: string;
  companyName: string;
  date: string;
  interviewType: "online" | "on-site" | "phone";
};

export type interviewDataType = Props["interviewType"];

export default function InterviewBox({
  title,
  companyName,
  date,
  interviewType,
}: Props) {
  // Variables
  const interviewTypes = {
    online: (
      <>
        <Video className="size-2 md:size-3" />
        <span>Online</span>
      </>
    ),
    "on-site": (
      <>
        <LampDesk className="size-2 md:size-3" />
        <span>On Site</span>
      </>
    ),
    phone: (
      <>
        <Phone className="size-2 md:size-3" />
        <span>Phone</span>
      </>
    ),
  };

  return (
    <div className="interview-box flex items-center justify-between p-3 border-b border-gray-200/10 last:pb-0 first:pt-0 last:border-0">
      <div className="title-companyName">
        {/* Company Name */}
        <p className="text-base md:text-lg text-[#DAE2FD]">{companyName}</p>

        {/* Title */}
        <p className="text-xs md:text-sm text-[#C7C4D7]">{title}</p>
      </div>

      {/* Interview Info */}
      <div className="date-interviewType flex flex-col items-end">
        {/* Date */}
        <p className="text-xs md:text-sm text-[#DAE2FD]">{date}</p>

        {/* Type */}
        <p className="text-[0.625rem] md:text-xs text-custom-primary flex items-center gap-1">
          {interviewTypes[interviewType]}
        </p>
      </div>
    </div>
  );
}
