import FriendItem from "./FriendItem";

const friendsArr = [
  {
    userId: 1,
    name: "Ryne Gandia",
    email: "imrynegandia@gmail.com",
    image: "/default-img.jpg",
    chatId: 1023,
  },
  {
    userId: 2,
    name: "Ryne Gandia",
    email: "imrynegandia@gmail.com",
    image: "/default-img.jpg",
    chatId: 2003,
  },
  {
    userId: 3,
    name: "Ryne Gandia",
    email: "imrynegandia@gmail.com",
    image: "/default-img.jpg",
    chatId: 1024,
  },
  {
    userId: 4,
    name: "Ryne Gandia",
    email: "imrynegandia@gmail.com",
    image: "/default-img.jpg",
    chatId: 1123,
  },
  {
    userId: 5,
    name: "Ryne Gandia",
    email: "imrynegandia@gmail.com",
    image: "/default-img.jpg",
    chatId: 1053,
  },
  {
    userId: 6,
    name: "Ryne Gandia",
    email: "imrynegandia@gmail.com",
    image: "/default-img.jpg",
    chatId: 1034,
  },
  {
    userId: 7,
    name: "Ryne Gandia",
    email: "imrynegandia@gmail.com",
    image: "/default-img.jpg",
    chatId: 4374,
  },
];

function FriendsList() {
  return (
    <ul className="flex-1 overflow-y-scroll">
      {friendsArr.map((friend) => (
        <FriendItem key={friend.userId} friend={friend} />
      ))}
    </ul>
  );
}

export default FriendsList;
