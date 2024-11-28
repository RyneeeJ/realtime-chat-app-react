import { createContext, useState } from "react";

const Conversations = createContext({
  messages: [],
});

const initialConversations = [
  {
    friendId: "asd123",
    messages: [
      {
        id: 123,
        senderId: "asf231",
        receiverId: "ncsj232",
        content: "Hello world",
        read_status: "unread",
      },
    ],
  },
];
export function ConversationsProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [conversations, setConversations] = useState(initialConversations);
  return (
    <Conversations.Provider value={{ conversations }}>
      {children}
    </Conversations.Provider>
  );
}
