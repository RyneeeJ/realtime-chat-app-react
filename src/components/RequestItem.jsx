import Button from "./Button";

function RequestItem({ request }) {
  // eslint-disable-next-line no-unused-vars
  const { name, email, image, userId } = request;
  return (
    <li className="flex items-center gap-4 py-2">
      <div className="aspect-square w-24 overflow-hidden rounded-full">
        <img src="/default-image.jpg" alt={name} className="object-cover" />
      </div>
      <div>
        <div className="text-xl font-semibold">{name}</div>
        <div className="mb-3">{email}</div>
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
