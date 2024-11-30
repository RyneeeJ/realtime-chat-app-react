function ChatMessageItem({ message, friendId }) {
  const { sender_id, content } = message;

  return (
    <li
      className={`rounded-[5px] ${sender_id === friendId ? "self-start bg-gray-200" : "self-end bg-blue-100"}`}
    >
      <div className="w-fit max-w-64 break-words px-3 py-1">{content}</div>
    </li>
  );
}

export default ChatMessageItem;
