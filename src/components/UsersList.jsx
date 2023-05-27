import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store';

function UsersList() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]); // 只有在第一次載入元件會執行，所以 dependencies 為空就好，但 eslint..

  if (isLoading) {
    return <div>is loading...</div>;
  }

  if (error) {
    return <div>error fetching data...</div>;
  }

  return <h1>{data.length}</h1>;
}

export default UsersList;
