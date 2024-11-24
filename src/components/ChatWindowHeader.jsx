import { ArrowLeftIcon } from "@heroicons/react/24/solid";

function ChatWindowHeader() {
  return (
    <div role="banner" className="flex items-center gap-5 pb-4 pt-2">
      <button>
        <ArrowLeftIcon className="size-6" />
      </button>
      <div className="flex items-center gap-3">
        <div className="aspect-square w-12 overflow-hidden rounded-full">
          <img src="/default-image.jpg" alt="Ryne Gandia" />
        </div>
        <div className="text-xl font-semibold">Ryne Gandia</div>
      </div>
    </div>
  );
}

export default ChatWindowHeader;
