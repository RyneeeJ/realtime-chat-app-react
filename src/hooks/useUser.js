import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/apiAuth";

export function useUser() {
  const {
    data: user,
    error,
    isPending,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    error,
    isPending,
    isAuthenticated: user?.role === "authenticated",
    user,
  };
}
