import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

function MessageToastComponent({ message, name }) {
  const cutMessage = message.slice(0, 40) + "...";
  const displayedMessage = message.length > 50 ? cutMessage : message;

  return (
    <div className="flex items-center gap-4">
      <PaperAirplaneIcon className="size-9 text-blue-600" />
      <div className="text-slate-950">
        <div className="text-lg font-bold">{name}</div>
        <p>{displayedMessage}</p>
      </div>
    </div>
  );
}

export default MessageToastComponent;
