import { useQuery } from "@tanstack/react-query";
import { getApplicationDetailsAction } from "../_actions/get-application-details.action";

export default function useGetApplicationDetails(id: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["get-application-detail", id],
    queryFn: () => getApplicationDetailsAction(id),
  });

  return { data, isLoading, error };
}
