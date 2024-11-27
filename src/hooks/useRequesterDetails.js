import { useSuspenseQuery } from "@tanstack/react-query";
import { getRequesterDetails } from "../services/apiFriends";

export function useRequesterDetails(requests) {
  const { data: requestsWithDetails, refetch } = useSuspenseQuery({
    queryKey: ["requestsWithDetails"],
    queryFn: () => getRequesterDetails(requests),
  });

  return { requestsWithDetails, refetch };
}
