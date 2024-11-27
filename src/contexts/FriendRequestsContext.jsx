import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";

const FriendRequests = createContext();

export function FriendRequestsProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [requests, setRequests] = useState();

  useEffect(() => {
    const channel = supabase
      .channel("requests")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "friend_requests" },
        (payload) => {
          console.log("Change received!", payload);
        },
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);
  return (
    <FriendRequests.Provider value={{ requests }}>
      {children}
    </FriendRequests.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFriendRequests() {
  const context = useContext(FriendRequests);
  return context;
}
