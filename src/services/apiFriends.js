import { supabase } from "./supabase";

async function getUserByEmail(email) {
  try {
    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function checkFriend({ curUserId, friendId }) {
  try {
    let query;
    if (curUserId < friendId)
      query = supabase
        .from("friends")
        .select("*")
        .eq("user1_id", curUserId)
        .eq("user2_id", friendId);

    if (curUserId > friendId)
      query = supabase
        .from("friends")
        .select("*")
        .eq("user1_id", friendId)
        .eq("user2_id", curUserId);

    const { data, error } = await query;

    if (error) {
      console.log("ERRORRRR", error.message);
      throw new Error("There was a problem checking friends list.");
    }

    return data?.length ? true : false;
  } catch (err) {
    console.log("THERES AN ERROR");
    throw new Error(err.message);
  }
}

export async function createFriendRequest({ curUserId, friendId }) {
  const request = {
    requester_id: curUserId,
    receiver_id: friendId,
    status: "pending",
  };
  const { error } = await supabase
    .from("friend_requests")
    .insert([request])
    .select()
    .single();

  if (error) {
    console.log("ERRORRRR", error.message);
    throw new Error("There was a problem sending a friend request.");
  }
}

export async function addFriend({ curUserEmail, friendEmail }) {
  try {
    const curUser = await getUserByEmail(curUserEmail);

    // 1. Validate input email:

    // If input email same as email of current user, return error message
    if (curUserEmail === friendEmail)
      throw new Error("This email belongs to you");

    // If input email does not belong to anyone in users table in db, return error message
    const friendExist = await getUserByEmail(friendEmail);
    if (!friendExist)
      throw new Error("This email is not registered in this app");

    // If input email belongs to someone that's already in current user's friends list, return error message
    const isFriend = await checkFriend({
      curUserId: curUser.id,
      friendId: friendExist.id,
    });

    if (isFriend) throw new Error("This user is already in your friends list");

    // If input email belongs to someone the user has already sent a request to, return error message
    const { data: sentRequest } = await supabase
      .from("friend_requests")
      .select("*")
      .eq("requester_id", curUser.id)
      .eq("receiver_id", friendExist.id)
      .single();

    if (sentRequest) throw new Error("You already sent a request to this user");

    // If input email belongs to someone who already sent a request to the current user, return error message
    const { data: receivedRequest } = await supabase
      .from("friend_requests")
      .select("*")
      .eq("requester_id", friendExist.id)
      .eq("receiver_id", curUser.id)
      .single();

    if (receivedRequest)
      throw new Error("This user has already sent you a friend request");

    // else, send request
    await supabase
      .from("friend_requests")
      .insert([{ requester_id: curUser.id, receiver_id: friendExist.id }]);

    return "Friend request sent!";
  } catch (err) {
    throw new Error(err.message);
  }
}
