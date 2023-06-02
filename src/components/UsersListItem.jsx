import { useThunk } from '../hooks/use-thunk';
import { removeUser } from '../store';
import Button from './Button';
import { GoTrashcan } from 'react-icons/go';

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleRemove = () => {
    doRemoveUser(user);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex items-center">
          <Button className="mr-3" loading={isLoading} onClick={handleRemove}>
            <GoTrashcan />
          </Button>
          <div className="mr-3">{user.name}</div>
          {error && <div className="text-red-500">error removing user... </div>}
        </div>
      </div>
    </div>
  );
}

export default UsersListItem;
