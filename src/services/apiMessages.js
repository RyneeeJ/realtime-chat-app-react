import { supabase } from "./supabase";

export async function sendMessage(messageObj) {
  try {
    console.log(messageObj);
    const { error } = await supabase.from("messages").insert([messageObj]);

    if (error) throw new Error(error.message);
  } catch (err) {
    console.log("ERROR 💥💥💥:", err.message);
    throw new Error(err.message);
  }
}
