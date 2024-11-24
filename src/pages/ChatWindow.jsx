import ChatMessages from "../components/ChatMessages";
import ChatWindowHeader from "../components/ChatWindowHeader";
import MessageForm from "../components/MessageForm";

function ChatWindow() {
  return (
    <div className="flex h-full flex-col">
      <ChatWindowHeader />
      <ChatMessages />
      <MessageForm />
    </div>
  );
}

export default ChatWindow;
