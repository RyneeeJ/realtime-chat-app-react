import { supabase } from "./supabase";

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    console.log("ERROR 💥💥💥:", error.message);
    throw new Error("There was a problem signing you in");
  }

  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log("ERROR 💥💥💥:", error.message);
    throw new Error("There was a problem signing out");
  }
}

export async function getCurrentUser() {
  // Check if there is a session, if there's none, return null
  const { data: session } = await supabase.auth.getSession();

  if (!session?.session) return null;

  // If there's a session, get current user
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.log("ERROR 💥💥💥:", error.message);
    throw new Error("There was a problem retrieving the current user");
  }

  // return user data
  return data?.user;
}
