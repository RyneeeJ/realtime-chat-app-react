import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchUnreadCounts } from "../services/apiMessages";

export function useUnreadCounts(friendsIdArr, curUserId) {
  const { data: initialUnreadCounts } = useSuspenseQuery({
    queryKey: ["unread-counts"],
    queryFn: () => fetchUnreadCounts({ friendsIdArr, curUserId }),
  });

  return { initialUnreadCounts };
}
