import { useSuspenseQuery } from "@tanstack/react-query";
import { getRequests } from "../services/apiFriends";

export function useRequests(curUserId) {
  const { data: requests } = useSuspenseQuery({
    queryKey: ["requests", curUserId],
    queryFn: getRequests,
    throwOnError: true,
  });

  return { requests };
}
