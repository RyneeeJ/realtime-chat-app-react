import Button from "./Button";

function RequestItem({ request }) {
  // eslint-disable-next-line no-unused-vars
  const { name, email, image, userId } = request;
  return (
    <li className="flex items-center gap-4 py-2">
      <div className="xs:w-24 aspect-square w-20 overflow-hidden rounded-full md:w-20">
        <img src="/default-image.jpg" alt={name} className="object-cover" />
      </div>
      <div className="flex-1 sm:flex sm:items-center sm:justify-between md:flex-col md:items-start md:space-y-2 lg:flex-row lg:items-center">
        <div className="sm:space-y-1 md:space-y-0">
          <div className="text-xl font-semibold sm:font-bold">{name}</div>
          <div className="xs:text-base mb-3 text-sm sm:text-lg">{email}</div>
        </div>
        <div className="space-x-3">
          <Button color="blue" size="small">
            Accept
          </Button>
          <Button color="white" size="small">
            Decline
          </Button>
        </div>
      </div>
    </li>
  );
}

export default RequestItem;
