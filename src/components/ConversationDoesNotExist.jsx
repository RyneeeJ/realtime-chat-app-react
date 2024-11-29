import { useNavigate } from "react-router-dom";
import Button from "./Button";

function ConversationDoesNotExist() {
  const navigate = useNavigate();
  return (
    <div className="space-y-8 text-center">
      <p className="mt-16 text-xl font-semibold">
        This conversation does not exist...
      </p>
      <Button size="medium" color="blue" onClick={() => navigate(-1)}>
        Go back
      </Button>
    </div>
  );
}

export default ConversationDoesNotExist;
