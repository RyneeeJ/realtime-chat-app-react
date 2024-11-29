import { useMutation } from "@tanstack/react-query";
import { acceptRequest } from "../services/apiFriends";
import { toast } from "react-toastify";

export function useAcceptRequest() {
  const { mutate: accept, isPending: isAccepting } = useMutation({
    mutationFn: acceptRequest,
    onSuccess() {
      toast.success("Friend request accepted!");
    },
    throwOnError: true,
  });

  return {
    accept,
    isAccepting,
  };
}
