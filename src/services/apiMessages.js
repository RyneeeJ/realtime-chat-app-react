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

export async function fetchMessages({ isFetched, friendId, curUserId }) {
  if (isFetched) return;

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

  const [sentMessages, receivedMessages] = await Promise.all(messagesPromises);

  console.log(sentMessages);
  console.log(receivedMessages);

  return null;
}
