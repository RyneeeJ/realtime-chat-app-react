import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import { useUser } from "../hooks/useUser";
import { insertUser } from "../services/apiAuth";
import { SliderContextProvider } from "../contexts/SliderContext";

import Sidebar from "./Sidebar";
import { FriendRequestsProvider } from "../contexts/FriendRequestsContext";
import { useRequests } from "../hooks/useRequests";

function RootLayout() {
  const { user } = useUser();
  const { data: requests, isFetching } = useRequests(user.id);

  useEffect(() => {
    async function createUser() {
      // Create user profile in 'users' table if signed in for the first time
      await insertUser({
        email: user.email,
        name: user.user_metadata.full_name,
        image: user.user_metadata.avatar_url,
        id: user.id,
      });
    }

    createUser();
  }, [
    user.email,
    user.user_metadata.full_name,
    user.user_metadata.avatar_url,
    user.id,
  ]);

  // TODO: use suspense later
  if (isFetching) return <p>LOADING SOMETHING...</p>;

  return (
    <SliderContextProvider>
      <FriendRequestsProvider initialRequests={requests} curUserId={user.id}>
        <div className="relative mx-auto flex h-full max-w-6xl flex-col overflow-x-hidden">
          <Header />

          <main className="flex-1 overflow-y-auto px-4 xs:px-6 md:flex md:px-0">
            <Sidebar />
            <div className="md:flex-1 md:px-6">
              <Outlet />
            </div>
          </main>
        </div>
      </FriendRequestsProvider>
    </SliderContextProvider>
  );
}

export default RootLayout;
