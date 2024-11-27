import { Suspense } from "react";
import PageHeading from "../components/PageHeading";
import RequestsList from "../components/RequestsList";

function FriendRequests() {
  return (
    <div className="h-full overflow-auto">
      <PageHeading>Friend Requests</PageHeading>
      <Suspense fallback={<p>FETCHING REQUESTS...</p>}>
        <RequestsList />
      </Suspense>
    </div>
  );
}

export default FriendRequests;
