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
      console.log("Logged out!");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { isPending, error, signOut };
}
