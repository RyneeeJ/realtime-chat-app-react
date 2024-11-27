import { useQuery } from "@tanstack/react-query";
import { getRequests } from "../services/apiFriends";

export function useRequests(curUserId) {
  const { data, isFetching } = useQuery({
    queryKey: ["requests", curUserId],
    queryFn: getRequests,
    throwOnError: true,
  });

  return { data, isFetching };
}
