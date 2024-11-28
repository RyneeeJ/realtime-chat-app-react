import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { compareAsc } from "date-fns";

const Conversations = createContext({
  conversations: {},
  fetchMessages: () => {},
});

export function ConversationsProvider({ children, curUserId }) {
  const [conversations, setConversations] = useState({});

  useEffect(() => {
    const channel = supabase
      .channel("messages-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          console.log("Change received!", payload);
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);
  const fetchMessages = async (friendId) => {
    if (conversations[friendId]) return;
    const messagesPromises = [
      await supabase
        .from("messages")
        .select("*")
        .eq("sender_id", curUserId)
        .eq("receiver_id", friendId),
      await supabase
        .from("messages")
        .select("*")
        .eq("sender_id", friendId)
        .eq("receiver_id", curUserId),
    ];

    const [sentMessages, receivedMessages] =
      await Promise.all(messagesPromises);

    const messages = [...sentMessages.data, ...receivedMessages.data].sort(
      (a, b) => compareAsc(a.created_at, b.created_at),
    );

    setConversations((convos) => {
      return {
        ...convos,
        [friendId]: messages,
      };
    });
  };

  return (
    <Conversations.Provider value={{ conversations, fetchMessages }}>
      {children}
    </Conversations.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useConversationsContext() {
  const context = useContext(Conversations);
  return context;
}