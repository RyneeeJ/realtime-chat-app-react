function ChatWindowHeader({ friendDetails }) {
  return (
    <div role="banner" className="py-4">
      <div className="flex items-center gap-3 sm:gap-5">
        <div className="aspect-square w-12 overflow-hidden rounded-full sm:w-14">
          <img
            src={friendDetails?.image || "/default-image.jpg"}
            alt="Ryne Gandia"
          />
        </div>
        <div className="text-xl font-semibold">{friendDetails?.name}</div>
      </div>
    </div>
  );
}

export default ChatWindowHeader;
