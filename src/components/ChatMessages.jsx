import { useEffect, useRef } from "react";
import ChatMessageItem from "./ChatMessageItem";

let arr = [];

for (let i = 0; i < 12; i++) {
  arr.push({ id: i + 1, status: i % 3 === 0 ? "sent" : "received" });
}

function ChatMessages() {
  const bottomRef = useRef(null);

  useEffect(() => {
    const scrollToBottom = () => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    scrollToBottom();
  }, []);

  return (
    <div className="flex-1 overflow-auto">
      <ul className="flex flex-col gap-5">
        {arr.map((num) => (
          <ChatMessageItem key={num.id} num={num} />
        ))}
      </ul>
      <div ref={bottomRef} />
    </div>
  );
}

export default ChatMessages;
