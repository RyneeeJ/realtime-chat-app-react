import CurrentUserDetails from "./CurrentUserDetails";
import Friends from "./Friends";
import SideNavHeader from "./SideNavHeader";
import SideNavLinksList from "./SideNavLinksList";

function Sidebar() {
  return (
    <aside className="hidden w-[340px] overflow-auto border-r border-gray-400 md:flex md:flex-col lg:w-96">
      <SideNavHeader />
      <Friends />
      <SideNavLinksList />
      <CurrentUserDetails />
    </aside>
  );
}

export default Sidebar;
