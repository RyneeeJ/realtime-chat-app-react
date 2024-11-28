import { useSuspenseQuery } from "@tanstack/react-query";
import { getFriends } from "../services/apiFriends";

export function useFriends(curUserId) {
  const { data: friends } = useSuspenseQuery({
    queryKey: ["friends", curUserId],
    queryFn: getFriends,
  });

  return { friends };
}
