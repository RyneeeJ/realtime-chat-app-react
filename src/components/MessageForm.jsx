import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";

function MessageForm() {
  const messageInput = useRef(null);

  useEffect(() => {
    const textarea = messageInput.current;

    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        // Handle message sending or form submission here
      }
    };
    textarea.addEventListener("keydown", handleKeyDown);

    return () => {
      textarea.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleChange = () => {
    // This auto-resizes the text area when the input becomes too long or too short
    messageInput.current.style.height = "auto";
    messageInput.current.style.height = `${Math.min(messageInput.current.scrollHeight, 200)}px`;
  };

  return (
    <>
      <form className="flex items-center gap-3 pb-2 pt-4">
        <textarea
          required
          className="max-h-200 inline-block flex-1 resize-none rounded-md bg-gray-200 px-2 py-1.5 placeholder:text-gray-400"
          ref={messageInput}
          onChange={handleChange}
          rows={1}
          placeholder="Enter your message..."
        />
        <button type="submit" className="self-end">
          <PaperAirplaneIcon className="size-10 text-blue-600" />
        </button>
      </form>
    </>
  );
}

export default MessageForm;
