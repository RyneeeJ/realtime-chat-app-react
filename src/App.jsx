import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AddFriend from "./pages/AddFriend";
import Login from "./pages/Login";
import FriendRequests from "./pages/FriendRequests";
import ChatWindow from "./pages/ChatWindow";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import RootLayout from "./components/RootLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute>
        <RootLayout />
        <ToastContainer stacked={true} />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chat/:friendId",
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
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "*",
    element: <PageNotFound />,
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
