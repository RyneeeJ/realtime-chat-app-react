import { useParams } from "react-router-dom";
import ChatMessages from "../components/ChatMessages";
import ChatWindowHeader from "../components/ChatWindowHeader";
import MessageForm from "../components/MessageForm";

function ChatWindow() {
  const { friendId } = useParams();

  return (
    <div className="flex h-full flex-col">
      <ChatWindowHeader friendId={friendId} />
      <ChatMessages />
      <MessageForm friendId={friendId} />
    </div>
  );
}

export default ChatWindow;
