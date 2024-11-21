import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="mx-auto max-w-6xl bg-red-300">
      <header>HEADER</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
