import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import FriendsList from "./FriendsList";
import { useConversationsContext } from "../contexts/ConversationContext";
import UnreadMessageNotif from "./UnreadMessageNotif";

function Friends() {
  const { unreadCounts } = useConversationsContext();
  const totalUnread = Object.entries(unreadCounts).reduce(
    (acc, arr) => acc + arr.at(1),
    0,
  );

  return (
    <div className="flex flex-1 flex-col overflow-scroll">
      <h3 className="flex items-center gap-3 p-4 px-4 pb-2 text-lg font-semibold">
        <span>
          <ChatBubbleLeftRightIcon className="size-8 text-blue-600" />
        </span>
        <div className="flex items-center">
          <span>Conversations</span>
        </div>
        {totalUnread > 0 && <UnreadMessageNotif count={totalUnread} />}
      </h3>
      <FriendsList />
    </div>
  );
}

export default Friends;
