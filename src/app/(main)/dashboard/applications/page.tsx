import PageHeaderText from "../_components/page-header-text";
import ApplicationsTable from "./_components/applications-table";

export default function Page() {
  return (
    <>
      {/* Header */}
      <header className="applications-header flex flex-col gap-4 md:gap-0 md:flex-row md:items-end justify-between">
        {/* Applications Page Header */}
        <PageHeaderText
          title="Applications"
          subTitle="Manage and track your active job search process."
        />
      </header>

      {/* Applications Table */}
      <ApplicationsTable />
    </>
  );
}
