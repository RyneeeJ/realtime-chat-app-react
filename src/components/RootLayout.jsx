import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import { useUser } from "../hooks/useUser";
import { insertUser } from "../services/apiAuth";
import { SliderContextProvider } from "../contexts/SliderContext";

import Sidebar from "./Sidebar";

function RootLayout() {
  const { user } = useUser();

  useEffect(() => {
    async function createUser() {
      // Create user profile in 'users' table if signed in for the first time
      await insertUser({
        email: user.email,
        name: user.user_metadata.full_name,
        image: user.user_metadata.avatar_url,
      });
    }

    createUser();
  }, [user.email, user.user_metadata.full_name, user.user_metadata.avatar_url]);

  return (
    <SliderContextProvider>
      <div className="relative mx-auto flex h-full max-w-6xl flex-col overflow-x-hidden">
        <Header />

        <main className="xs:px-6 flex-1 overflow-y-auto px-4 md:flex md:px-0">
          <Sidebar />
          <div className="md:flex-1 md:px-6">
            <Outlet />
          </div>
        </main>
      </div>
    </SliderContextProvider>
  );
}

export default RootLayout;
