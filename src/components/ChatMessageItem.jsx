function ChatMessageItem({ message, friendId }) {
  const { receiver_id, content } = message;

  return (
    <li
      className={`max-w-64 rounded-[5px] px-3 py-1 ${receiver_id !== friendId ? "self-end bg-blue-100" : "self-start bg-gray-200"} `}
    >
      <div>{content}</div>
    </li>
  );
}

export default ChatMessageItem;
