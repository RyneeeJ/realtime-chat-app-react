import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../hooks/useUser";
import { useAddFriend } from "../hooks/useAddFriend";
import Button from "./Button";

function AddFriendForm() {
  const [errorState, setErrorState] = useState("");
  const [successState, setSuccessState] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    user: { email: curUserEmail },
  } = useUser();

  // eslint-disable-next-line no-unused-vars
  const { addFriend, isPending, error } = useAddFriend({});

  const onSubmit = (data) => {
    setErrorState("");
    setSuccessState("");
    const { email: friendEmail } = data;
    addFriend(
      { curUserEmail, friendEmail },
      {
        onError: (err) => setErrorState(err.message),
        onSuccess: (success) => setSuccessState(success),
      },
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex max-w-[40rem] flex-col sm:flex-row sm:gap-3"
    >
      <div className="sm:flex-1">
        <input
          disabled={isPending}
          {...register("email", { required: "This field is required" })}
          type="email"
          placeholder="Enter friend's email"
          className="mb-1 w-full rounded-md bg-gray-200 px-4 py-2 placeholder:text-gray-400 sm:mb-3 sm:h-11 sm:px-6 sm:placeholder:text-lg"
        />
        <div className="mb-5 font-light sm:font-normal">
          <p className="text-red-600">{errors?.email?.message || errorState}</p>
          <p className="text-green-600">{successState}</p>
        </div>
      </div>
      <div className="self-end sm:self-start">
        <Button disabled={isPending} color="blue" type="submit" size="medium">
          <span className="sm:text-lg">Send Request</span>
        </Button>
      </div>
    </form>
  );
}

export default AddFriendForm;
