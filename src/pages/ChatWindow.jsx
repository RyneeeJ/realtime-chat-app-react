import { useParams } from "react-router-dom";
import ChatMessages from "../components/ChatMessages";
import ChatWindowHeader from "../components/ChatWindowHeader";
import MessageForm from "../components/MessageForm";
import { useUser } from "../hooks/useUser";
import { useFriends } from "../hooks/useFriends";
import ConversationDoesNotExist from "../components/ConversationDoesNotExist";

function ChatWindow() {
  const { friendId } = useParams();
  const { user } = useUser();
  const { friends } = useFriends(user.id);
  const friendDetails = friends.find((friend) => friend.id === friendId);

  return (
    <div className="flex h-full flex-col">
      {friendDetails && (
        <>
          <ChatWindowHeader friendDetails={friendDetails} />
          <ChatMessages friendId={friendId} />
          <MessageForm friendId={friendId} />
        </>
      )}

      {!friendDetails && <ConversationDoesNotExist />}
    </div>
  );
}

export default ChatWindow;
