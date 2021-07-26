import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Features/Counter/counterSlice';
import userReducer from '../Features/Example/exampleSlice'
export const store = configureStore({
	reducer: { counter: counterReducer, user: userReducer }
});
