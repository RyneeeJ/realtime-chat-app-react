import { useMutation } from "@tanstack/react-query";
import { signInWithGoogle } from "../services/apiAuth";

export function useLogin() {
  const {
    isPending,
    error,
    mutate: signIn,
  } = useMutation({
    mutationFn: signInWithGoogle,
  });

  return { isPending, error, signIn };
}
