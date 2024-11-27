import { useRejectRequest } from "../hooks/useRejectRequest";
import Button from "./Button";

function RequestItem({ requester, requestId }) {
  const { name, email, image } = requester;

  const { reject, isPending } = useRejectRequest();

  const handleRejectRequest = () => reject(requestId);
  return (
    <li className="flex items-center gap-4 py-2">
      <div className="aspect-square w-20 overflow-hidden rounded-full xs:w-24 md:w-20">
        <img
          src={image || "/default-image.jpg"}
          alt={name}
          className="object-cover"
        />
      </div>
      <div className="flex-1 sm:flex sm:items-center sm:justify-between md:flex-col md:items-start md:space-y-2 lg:flex-row lg:items-center">
        <div className="sm:space-y-1 md:space-y-0">
          <div className="text-xl font-semibold sm:font-bold">{name}</div>
          <div className="mb-3 text-sm xs:text-base sm:text-lg">{email}</div>
        </div>
        <div className="space-x-3">
          <Button disabled={isPending} color="blue" size="small">
            Accept
          </Button>
          <Button
            disabled={isPending}
            onClick={handleRejectRequest}
            color="white"
            size="small"
          >
            Decline
          </Button>
        </div>
      </div>
    </li>
  );
}

export default RequestItem;
