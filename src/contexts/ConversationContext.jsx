import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { toast } from "react-toastify";
import { fetchMessages } from "../services/apiMessages";
import { useParams } from "react-router-dom";

const Conversations = createContext({
  conversations: {},
  unreadCounts: {},
  fetchMessages: () => {},
  setUnreadCounts: () => {},
});

export function ConversationsProvider({
  children,
  curUserId,
  initialUnreadCounts,
}) {
  const [conversations, setConversations] = useState({});
  const [unreadCounts, setUnreadCounts] = useState({ ...initialUnreadCounts });

  const { friendId: paramId } = useParams();

  useEffect(() => {
    const channel = supabase
      .channel("messages-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        async (payload) => {
          const { receiver_id, sender_id } = payload.new;
          // if the new message inserted in the db belongs to the current user and his/her friend,
          if (receiver_id === curUserId || sender_id === curUserId) {
            // extract the friendId
            const friendId = sender_id === curUserId ? receiver_id : sender_id;

            // If the conversation with this friend hasn't been fetch yet, fetch the entire conversation
            if (!conversations[friendId]) {
              const messages = await fetchMessages({ friendId, curUserId });
              // and insert it in the conversations state
              setConversations((convos) => ({
                ...convos,
                [friendId]: messages,
              }));
            }
            // but if the conversation has already been fetched, just update the conversations state
            else
              setConversations((convos) => {
                return {
                  ...convos,
                  [friendId]: [...convos[friendId], payload.new],
                };
              });

            // If the receiver is away from the conversation (conversation not mounted) increase unread counts else, do nothing
            if (paramId !== friendId)
              setUnreadCounts((obj) => {
                return { ...obj, [friendId]: obj[friendId] + 1 };
              });

            // Notify the receiver via toast
            if (receiver_id === curUserId) toast(payload.new.content);
          }
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [curUserId, conversations, paramId]);

  async function fetchMessagesOnMount(friendId) {
    if (conversations[friendId]) return;
    const messages = await fetchMessages({ friendId, curUserId });
    setConversations((convos) => ({
      ...convos,
      [friendId]: messages,
    }));
  }

  return (
    <Conversations.Provider
      value={{
        conversations,
        fetchMessagesOnMount,
        unreadCounts,
        setUnreadCounts,
      }}
    >
      {children}
    </Conversations.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useConversationsContext() {
  const context = useContext(Conversations);
  return context;
}
