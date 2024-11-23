import PageHeading from "../components/PageHeading";
import RequestsList from "../components/RequestsList";

function FriendRequests() {
  return (
    <div className="h-full overflow-auto">
      <PageHeading>Friend Requests</PageHeading>
      <RequestsList />
    </div>
  );
}

export default FriendRequests;
