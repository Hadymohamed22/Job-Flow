import { useQuery } from "@tanstack/react-query";
import getUserApplicationsAction from "../_actions/get-user-applications.action";

export default function useGetUserApplications() {
  // Query
  const {
    isLoading,
    data: applications,
    error,
  } = useQuery({
    queryKey: ["get-user-applications"],
    queryFn: getUserApplicationsAction,
  });

  return { isLoading, applications, error };
}
