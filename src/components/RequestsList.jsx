import { useEffect } from "react";
import { useFriendRequests } from "../contexts/FriendRequestsContext";
import { useRequesterDetails } from "../hooks/useRequesterDetails";

import RequestItem from "./RequestItem";

function RequestsList() {
  const { requests } = useFriendRequests();

  const { requestsWithDetails, refetch } = useRequesterDetails(requests);

  useEffect(() => {
    refetch();
  }, [requests, refetch]);

  return (
    <ul className="space-y-3">
      {requestsWithDetails.map((request) => (
        <RequestItem
          key={request.id}
          requester={request.requesterDetails}
          requestId={request.id}
        />
      ))}
      {requests.length === 0 && (
        <p className="text-lg text-gray-400 md:text-xl">
          No friend requests yet...
        </p>
      )}
    </ul>
  );
}

export default RequestsList;
