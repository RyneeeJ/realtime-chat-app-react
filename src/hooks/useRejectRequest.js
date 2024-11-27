import { useMutation } from "@tanstack/react-query";
import { rejectRequest } from "../services/apiFriends";

export function useRejectRequest() {
  const { mutate: reject, isPending } = useMutation({
    mutationFn: rejectRequest,
    throwOnError: true,
  });

  return { reject, isPending };
}
