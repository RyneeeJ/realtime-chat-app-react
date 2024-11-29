import { useMutation } from "@tanstack/react-query";
import { sendMessage as sendMessageApi } from "../services/apiMessages";

export function useSendMessage() {
  const { mutate: sendMessage, isPending } = useMutation({
    mutationFn: sendMessageApi,
    throwOnError: true,
  });

  return {
    sendMessage,
    isPending,
  };
}
