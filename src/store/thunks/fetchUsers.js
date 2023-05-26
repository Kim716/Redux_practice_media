import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const res = await axios.get('http://localhost:3005/users');

  return res.data; //db 中的 users data 用在 reducers 會是 action.payload
});

// fetchUsers 在被創造出來後會生成三種 property
// fetchUsers.pending === 'users/fetch/pending'
// fetchUsers.fulfilled === 'users/fetch/fulfilled'
// fetchUsers.rejected === 'users/fetch/rejected'

export { fetchUsers };
