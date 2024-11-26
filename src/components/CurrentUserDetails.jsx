import { useUser } from "../hooks/useUser";

function CurrentUserDetails() {
  const { user } = useUser();
  const {
    email,
    user_metadata: { avatar_url: image },
  } = user;

  return (
    <div className="flex items-center gap-3 p-4">
      <div className="aspect-square w-14 overflow-hidden rounded-full">
        <img src={image || "/default-image.jpg"} className="object-cover" />
      </div>
      <div className="font-semibold">{email}</div>
    </div>
  );
}

export default CurrentUserDetails;
