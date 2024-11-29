import { UserPlusIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";

import { useRequestsContext } from "../contexts/FriendRequestsContext";
import SideNavLink from "./SideNavLink";
import LogoutButton from "./LogoutButton";
import UnreadMessageNotif from "./UnreadMessageNotif";

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
            <UnreadMessageNotif count={requests.length} />
          )}
        </div>
      </SideNavLink>
      <LogoutButton iconClass={iconClass} className={linkClass} />
    </div>
  );
}

export default SideNavLinksList;
