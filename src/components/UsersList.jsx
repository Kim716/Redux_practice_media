import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store';

function UsersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]); // 只有在第一次載入元件會執行，所以 dependencies 為空就好，但 eslint..

  return <h1>UsersList</h1>;
}

export default UsersList;
