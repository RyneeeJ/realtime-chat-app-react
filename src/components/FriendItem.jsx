import { useSlider } from "../contexts/SliderContext";

function FriendItem({ friend, ...props }) {
  const { name, email } = friend;
  const { handleClose } = useSlider();

  const handleCLick = () => {
    handleClose();
  };
  return (
    <li
      className="flex cursor-pointer items-center gap-3 px-4 py-3 transition-all duration-100 hover:bg-blue-100"
      onClick={handleCLick}
      {...props}
    >
      <div className="aspect-square w-16 overflow-hidden rounded-full">
        <img src="/default-image.jpg" className="object-cover" />
      </div>
      <div>
        <div className="text-lg font-bold">{name}</div>
        <div>{email}</div>
      </div>
    </li>
  );
}

export default FriendItem;
