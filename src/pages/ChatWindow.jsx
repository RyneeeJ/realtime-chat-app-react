import { useParams } from "react-router-dom";
import ChatMessages from "../components/ChatMessages";
import ChatWindowHeader from "../components/ChatWindowHeader";
import MessageForm from "../components/MessageForm";
import { Suspense } from "react";

function ChatWindow() {
  const { friendId } = useParams();

  return (
    <div className="flex h-full flex-col">
      <Suspense fallback={<p>LOADING HEADERRRR!!!</p>}>
        <ChatWindowHeader friendId={friendId} />
      </Suspense>

      <ChatMessages friendId={friendId} />

      <MessageForm friendId={friendId} />
    </div>
  );
}

export default ChatWindow;
