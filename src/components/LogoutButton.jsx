import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { useLogout } from "../hooks/useLogout";

function LogoutButton({ iconClass, className }) {
  const { isPending, signOut } = useLogout();
  return (
    <button className={className} onClick={signOut}>
      <span>
        <ArrowRightStartOnRectangleIcon className={iconClass} />
      </span>
      <span>{isPending ? "Loading..." : "Logout"}</span>
    </button>
  );
}

export default LogoutButton;
