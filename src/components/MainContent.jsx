import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FriendsProvider } from "../contexts/FriendsContext";
import { FriendRequestsProvider } from "../contexts/FriendRequestsContext";
import { ConversationsProvider } from "../contexts/ConversationContext";
import { useUser } from "../hooks/useUser";
import { useRequests } from "../hooks/useRequests";
import { useFriends } from "../hooks/useFriends";
import { useUnreadCounts } from "../hooks/useUnreadCounts";
import { useEffect } from "react";
import { insertUser } from "../services/apiAuth";
import SliderNav from "./SliderNav";
import { useSlider } from "../contexts/SliderContext";
function MainContent() {
  const { user } = useUser();
  const { requests } = useRequests(user.id);
  const { friends } = useFriends(user.id);
  const { isNavOpen, handleClose } = useSlider();

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
    <FriendsProvider initialFriends={friends} curUserId={user.id}>
      <FriendRequestsProvider initialRequests={requests} curUserId={user.id}>
        <ConversationsProvider
          curUserId={user.id}
          initialUnreadCounts={initialUnreadCounts}
        >
          <main className="flex-1 overflow-y-auto px-4 xs:px-6 md:flex md:px-0">
            <Sidebar />
            <div className="h-full md:flex-1 md:px-6">
              <Outlet />
            </div>
          </main>

          <SliderNav isNavOpen={isNavOpen} onClose={handleClose} />
        </ConversationsProvider>
      </FriendRequestsProvider>
    </FriendsProvider>
  );
}

export default MainContent;
