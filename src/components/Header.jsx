import { Bars3Icon } from "@heroicons/react/24/solid";
import SideNav from "./SideNav";

import { useEffect } from "react";
import { useSlider } from "../contexts/SliderContext";

function Header() {
  const { handleClose, isNavOpen, handleOpen } = useSlider();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isNavOpen) handleClose();
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isNavOpen, handleClose]);

  return (
    <>
      <div className="flex h-14 items-center justify-between border-b border-gray-400 px-4">
        <div className="text-2xl font-semibold">Logo</div>
        <button className="cursor-pointer" onClick={handleOpen}>
          <Bars3Icon className="size-10" />
        </button>
      </div>

      <SideNav isNavOpen={isNavOpen} onClose={handleClose} />
    </>
  );
}

export default Header;
