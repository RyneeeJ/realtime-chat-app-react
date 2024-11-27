import { useMutation } from "@tanstack/react-query";
import { acceptRequest } from "../services/apiFriends";

export function useAcceptRequest() {
  const { mutate: accept, isPending: isAccepting } = useMutation({
    mutationFn: acceptRequest,
    onSuccess() {
      // TODO: implement toast notification
      console.log("Friend request accepted");
    },
    throwOnError: true,
  });

  return {
    accept,
    isAccepting,
  };
}
