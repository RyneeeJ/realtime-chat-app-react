import { useQuery } from "@tanstack/react-query";
import { getRequests } from "../services/apiFriends";

export function useRequests(curUserId) {
  const { data: requests, isFetching: isFetchingRequests } = useQuery({
    queryKey: ["requests", curUserId],
    queryFn: getRequests,
    throwOnError: true,
  });

  return { requests, isFetchingRequests };
}
