import { UserPlusIcon } from "@heroicons/react/24/outline";
import SideNavLink from "./SideNavLink";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import LogoutButton from "./LogoutButton";
import { useRequestsContext } from "../contexts/FriendRequestsContext";

function SideNavLinksList({ onClose }) {
  const iconClass = "size-8 text-blue-600";
  const linkClass =
    "flex cursor-pointer items-center gap-3 p-4 text-lg font-semibold transition-all duration-100 hover:bg-blue-100";

  const { requests } = useRequestsContext();
  return (
    <div className="flex flex-col">
      <SideNavLink
        icon={<UserPlusIcon className={iconClass} />}
        to="/add-friend"
        className={linkClass}
        onClick={onClose}
      >
        Add Friend
      </SideNavLink>
      <SideNavLink
        icon={<UserGroupIcon className={iconClass} />}
        to="/friend-requests"
        className={linkClass}
        onClick={onClose}
      >
        Friend Requests {requests?.length > 0 && `(${requests?.length})`}
      </SideNavLink>
      <LogoutButton iconClass={iconClass} className={linkClass} />
    </div>
  );
}

export default SideNavLinksList;
