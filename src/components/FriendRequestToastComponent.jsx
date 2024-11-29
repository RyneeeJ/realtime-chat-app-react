import { UserPlusIcon } from "@heroicons/react/24/solid";

function FriendRequestToastComponent({ name }) {
  return (
    <div className="flex items-center gap-4">
      <UserPlusIcon className="size-12 text-blue-600" />
      <p className="text-lg text-slate-950">
        <span className="font-semibold">{name}</span> has sent you a friend
        request.
      </p>
    </div>
  );
}

export default FriendRequestToastComponent;
