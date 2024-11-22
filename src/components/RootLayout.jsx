import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import { useUser } from "../hooks/useUser";
import { insertUser } from "../services/apiAuth";

function RootLayout() {
  const { user } = useUser();

  useEffect(() => {
    async function createUser() {
      await insertUser({
        email: user.email,
        name: user.user_metadata.full_name,
        image: user.user_metadata.avatar_url,
      });
    }

    createUser();
  }, [user.email, user.user_metadata.full_name, user.user_metadata.avatar_url]);
  return (
    <div className="mx-auto max-w-6xl bg-red-300">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
