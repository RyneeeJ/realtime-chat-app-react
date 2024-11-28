import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useFriendDetails } from "../hooks/useFriendDetails";

function ChatWindowHeader({ friendId }) {
  const { friendDetails, isFetching } = useFriendDetails(friendId);

  // TODO: use suspense and proper loader here
  if (isFetching) return <p>LOADING HEADERRRRRRR</p>;
  return (
    <div
      role="banner"
      className="flex items-center gap-5 pb-4 pt-2 sm:gap-7 sm:pt-4"
    >
      <button>
        <ArrowLeftIcon className="size-6 sm:size-7" />
      </button>
      <div className="flex items-center gap-3 sm:gap-5">
        <div className="aspect-square w-12 overflow-hidden rounded-full sm:w-14">
          <img
            src={friendDetails.image || "/default-image.jpg"}
            alt="Ryne Gandia"
          />
        </div>
        <div className="text-xl font-semibold">{friendDetails.name}</div>
      </div>
    </div>
  );
}

export default ChatWindowHeader;
