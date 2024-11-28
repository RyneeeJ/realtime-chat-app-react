import { useSuspenseQuery } from "@tanstack/react-query";
import { getUserById } from "../services/apiFriends";

export function useFriendDetails(friendId) {
  const { data: friendDetails } = useSuspenseQuery({
    queryKey: ["friend-details", friendId],
    queryFn: () => getUserById(friendId),
    refetchOnMount: false,
  });

  return { friendDetails };
}
