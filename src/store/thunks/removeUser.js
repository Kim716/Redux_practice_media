import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const removeUser = createAsyncThunk('users/remove', async (user) => {
  await axios.delete(`http://localhost:3005/users/${user.id}`);

  // !!! FOR DEV !!!
  await pause(1000);

  // !!!
  // return res.data; // 空物件 變成 action.payload，無助於我們更新 state
  // 主動回傳被刪除的 user
  return user;
});

// !!! FOR DEV !!!
function pause(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export { removeUser };
