import { useNavigate } from "react-router-dom";

function ErrorFallback({ error }) {
  const navigate = useNavigate();
  return (
    <div>
      <p>Something went wrong...</p>
      <p className="text-red-700">{error.message}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default ErrorFallback;
