import { useEffect, useRef } from "react";
import ChatMessageItem from "./ChatMessageItem";
import { useConversationsContext } from "../contexts/ConversationContext";

let arr = [];

for (let i = 0; i < 12; i++) {
  arr.push({ id: i + 1, status: i % 3 === 0 ? "sent" : "received" });
}

function ChatMessages({ friendId }) {
  const bottomRef = useRef(null);

  const { fetchMessages, conversations } = useConversationsContext();
  fetchMessages(friendId);

  const messages = conversations[friendId];

  useEffect(() => {
    const scrollToBottom = () => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    scrollToBottom();
  }, []);

  return (
    <div className="flex-1 overflow-auto">
      <ul className="flex flex-col gap-5">
        {messages?.map((message) => (
          <ChatMessageItem
            key={message.id}
            message={message}
            friendId={friendId}
          />
        ))}
      </ul>
      <div ref={bottomRef} />
    </div>
  );
}

export default ChatMessages;
