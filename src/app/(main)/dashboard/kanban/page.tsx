import { Suspense } from "react";
import ApplicationsColumnsSkeleton from "./_skeletons/applications-columns.skeleton";
import ApplicationsColumnsContainer from "./_components/applications-columns-container";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<ApplicationsColumnsSkeleton />}>
      <ApplicationsColumnsContainer />
    </Suspense>
  );
}
