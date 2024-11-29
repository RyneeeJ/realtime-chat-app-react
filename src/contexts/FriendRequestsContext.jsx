import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { getUserById } from "../services/apiFriends";
import FriendRequestToastComponent from "../components/FriendRequestToastComponent";
import { toast } from "react-toastify";

const FriendRequests = createContext({
  requests: [],
});

export function FriendRequestsProvider({
  children,
  curUserId,
  initialRequests,
}) {
  const [requests, setRequests] = useState(initialRequests || []);

  useEffect(() => {
    const channel = supabase
      .channel("requests")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "friend_requests" },
        async (payload) => {
          const { receiver_id, requester_id } = payload.new;
          if (receiver_id === curUserId) {
            setRequests((requests) => [payload.new, ...requests]);
            const friend = await getUserById(requester_id);
            toast(<FriendRequestToastComponent name={friend.name} />);
          }
        },
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "friend_requests" },
        (payload) => {
          setRequests((requests) =>
            requests.filter((request) => request.id !== payload.old.id),
          );
        },
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [curUserId, initialRequests]);

  return (
    <FriendRequests.Provider value={{ requests }}>
      {children}
    </FriendRequests.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useRequestsContext() {
  const context = useContext(FriendRequests);
  return context;
}
