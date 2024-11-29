import AddFriendForm from "../components/AddFriendForm";
import PageHeading from "../components/PageHeading";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function AddFriend() {
  useDocumentTitle("Add Friend");

  return (
    <div>
      <PageHeading>Add a friend</PageHeading>

      <AddFriendForm />
    </div>
  );
}

export default AddFriend;
