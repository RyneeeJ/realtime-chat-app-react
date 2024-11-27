import { Link, useParams } from "react-router-dom";
import { useSlider } from "../contexts/SliderContext";

function FriendItem({ friend }) {
  const { name, email, image, id } = friend;

  const { handleClose } = useSlider();
  const { friendId: paramId } = useParams();
  const handleCLick = () => {
    handleClose();
  };

  const isActive = String(paramId) === String(id);

  return (
    <li>
      <Link
        className={`flex cursor-pointer items-center gap-3 px-4 py-3 transition-all duration-100 hover:bg-blue-100 ${isActive && "bg-blue-100"}`}
        onClick={handleCLick}
        to={`/chat/${id}`}
      >
        <div className="aspect-square w-16 overflow-hidden rounded-full">
          <img src={image || "/default-image.jpg"} className="object-cover" />
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
