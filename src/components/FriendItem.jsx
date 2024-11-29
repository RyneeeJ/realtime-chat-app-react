import { Link, useParams } from "react-router-dom";
import { useSlider } from "../contexts/SliderContext";
import { useConversationsContext } from "../contexts/ConversationContext";
import UnreadMessageNotif from "./UnreadMessageNotif";

function FriendItem({ friend }) {
  const { name, email, image, id } = friend;
  const { handleClose } = useSlider();
  const { friendId: paramId } = useParams();

  const { unreadCounts } = useConversationsContext();

  const unreadMessages = unreadCounts[id];

  const handleClick = () => {
    handleClose();
  };

  const isActive = String(paramId) === String(id);

  return (
    <li>
      <Link
        className={`flex cursor-pointer items-center gap-3 px-4 py-3 transition-all duration-100 hover:bg-blue-100 ${isActive && "bg-blue-100"}`}
        onClick={handleClick}
        to={`/chat/${id}`}
      >
        <div className="aspect-square w-16 overflow-hidden rounded-full">
          <img src={image || "/default-image.jpg"} className="object-cover" />
        </div>

        <div
          className={`${unreadMessages > 0 && "font-bold"} overflow-x-hidden`}
        >
          <div className="text-lg">{name}</div>
          <div className="text-sm">{email}</div>
        </div>

        {unreadMessages > 0 && (
          <UnreadMessageNotif type="single" count={unreadMessages} />
        )}
      </Link>
    </li>
  );
}

export default FriendItem;
