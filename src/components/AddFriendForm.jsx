import Button from "./Button";

function AddFriendForm() {
  return (
    <form className="flex flex-col">
      <input
        type="email"
        placeholder="Enter friend's email"
        className="mb-1 rounded-md bg-gray-200 px-4 py-2 placeholder:text-gray-400"
      />
      <div className="mb-5 font-light">
        {/* <p className="text-red-600">You already sent a request to this user</p> */}
      </div>
      <div className="self-end">
        <Button color="blue" type="submit" size="medium">
          Send Request
        </Button>
      </div>
    </form>
  );
}

export default AddFriendForm;
