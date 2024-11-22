import { Outlet } from "react-router-dom";

import Header from "./Header";

function RootLayout() {
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
