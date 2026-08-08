import ApplicationDetails from "./_components/application-details";
import BackToApplications from "./_components/back-to-applications";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  // Variables
  const { id } = await params;

  return (
    <>
      {/* Back To Applications */}
      <BackToApplications />

      {/* Application Details */}
      <ApplicationDetails />
    </>
  );
}
