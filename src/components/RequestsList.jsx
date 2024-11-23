import RequestItem from "./RequestItem";

const requests = [
  {
    userId: 1,
    name: "Ryne Gandia",
    email: "imrynegandia@gmail.com",
    image: "/default-img.jpg",
    requestId: 123,
  },
  {
    userId: 2,
    name: "James Gandia",
    email: "imjamesgandia@gmail.com",
    image: "/default-img.jpg",
    requestId: 231,
  },
  {
    userId: 3,
    name: "James Gandia",
    email: "imjamesgandia@gmail.com",
    image: "/default-img.jpg",
    requestId: 231,
  },
  {
    userId: 4,
    name: "James Gandia",
    email: "imjamesgandia@gmail.com",
    image: "/default-img.jpg",
    requestId: 231,
  },
  {
    userId: 5,
    name: "James Gandia",
    email: "imjamesgandia@gmail.com",
    image: "/default-img.jpg",
    requestId: 231,
  },
  {
    userId: 6,
    name: "James Gandia",
    email: "imjamesgandia@gmail.com",
    image: "/default-img.jpg",
    requestId: 231,
  },
];

function RequestsList() {
  return (
    <ul className="space-y-3">
      {requests.map((request) => (
        <RequestItem key={request.requestId} request={request} />
      ))}{" "}
    </ul>
  );
}

export default RequestsList;
