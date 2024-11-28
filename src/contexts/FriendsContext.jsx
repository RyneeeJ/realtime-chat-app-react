import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { getUserById } from "../services/apiFriends";

const Friends = createContext({
  friends: [],
});

export function FriendsProvider({ children, initialFriends, curUserId }) {
  const [friends, setFriends] = useState(initialFriends || []);

  useEffect(() => {
    const channel = supabase
      .channel("friends")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "friends" },
        async (payload) => {
          const {
            new: { user1_id, user2_id },
          } = payload;

          // if one of the userIDs match the id of the current user,
          if (user1_id === curUserId || user2_id === curUserId) {
            // extract the id of the friend
            const friendId = [user1_id, user2_id].find(
              (id) => id !== curUserId,
            );
            // get friend details in the db
            const newFriend = await getUserById(friendId);
            // update friends state
            setFriends((friends) => [newFriend, ...friends]);
          }
        },
      )

      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [curUserId]);

  return <Friends.Provider value={{ friends }}>{children}</Friends.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFriendsContext() {
  const context = useContext(Friends);
  return context;
}
