import { Link } from "react-router-dom";

function SideNavLink({
  children,
  to,
  isActive = false,
  icon,
  className,
  onClick,
}) {
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
