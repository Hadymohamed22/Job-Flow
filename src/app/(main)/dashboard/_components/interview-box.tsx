import Image from "next/image";

type Props = {
  title: string;
  companyName: string;
  companyImage: string;
};

export default function InterviewBox({
  title,
  companyName,
  companyImage,
}: Props) {
  return (
    <div className="interview-box flex items-center gap-4 p-3 border-b border-gray-200/10 last:pb-0 first:pt-0 last:border-0">
      {/* Company Image */}
      <div className="company-image-container flex items-center justify-center size-11 rounded-full shadow-[0_4px_10px_rgba(44,61,140,0.10)] bg-blue-500/10">
        <Image
          src={companyImage}
          alt={companyName + " logo"}
          width={40}
          height={40}
        />
      </div>

      <div className="title-companyName flex flex-col gap-0.5">
        {/* Company Name */}
        <p className="text-base md:text-lg text-[#DAE2FD] font-semibold">
          {companyName}
        </p>

        {/* Title */}
        <p className="text-xs md:text-sm text-[#C7C4D7]">{title}</p>
      </div>
    </div>
  );
}
