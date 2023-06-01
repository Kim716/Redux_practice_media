import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const addUser = createAsyncThunk('users/add', async (name) => {
  const res = await axios.post('http://localhost:3005/users', { name });

  // !!! FOR DEV !!!
  await pause(1000); // 等兩秒

  return res.data;
});

// !!! FOR DEV !!!
function pause(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export { addUser };
