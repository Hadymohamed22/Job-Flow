import { FileClock } from "lucide-react";
import ApplicationStatusBox from "./application-status-box";
import { StatusHistoryItem } from "../_types/application-details-response";

type Props = {
  timeline: StatusHistoryItem[];
};

export default function TimelineBox({ timeline }: Props) {
  return (
    <div className="timeline-box bg-[#2D344966] border border-[#908FA033] rounded-lg p-4 col-span-1 h-min">
      {/* Title */}
      <h4 className="flex items-center gap-2 text-xl md:text-2xl text-[#DAE2FD] mb-6 font-semibold">
        <FileClock />
        <span>Timeline</span>
      </h4>

      <div className="status-history ps-5 border-s border-[#464554] flex flex-col gap-4 ms-2">
        {timeline.map((applicationStatus) => (
          <ApplicationStatusBox
            key={applicationStatus._id}
            status={applicationStatus.status}
            date={applicationStatus.changed_at}
          />
        ))}
      </div>
    </div>
  );
}
