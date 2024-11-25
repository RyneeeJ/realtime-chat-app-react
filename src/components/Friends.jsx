import FriendsList from "./FriendsList";
import SearchBar from "./SearchBar";

function Friends() {
  return (
    <div className="flex flex-1 flex-col overflow-scroll">
      <SearchBar />
      <FriendsList />
    </div>
  );
}

export default Friends;
