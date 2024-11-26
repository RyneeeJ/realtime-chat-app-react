import { Link, useLocation } from "react-router-dom";

function SideNavLink({ children, to, icon, className, onClick }) {
  const { pathname } = useLocation();

  const isActive = pathname === to;

  return (
    <Link
      onClick={onClick}
      to={to}
      className={`${className} ${isActive && "bg-blue-100"}`}
    >
      <span>{icon}</span>
      <span>{children}</span>
    </Link>
  );
}

export default SideNavLink;
