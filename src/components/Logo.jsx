import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div>
        <PaperAirplaneIcon className="size-9 text-blue-600" />
      </div>
      <div>
        <span className="text-blue-600">React</span>Talks
      </div>
    </div>
  );
}

export default Logo;
