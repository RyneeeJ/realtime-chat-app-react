import Button from "../components/Button";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useLogin } from "../hooks/useLogin";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

function Login() {
  const { signIn } = useLogin();
  useDocumentTitle("Login");

  return (
    <div className="flex h-full items-center justify-center">
      <div>
        <div className="mb-6">
          <PaperAirplaneIcon className="size-20 text-blue-600" />
        </div>
        <h2 className="mb-1 text-[2.5rem] font-bold sm:mb-6 sm:text-6xl">
          <span className="text-blue-600">React</span>Talks
        </h2>
        <p className="mb-10 italic sm:mb-14 sm:text-xl">
          React. Chat. Connect.
        </p>
        <Button onClick={signIn} color="blue" size="large">
          <div className="flex items-center gap-3 sm:gap-4">
            <span>
              <img
                className="size-6 sm:size-8"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
              />
            </span>
            <span className="sm:text-2xl">Sign in with Google</span>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Login;
