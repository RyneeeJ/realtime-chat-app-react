import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function PageNotFound() {
  const navigate = useNavigate();
  useDocumentTitle("Page Not Found");
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center gap-6 text-2xl">
        <span>
          <PaperAirplaneIcon className="size-14 text-blue-600" />
        </span>
        <span className="font-semibold">This page does not exist</span>
      </div>
      <Button onClick={() => navigate(-1)} color="blue" size="large">
        Go Back
      </Button>
    </div>
  );
}

export default PageNotFound;
