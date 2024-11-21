import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import AddFriend from "./pages/AddFriend";
import Login from "./pages/Login";
import FriendRequests from "./pages/FriendRequests";
import ChatWindow from "./pages/ChatWindow";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/chat" /> },
      { path: "/chat", element: <Home /> },
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
  return <RouterProvider router={router} />;
}

export default App;
