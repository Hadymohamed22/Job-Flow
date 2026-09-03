import { useQuery } from "@tanstack/react-query";
import GetApplicationDataAction from "../_actions/get-application-data.action";

export default function useApplicationData(applicationId: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["application", applicationId],
    queryFn: () => GetApplicationDataAction(applicationId),
    refetchOnMount: true,
  });

  return { data, isLoading, error };
}
