import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import { useUser } from "../hooks/useUser";
import { insertUser } from "../services/apiAuth";
import { SliderContextProvider } from "../contexts/SliderContext";

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
        <main className="flex-1 overflow-y-auto px-6">
          <Outlet />
        </main>
      </div>
    </SliderContextProvider>
  );
}

export default RootLayout;
