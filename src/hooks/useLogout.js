import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut as signOutApi } from "../services/apiAuth";

export function useLogout() {
  const queryClient = useQueryClient();
  const {
    isPending,
    error,
    mutate: signOut,
  } = useMutation({
    mutationFn: signOutApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      console.log("💥", error);
    },
    throwOnError: true,
  });

  return { isPending, error, signOut };
}
