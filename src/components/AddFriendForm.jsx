import Button from "./Button";

function AddFriendForm() {
  return (
    <form className="flex max-w-[40rem] flex-col sm:flex-row sm:gap-3">
      <div className="sm:flex-1">
        <input
          type="email"
          placeholder="Enter friend's email"
          className="mb-1 w-full rounded-md bg-gray-200 px-4 py-2 placeholder:text-gray-400 sm:mb-3 sm:h-11 sm:px-6 sm:placeholder:text-lg"
        />
        <div className="mb-5 font-light sm:font-normal">
          {/* <p className="text-red-600">
            You already sent a request to this user
          </p> */}
        </div>
      </div>
      <div className="self-end sm:self-start">
        <Button color="blue" type="submit" size="medium">
          <span className="sm:text-lg">Send Request</span>
        </Button>
      </div>
    </form>
  );
}

export default AddFriendForm;
