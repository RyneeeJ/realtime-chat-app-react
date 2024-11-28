import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../hooks/useUser";
import { useSendMessage } from "../hooks/useSendMessage";

function MessageForm({ friendId }) {
  const messageInput = useRef(null);
  const { register, handleSubmit, setValue, reset } = useForm();
  const { user } = useUser();
  const { sendMessage, isPending } = useSendMessage();

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

  // This function is used to merge my custom ref to the one provided by react hook form
  const setTextAreaRef = (element) => {
    messageInput.current = element; // Assign to your ref
    register("content").ref(element); // Register the textarea
  };

  const handleChange = (e) => {
    // This auto-resizes the text area when the input becomes too long or too short
    messageInput.current.style.height = "auto";
    messageInput.current.style.height = `${Math.min(messageInput.current.scrollHeight, 200)}px`;

    // Manually set the element's value to the 'content' ref
    setValue("content", e.target.value);
  };

  const onSubmit = (data) => {
    const { content } = data;
    const messageObj = {
      sender_id: user.id,
      receiver_id: friendId,
      content,
    };
    sendMessage(messageObj);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-3 pb-2 pt-4"
      >
        <textarea
          required
          className="max-h-200 inline-block flex-1 resize-none rounded-md bg-gray-200 px-2 py-1.5 placeholder:text-gray-400"
          ref={setTextAreaRef}
          onChange={handleChange}
          rows={1}
          placeholder="Enter your message..."
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault(); // Prevents newline on Enter
              handleSubmit(onSubmit)(); // Triggers form submission
            }
          }}
        />
        <button disabled={isPending} type="submit" className="self-end">
          <PaperAirplaneIcon className="size-10 text-blue-600" />
        </button>
      </form>
    </>
  );
}

export default MessageForm;
