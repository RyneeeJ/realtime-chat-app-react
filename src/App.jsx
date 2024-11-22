import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AddFriend from "./pages/AddFriend";
import Login from "./pages/Login";
import FriendRequests from "./pages/FriendRequests";
import ChatWindow from "./pages/ChatWindow";
import Home from "./pages/Home";
import RootLayout from "./components/RootLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/chat/:chatId",
        element: <ChatWindow />,
      },
      {
        path: "/add-friend",
        element: <AddFriend />,
      },
      { path: "/friend-requests", element: <FriendRequests /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
