import { compareAsc } from "date-fns";
import { supabase } from "./supabase";

export async function sendMessage(messageObj) {
  try {
    const { error } = await supabase.from("messages").insert([messageObj]);

    if (error) throw new Error(error.message);
  } catch (err) {
    console.log("ERROR 💥💥💥:", err.message);
    throw new Error(err.message);
  }
}

export async function markMessagesAsRead({ friendId, curUserId }) {
  const { error } = await supabase
    .from("messages")
    .update({ isRead: true })
    .eq("sender_id", friendId)
    .eq("receiver_id", curUserId)
    .eq("isRead", false);

  if (error) throw new Error(error.message);
}

export async function fetchMessages({ friendId, curUserId }) {
  try {
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

    return messages;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchUnreadCounts({ friendsIdArr, curUserId }) {
  const promisesArr = friendsIdArr.map(async (friendId) => {
    // eslint-disable-next-line no-unused-vars
    const { data, count } = await supabase
      .from("messages")
      .select("id", { count: "exact" })
      .eq("sender_id", friendId)
      .eq("receiver_id", curUserId)
      .eq("isRead", false);

    return { [friendId]: count };
  });

  const result = await Promise.all(promisesArr);

  const finalObj = result.reduce((acc, obj) => {
    const [key, value] = Object.entries(obj).at(0);
    acc[key] = value;

    return acc;
  }, {});

  return finalObj;
}
