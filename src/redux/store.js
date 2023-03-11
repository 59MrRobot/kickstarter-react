import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuReducer';

export const store = configureStore({
  reducer: menuReducer,
});