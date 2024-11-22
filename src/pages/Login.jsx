import { useLogin } from "../hooks/useLogin";

function Login() {
  const { signIn } = useLogin();

  return (
    <div>
      <div>LOGO</div>
      <p>Welcome to ReactTalks!</p>
      <button onClick={signIn}>Sign in with Google</button>
    </div>
  );
}

export default Login;
