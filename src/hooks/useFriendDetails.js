import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../services/apiFriends";

export function useFriendDetails(friendId) {
  const { data: friendDetails, isFetching } = useQuery({
    queryKey: ["friend-details", friendId],
    queryFn: () => getUserById(friendId),
  });

  return { friendDetails, isFetching };
}
