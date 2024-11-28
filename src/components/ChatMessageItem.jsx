function ChatMessageItem({ message, friendId }) {
  const { sender_id, content } = message;

  return (
    <li
      className={`max-w-64 rounded-[5px] px-3 py-1 ${sender_id === friendId ? "self-start bg-gray-200" : "self-end bg-blue-100"} `}
    >
      <div>{content}</div>
    </li>
  );
}

export default ChatMessageItem;
