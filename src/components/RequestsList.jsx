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
    requestId: 23,
  },
  {
    userId: 3,
    name: "James Gandia",
    email: "imjamesgandia@gmail.com",
    image: "/default-img.jpg",
    requestId: 21,
  },
  {
    userId: 4,
    name: "James Gandia",
    email: "imjamesgandia@gmail.com",
    image: "/default-img.jpg",
    requestId: 31,
  },
  {
    userId: 5,
    name: "James Gandia",
    email: "imjamesgandia@gmail.com",
    image: "/default-img.jpg",
    requestId: 2231,
  },
  {
    userId: 6,
    name: "James Gandia",
    email: "imjamesgandia@gmail.com",
    image: "/default-img.jpg",
    requestId: 451,
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
