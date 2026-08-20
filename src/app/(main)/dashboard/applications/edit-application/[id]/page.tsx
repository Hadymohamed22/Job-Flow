import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import PageHeaderText from "../../../_components/page-header-text";
import EditFormFields from "../_components/edit-form-fields";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  // Variables
  const { id } = await params;
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
        <PageHeaderText title="Edit Application" />
      </header>

      <EditFormFields applicationId={id} />
    </>
  );
}
