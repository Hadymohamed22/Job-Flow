import getUserApplicationsAction from "../../applications/_actions/get-user-applications.action";
import ApplicationsColumns from "./applications-columns";

export default async function ApplicationsColumnsContainer() {
  // Variables
  const applications = await getUserApplicationsAction();

  return <ApplicationsColumns data={applications} />;
}
