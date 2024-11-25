import CurrentUserDetails from "./CurrentUserDetails";
import Friends from "./Friends";
import SideNavHeader from "./SideNavHeader";
import SideNavLinksList from "./SideNavLinksList";

function SideNav({ onClose, isNavOpen }) {
  return (
    <>
      <div
        className={`absolute bottom-0 top-0 w-full backdrop-blur-sm transition-all duration-500 ${!isNavOpen && "invisible opacity-0"}`}
        onClick={onClose}
      ></div>
      <div
        className={`absolute bottom-0 right-0 top-0 z-10 flex w-4/5 flex-col bg-slate-100 shadow-lg transition-all duration-1000 ${!isNavOpen && "pointer-events-none translate-x-full opacity-0"}`}
      >
        <SideNavHeader onClose={onClose} />
        <Friends />
        <SideNavLinksList onClose={onClose} />
        <CurrentUserDetails />
      </div>
    </>
  );
}

export default SideNav;
