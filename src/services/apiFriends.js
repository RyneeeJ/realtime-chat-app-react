/* eslint-disable no-unused-vars */
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

async function checkIfFriend({ curUserId, friendId }) {
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

async function checkSentRequests({ curUserId, friendId }) {
  try {
    const { data: sentRequest } = await supabase
      .from("friend_requests")
      .select("*")
      .eq("requester_id", curUserId)
      .eq("receiver_id", friendId)
      .single();

    return sentRequest;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function checkReceivedRequests({ curUserId, friendId }) {
  try {
    const { data: receivedRequest } = await supabase
      .from("friend_requests")
      .select("*")
      .eq("requester_id", friendId)
      .eq("receiver_id", curUserId)
      .single();

    return receivedRequest;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function addFriend({ curUserEmail, friendEmail }) {
  try {
    const [curUser, friendExist] = await Promise.all([
      getUserByEmail(curUserEmail),
      getUserByEmail(friendEmail),
    ]);

    // 1. Validate input email:
    // If input email same as email of current user, return error message
    if (curUserEmail === friendEmail)
      throw new Error("This email belongs to you");

    // If input email does not belong to anyone in users table in db, return error message
    if (!friendExist)
      throw new Error("This email is not registered in this app");

    const idsObj = {
      curUserId: curUser.id,
      friendId: friendExist.id,
    };
    const [isFriend, sentRequest, receivedRequest] = await Promise.all([
      checkIfFriend(idsObj),
      checkSentRequests(idsObj),
      checkReceivedRequests(idsObj),
    ]);
    // If input email belongs to someone that's already in current user's friends list, return error message
    if (isFriend) throw new Error("This user is already in your friends list");

    // If input email belongs to someone the user has already sent a request to, return error message
    if (sentRequest) throw new Error("You already sent a request to this user");

    // If input email belongs to someone who already sent a request to the current user, return error message
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

export async function getRequests({ queryKey }) {
  const [_, curUserId] = queryKey;
  try {
    const { data } = await supabase
      .from("friend_requests")
      .select("*")
      .eq("receiver_id", curUserId);

    return data;
  } catch (err) {
    console.log("ERROR HERE 💥💥💥:", err.message);
    throw new Error(err.message);
  }
}

export async function getRequesterDetails(requests) {
  const promisesArr = requests.map(async (request) => {
    const { data } = await supabase
      .from("users")
      .select("email, id, name, image")
      .eq("id", request.requester_id)
      .single();

    return { ...request, requesterDetails: data };
  });

  const requestsWithDetails = await Promise.all(promisesArr);

  return requestsWithDetails;
}

export async function rejectRequest(id) {
  try {
    await supabase.from("friend_requests").delete().eq("id", id);
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function acceptRequest({ curUserId, friendId, requestId }) {
  const idsArr = [curUserId, friendId].sort();
  try {
    const promisesArr = [
      // insert row in friends table in db
      await supabase
        .from("friends")
        .insert([{ user1_id: idsArr.at(0), user2_id: idsArr.at(1) }]),
      // delete row in friend_requests table in db
      await supabase.from("friend_requests").delete().eq("id", requestId),
    ];

    await Promise.all(promisesArr);

    return null;
  } catch (err) {
    throw new Error(err.message);
  }
}
