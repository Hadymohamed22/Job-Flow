import Link from "next/link";
import PageHeaderText from "../../_components/page-header-text";
import { ArrowLeft } from "lucide-react";
import AddApplicationFields from "./_components/add-application-fields";

export default function Page() {
  return (
    <>
      {/* Header */}
      <header className="new-application-page-header">
        {/* Back To List */}
        <Link
          href={"/dashboard/applications"}
          className="text-sm duration-300 text-[#a4a4a4] hover:text-[#8688fd] flex items-center gap-2 mb-4 font-jetbrains uppercase"
        >
          {/* Icon */}
          <ArrowLeft size={16} />

          {/* Text */}
          <span>Back To List</span>
        </Link>

        {/* New Applications Page Header */}
        <PageHeaderText
          title="New Application"
          subTitle="Add a new job opportunity to your tracker."
        />
      </header>

      {/* Content */}
      <AddApplicationFields />
    </>
  );
}
