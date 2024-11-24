function ChatMessageItem({ num }) {
  return (
    <li
      className={`max-w-64 rounded-[5px] px-3 py-1 ${num.status === "sent" ? "self-end bg-blue-100" : "self-start bg-gray-200"} `}
    >
      <div>Hello #{num.id}</div>
    </li>
  );
}

export default ChatMessageItem;
