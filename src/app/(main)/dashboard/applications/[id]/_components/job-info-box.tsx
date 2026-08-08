import Image from "next/image";
import ApplicationStatusBadge from "../../_components/application-status-badge";
import { Link } from "lucide-react";

export default function JobInfoBox() {
  return (
    <div className="job-info-box bg-[#2D344966] border border-[#908FA033] rounded-lg p-4 grow flex flex-col md:flex-row md:items-center gap-3">
      {/* Job Image */}
      <div className="job-image-container relative bg-[#2D344966] border border-[#908FA033] rounded-lg p-2 mx-auto md:mx-0">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
          }
          alt="Job Image"
          width={60}
          height={60}
        />
      </div>

      {/* Job Content */}
      <div className="job-content grow">
        {/* Title & Status */}
        <div className="title-status flex flex-col md:flex-row items-center justify-between">
          {/* Title */}
          <h3 className="text-white font-semibold text-xl md:text-2xl">
            Frontend Developer
          </h3>

          {/* Status */}
          <ApplicationStatusBadge status="Interviewing" />
        </div>

        {/* Company Name */}
        <p className="text-[#C7C4D7] text-sm md:text-base text-center md:text-start">
          Google
        </p>

        {/* Source */}
        <p className="text-gray-400 text-xs md:text-sm flex items-center justify-center md:justify-start gap-1">
          <Link className="size-3 md:size-4" />
          <span>Source: </span>
          <span>Linkedin</span>
        </p>
      </div>
    </div>
  );
}
