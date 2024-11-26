import { XMarkIcon } from "@heroicons/react/24/solid";

function SideNavHeader({ onClose }) {
  return (
    <div className="flex h-14 items-center justify-between px-4">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="cursor-pointer md:hidden" onClick={onClose}>
        <XMarkIcon className="size-10" />
      </div>
    </div>
  );
}

export default SideNavHeader;
