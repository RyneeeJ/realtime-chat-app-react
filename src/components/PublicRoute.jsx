import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

function PublicRoute({ children }) {
  const { isAuthenticated, isPending } = useUser();

  if (!isPending && !isAuthenticated) return children;

  if (!isPending && isAuthenticated) return <Navigate to="/" replace={true} />;
}

export default PublicRoute;
