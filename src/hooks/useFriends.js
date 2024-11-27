import { useQuery } from "@tanstack/react-query";
import { getFriends } from "../services/apiFriends";

export function useFriends(curUserId) {
  const { data: friends, isFetching: isFetchingFriends } = useQuery({
    queryKey: ["friends", curUserId],
    queryFn: getFriends,
  });

  return { friends, isFetchingFriends };
}
