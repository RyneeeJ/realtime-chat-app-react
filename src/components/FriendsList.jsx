import { useFriendsContext } from "../contexts/FriendsContext";
import FriendItem from "./FriendItem";

function FriendsList() {
  const { friends } = useFriendsContext();

  return (
    <ul className="flex-1 overflow-y-scroll">
      {friends.map((friend) => (
        <FriendItem key={friend.id} friend={friend} />
      ))}
      {friends.length === 0 && (
        <p className="px-4 text-gray-400">
          Nothing to show here... <br /> Add someone and start chatting
        </p>
      )}
    </ul>
  );
}

export default FriendsList;
