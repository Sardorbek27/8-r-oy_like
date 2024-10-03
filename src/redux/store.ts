import { configureStore } from '@reduxjs/toolkit';
import likesReducer from '../slices/likesSlice';

export const store = configureStore({
  reducer: {
    likes: likesReducer,
  },
});

// RootState va AppDispatch turlarini eksport qilish
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
