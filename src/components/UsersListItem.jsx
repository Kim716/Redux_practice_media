import { useThunk } from '../hooks/use-thunk';
import { removeUser } from '../store';
import Button from './Button';
import { GoTrashcan } from 'react-icons/go';
import ExpandablePanel from './ExpandablePanel';

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleRemove = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleRemove}>
        <GoTrashcan />
      </Button>
      <div className="mr-3">{user.name}</div>
      {error && <div className="text-red-500">error removing user... </div>}
    </>
  );

  return <ExpandablePanel header={header}>CONTENT</ExpandablePanel>;
}

export default UsersListItem;
