import Image from "next/image";
import ApplicationStatusBadge from "../../_components/application-status-badge";
import { Link } from "lucide-react";
import { ApplicationCurrentStatus } from "../_types/application-details-response";

type Props = {
  image: string;
  title: string;
  status: ApplicationCurrentStatus;
  company: string;
  source: string;
};

export default function JobInfoBox({
  image,
  title,
  status,
  company,
  source,
}: Props) {
  return (
    <div className="job-info-box bg-[#2D344966] border border-[#908FA033] rounded-lg p-4 grow flex flex-col md:flex-row md:items-center gap-3">
      {/* Job Image */}
      <div className="job-image-container relative bg-[#2D344966] border border-[#908FA033] rounded-lg p-2 mx-auto md:mx-0">
        {/* NOTE: unoptimized will remove in production */}
        <Image
          src={image}
          alt={`${company} image`}
          width={60}
          height={60}
          unoptimized
        />
      </div>

      {/* Job Content */}
      <div className="job-content grow">
        {/* Title & Status */}
        <div className="title-status flex flex-col md:flex-row items-center justify-between">
          {/* Title */}
          <h3 className="text-white font-semibold text-xl md:text-2xl">
            {title}
          </h3>

          {/* Status */}
          <ApplicationStatusBadge status={status} />
        </div>

        {/* Company Name */}
        <p className="text-[#C7C4D7] text-sm md:text-base text-center md:text-start">
          {company}
        </p>

        {/* Source */}
        <p className="text-gray-400 text-xs md:text-sm flex items-center justify-center md:justify-start gap-1">
          <Link className="size-3 md:size-4" />
          <span>Source: {source}</span>
        </p>
      </div>
    </div>
  );
}
