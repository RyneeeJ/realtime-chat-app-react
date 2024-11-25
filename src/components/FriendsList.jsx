import FriendItem from "./FriendItem";

const friendsArr = [
  {
    userId: 1,
    name: "Ryne Gandia",
    email: "imrynegandia@gmail.com",
    image: "/default-img.jpg",
  },
  {
    userId: 2,
    name: "Ryne Gandia",
    email: "imrynegandia@gmail.com",
    image: "/default-img.jpg",
  },
  {
    userId: 3,
    name: "Ryne Gandia",
    email: "imrynegandia@gmail.com",
    image: "/default-img.jpg",
  },
  {
    userId: 4,
    name: "Ryne Gandia",
    email: "imrynegandia@gmail.com",
    image: "/default-img.jpg",
  },
  {
    userId: 5,
    name: "Ryne Gandia",
    email: "imrynegandia@gmail.com",
    image: "/default-img.jpg",
  },
  {
    userId: 6,
    name: "Ryne Gandia",
    email: "imrynegandia@gmail.com",
    image: "/default-img.jpg",
  },
  {
    userId: 7,
    name: "Ryne Gandia",
    email: "imrynegandia@gmail.com",
    image: "/default-img.jpg",
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
