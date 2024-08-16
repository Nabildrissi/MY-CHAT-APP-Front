import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../redux/Chatroom/ChatSlice'; // Ensure the path is correct

const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

export default store;