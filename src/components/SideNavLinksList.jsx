import { UserPlusIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";

import { useRequestsContext } from "../contexts/FriendRequestsContext";
import SideNavLink from "./SideNavLink";
import LogoutButton from "./LogoutButton";

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
        <div className="flex items-center gap-3">
          <span>Friend Requests</span>
          {requests?.length > 0 && (
            <div className="h-6 w-6 rounded-full bg-blue-600 font-bold text-slate-100">
              <span className="flex items-center justify-center text-base">
                {requests?.length}
              </span>
            </div>
          )}
        </div>
      </SideNavLink>
      <LogoutButton iconClass={iconClass} className={linkClass} />
    </div>
  );
}

export default SideNavLinksList;
