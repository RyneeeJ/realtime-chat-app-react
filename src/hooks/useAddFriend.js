import { useMutation } from "@tanstack/react-query";
import { addFriend as addFriendApi } from "../services/apiFriends";

export function useAddFriend() {
  const {
    mutate: addFriend,
    isPending,
    error,
  } = useMutation({
    mutationFn: addFriendApi,
  });

  return { addFriend, isPending, error };
}
