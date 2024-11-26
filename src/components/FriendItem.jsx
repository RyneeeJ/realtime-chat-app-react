import { Link, useParams } from "react-router-dom";
import { useSlider } from "../contexts/SliderContext";

function FriendItem({ friend }) {
  const { name, email, chatId } = friend;
  const { handleClose } = useSlider();
  const { chatId: paramId } = useParams();
  const handleCLick = () => {
    handleClose();
  };

  const isActive = String(paramId) === String(chatId);
  return (
    <li>
      <Link
        className={`flex cursor-pointer items-center gap-3 px-4 py-3 transition-all duration-100 hover:bg-blue-100 ${isActive && "bg-blue-100"}`}
        onClick={handleCLick}
        to={`/chat/${chatId}`}
      >
        <div className="aspect-square w-16 overflow-hidden rounded-full">
          <img src="/default-image.jpg" className="object-cover" />
        </div>
        <div>
          <div className="text-lg">{name}</div>
          <div className="text-sm">{email}</div>
        </div>
      </Link>
    </li>
  );
}

export default FriendItem;
