import { useLogout } from "../hooks/useLogout";

function Header() {
  const { signOut, isPending } = useLogout();
  return (
    <div className="flex justify-between">
      <div>LOGO</div>
      <button onClick={signOut}>{isPending ? "LOADING..." : "Sign Out"}</button>
    </div>
  );
}

export default Header;
