import { Bars3Icon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <div className="flex h-14 items-center justify-between border-b border-gray-400 px-4">
      <div className="text-2xl font-semibold">LOGO</div>
      <button className="cursor-pointer">
        <Bars3Icon className="size-10" />
      </button>
    </div>
  );
}

export default Header;
