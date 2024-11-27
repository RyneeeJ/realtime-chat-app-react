import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";

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
        (payload) => {
          if (payload.new.receiver_id === curUserId) {
            setRequests((requests) => [payload.new, ...requests]);
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
