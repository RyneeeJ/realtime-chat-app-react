import Button from "../components/Button";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const { signIn } = useLogin();

  return (
    <div className="flex h-full items-center justify-center">
      <div>
        <div>LOGO HERE</div>
        <h2 className="mb-1 text-[2.5rem] font-bold">
          <span className="text-blue-600">React</span>Talks
        </h2>
        <p className="mb-10 italic">React. Chat. Connect.</p>
        <Button onClick={signIn} color="blue" size="large">
          <div className="flex items-center gap-3">
            <span>
              <img
                className="size-6"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
              />
            </span>
            <span>Sign in with Google</span>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Login;
