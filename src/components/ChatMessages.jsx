import { useEffect, useRef } from "react";
import ChatMessageItem from "./ChatMessageItem";
import { useConversationsContext } from "../contexts/ConversationContext";
import { markMessagesAsRead } from "../services/apiMessages";
import { useUser } from "../hooks/useUser";
import Loader from "./Loader";

function ChatMessages({ friendId }) {
  const { user: curUser } = useUser();
  const bottomRef = useRef(null);
  const { fetchMessagesOnMount, conversations } = useConversationsContext();
  const messages = conversations[friendId];

  useEffect(() => {
    const scrollToBottom = () => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    fetchMessagesOnMount(friendId);
  }, [friendId, fetchMessagesOnMount]);

  useEffect(() => {
    markMessagesAsRead({ friendId, curUserId: curUser.id });
  }, [curUser?.id, friendId]);

  return (
    <div className="relative flex-1 overflow-auto">
      {messages && (
        <>
          <ul className="flex flex-col gap-3">
            {messages?.map((message) => (
              <ChatMessageItem
                key={message.id}
                message={message}
                friendId={friendId}
              />
            ))}
            {messages?.length === 0 && (
              <p className="px-4 text-gray-400">
                No messages for this conversation
              </p>
            )}
          </ul>
          <div ref={bottomRef} />
        </>
      )}
      {!messages && <Loader />}
    </div>
  );
}

export default ChatMessages;
