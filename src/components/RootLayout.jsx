import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import { useUser } from "../hooks/useUser";
import { insertUser } from "../services/apiAuth";
import { SliderContextProvider } from "../contexts/SliderContext";

import Sidebar from "./Sidebar";
import { FriendRequestsProvider } from "../contexts/FriendRequestsContext";
import { useRequests } from "../hooks/useRequests";
import { FriendsProvider } from "../contexts/FriendsContext";
import { useFriends } from "../hooks/useFriends";
import { ConversationsProvider } from "../contexts/ConversationContext";
import { useUnreadCounts } from "../hooks/useUnreadCounts";

function RootLayout() {
  const { user } = useUser();
  const { requests } = useRequests(user.id);
  const { friends } = useFriends(user.id);

  const friendsIdsArr = friends.map((friend) => friend.id);

  const { initialUnreadCounts } = useUnreadCounts(friendsIdsArr, user.id);

  useEffect(() => {
    async function createUser() {
      // Create user profile in 'users' table if signed in for the first time
      await insertUser({
        email: user.email,
        name: user.user_metadata.full_name,
        image: user.user_metadata.avatar_url,
        id: user.id,
      });
    }

    createUser();
  }, [
    user.email,
    user.user_metadata.full_name,
    user.user_metadata.avatar_url,
    user.id,
  ]);

  return (
    <SliderContextProvider>
      <FriendsProvider initialFriends={friends} curUserId={user.id}>
        <FriendRequestsProvider initialRequests={requests} curUserId={user.id}>
          <ConversationsProvider
            curUserId={user.id}
            initialUnreadCounts={initialUnreadCounts}
          >
            <div className="relative mx-auto flex h-full max-w-6xl flex-col overflow-x-hidden">
              <Header />

              <main className="flex-1 overflow-y-auto px-4 xs:px-6 md:flex md:px-0">
                <Sidebar />
                <div className="h-full md:flex-1 md:px-6">
                  <Outlet />
                </div>
              </main>
            </div>
          </ConversationsProvider>
        </FriendRequestsProvider>
      </FriendsProvider>
    </SliderContextProvider>
  );
}

export default RootLayout;
