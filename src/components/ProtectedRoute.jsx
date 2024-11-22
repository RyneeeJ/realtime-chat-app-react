import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isPending } = useUser();

  if (!isPending && !isAuthenticated) return <Navigate to="/login" />;
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
